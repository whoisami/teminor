/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Function: POST /api/contact
// Validates the contact/RFQ form payload and forwards it to
// info@teminor.com via the Resend API (https://resend.com).
//
// TODO(deploy): set the RESEND_API_KEY environment variable in the
// Cloudflare Pages project settings (Settings -> Environment variables)
// before this function can actually send email. Without it, requests will
// fail with a 500 error.

interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  formType?: "contact";
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  website?: string; // honeypot field, must stay empty
}

interface RFQPayload {
  formType: "rfq";
  company: string; // Firma / Unvan
  contactPerson: string; // Yetkili Kişi
  phone: string;
  email: string;
  requestDate: string; // Talep Tarihi
  requiredDeadline: string; // İstenen Termin
  deliveryLocation: string; // Teslim Yeri
  currency: string; // Teklif Para Birimi
  productService: string; // Ürün / Hizmet
  technicalSpec: string; // Teknik Özellik
  quantity: string; // Miktar
  targetBudget?: string; // Hedef Bütçe (opsiyonel)
  paymentPreference: string; // Ödeme Tercihi
  note?: string; // Ek Not / Kısıt (opsiyonel)
  website?: string; // honeypot field, must stay empty
}

type FormPayload = ContactPayload | RFQPayload;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = "info@teminor.com";

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function validateContact(payload: Partial<ContactPayload>): string | null {
  if (!payload.name?.trim()) return "Ad Soyad zorunludur.";
  if (!payload.company?.trim()) return "Şirket adı zorunludur.";
  if (!payload.email?.trim() || !EMAIL_RE.test(payload.email.trim()))
    return "Geçerli bir e-posta adresi girin.";
  if (!payload.phone?.trim()) return "Telefon numarası zorunludur.";
  if (!payload.sector?.trim()) return "Lütfen bir sektör seçin.";
  if (!payload.message?.trim()) return "Kısa bir açıklama girin.";
  return null;
}

function validateRFQ(payload: Partial<RFQPayload>): string | null {
  if (!payload.company?.trim()) return "Firma / Unvan zorunludur.";
  if (!payload.contactPerson?.trim()) return "Yetkili kişi zorunludur.";
  if (!payload.phone?.trim()) return "Telefon numarası zorunludur.";
  if (!payload.email?.trim() || !EMAIL_RE.test(payload.email.trim()))
    return "Geçerli bir e-posta adresi girin.";
  if (!payload.requiredDeadline?.trim()) return "İstenen termin zorunludur.";
  if (!payload.deliveryLocation?.trim()) return "Teslim yeri zorunludur.";
  if (!payload.currency?.trim()) return "Teklif para birimi zorunludur.";
  if (!payload.productService?.trim()) return "Ürün / hizmet zorunludur.";
  if (!payload.technicalSpec?.trim()) return "Teknik özellik zorunludur.";
  if (!payload.quantity?.trim()) return "Miktar zorunludur.";
  if (!payload.paymentPreference?.trim()) return "Ödeme tercihi zorunludur.";
  return null;
}

function contactEmailHtml(payload: ContactPayload): string {
  return `
    <h2>Yeni İletişim Formu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Şirket Adı:</strong> ${escapeHtml(payload.company)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Sektör:</strong> ${escapeHtml(payload.sector)}</p>
    <p><strong>Açıklama:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;
}

function rfqEmailHtml(payload: RFQPayload): string {
  const row = (label: string, value?: string) =>
    value?.trim()
      ? `<p><strong>${label}:</strong> ${escapeHtml(value).replace(/\n/g, "<br />")}</p>`
      : "";

  return `
    <h2>Yeni RFQ — Satın Alma Talep Formu</h2>
    ${row("Firma / Unvan", payload.company)}
    ${row("Yetkili Kişi", payload.contactPerson)}
    ${row("Telefon", payload.phone)}
    ${row("E-posta", payload.email)}
    ${row("Talep Tarihi", payload.requestDate)}
    ${row("İstenen Termin", payload.requiredDeadline)}
    ${row("Teslim Yeri", payload.deliveryLocation)}
    ${row("Teklif Para Birimi", payload.currency)}
    ${row("Ürün / Hizmet", payload.productService)}
    ${row("Teknik Özellik", payload.technicalSpec)}
    ${row("Miktar", payload.quantity)}
    ${row("Hedef Bütçe", payload.targetBudget)}
    ${row("Ödeme Tercihi", payload.paymentPreference)}
    ${row("Ek Not / Kısıt", payload.note)}
  `;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let payload: Partial<FormPayload>;
  try {
    payload = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, message: "Geçersiz istek gövdesi." }, 400);
  }

  const isRFQ = payload.formType === "rfq";

  if (payload.website) {
    // Honeypot filled in — treat as spam, respond as if it succeeded so
    // bots aren't tipped off, but don't actually send an email.
    return jsonResponse({ ok: true }, 200);
  }

  const error = isRFQ
    ? validateRFQ(payload as Partial<RFQPayload>)
    : validateContact(payload as Partial<ContactPayload>);
  if (error) {
    return jsonResponse({ ok: false, message: error }, 400);
  }

  if (!context.env.RESEND_API_KEY) {
    return jsonResponse(
      {
        ok: false,
        message:
          "E-posta gönderim servisi henüz yapılandırılmadı. Lütfen daha sonra tekrar deneyin.",
      },
      500
    );
  }

  const email = isRFQ
    ? (payload as RFQPayload).email
    : (payload as ContactPayload).email;
  const company = isRFQ
    ? (payload as RFQPayload).company
    : (payload as ContactPayload).company;
  const subject = isRFQ
    ? `Yeni RFQ Talebi — ${company}`
    : `Yeni İletişim Talebi — ${company}`;
  const emailHtml = isRFQ
    ? rfqEmailHtml(payload as RFQPayload)
    : contactEmailHtml(payload as ContactPayload);

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Teminor Web Sitesi <site@teminor.com>",
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => "");
      console.error("Resend API error:", resendRes.status, detail);
      return jsonResponse(
        { ok: false, message: "Talebiniz gönderilemedi, lütfen tekrar deneyin." },
        502
      );
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("Contact function error:", err);
    return jsonResponse(
      { ok: false, message: "Talebiniz gönderilemedi, lütfen tekrar deneyin." },
      500
    );
  }
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Function: POST /api/contact
// Validates the contact form payload and forwards it to info@teminor.com via
// the Resend API (https://resend.com).
//
// TODO(deploy): set the RESEND_API_KEY environment variable in the
// Cloudflare Pages project settings (Settings -> Environment variables)
// before this function can actually send email. Without it, requests will
// fail with a 500 error.

interface Env {
  RESEND_API_KEY: string;
}

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  website?: string; // honeypot field, must stay empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = "info@teminor.com";

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function validate(payload: Partial<ContactPayload>): string | null {
  if (payload.website) {
    // Honeypot filled in — treat as spam, reject silently upstream.
    return "spam-detected";
  }
  if (!payload.name?.trim()) return "Ad Soyad zorunludur.";
  if (!payload.company?.trim()) return "Şirket adı zorunludur.";
  if (!payload.email?.trim() || !EMAIL_RE.test(payload.email.trim()))
    return "Geçerli bir e-posta adresi girin.";
  if (!payload.phone?.trim()) return "Telefon numarası zorunludur.";
  if (!payload.sector?.trim()) return "Lütfen bir sektör seçin.";
  if (!payload.message?.trim()) return "Kısa bir açıklama girin.";
  return null;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let payload: Partial<ContactPayload>;
  try {
    payload = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, message: "Geçersiz istek gövdesi." }, 400);
  }

  const error = validate(payload);
  if (error === "spam-detected") {
    // Don't tip off bots — respond as if it succeeded.
    return jsonResponse({ ok: true }, 200);
  }
  if (error) {
    return jsonResponse({ ok: false, message: error }, 400);
  }

  const { name, company, email, phone, sector, message } =
    payload as ContactPayload;

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

  const emailHtml = `
    <h2>Yeni İletişim Formu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
    <p><strong>Şirket Adı:</strong> ${escapeHtml(company)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Sektör:</strong> ${escapeHtml(sector)}</p>
    <p><strong>Açıklama:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

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
        subject: `Yeni İletişim Talebi — ${company}`,
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

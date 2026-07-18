"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { trackManufacturerFormSubmit } from "@/lib/analytics/events";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

// Anayasa v2.0 §9 (Üretici Kabul Kriterleri) alanlarına dayanır — bu form,
// ihracat uygunluk analizinin ilk girdisidir; sipariş veya temsilcilik
// taahhüdü oluşturmaz.
export default function ManufacturerApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "manufacturer" as const,
      company: String(data.get("company") || "").trim(),
      companyWebsite: String(data.get("companyWebsite") || "").trim(),
      contactPerson: String(data.get("contactPerson") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      productGroup: String(data.get("productGroup") || "").trim(),
      hsCode: String(data.get("hsCode") || "").trim(),
      capacity: String(data.get("capacity") || "").trim(),
      moq: String(data.get("moq") || "").trim(),
      leadTime: String(data.get("leadTime") || "").trim(),
      certifications: String(data.get("certifications") || "").trim(),
      currentExportCountries: String(data.get("currentExportCountries") || "").trim(),
      targetMarket: String(data.get("targetMarket") || "").trim(),
      sampleCapability: String(data.get("sampleCapability") || "").trim(),
      englishCatalog: String(data.get("englishCatalog") || "").trim(),
      note: String(data.get("note") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    const errors: Record<string, string> = {};
    if (!payload.company) errors.company = "Firma adı zorunludur.";
    if (!payload.contactPerson) errors.contactPerson = "Yetkili kişi zorunludur.";
    if (!payload.email || !EMAIL_RE.test(payload.email))
      errors.email = "Geçerli bir e-posta adresi girin.";
    if (!payload.phone) errors.phone = "Telefon numarası zorunludur.";
    if (!payload.productGroup) errors.productGroup = "Ürün grubu zorunludur.";
    if (!payload.capacity) errors.capacity = "Kapasite zorunludur.";
    if (!payload.targetMarket) errors.targetMarket = "Hedef pazar zorunludur.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(body?.message || "Bir hata oluştu.");
      }

      trackManufacturerFormSubmit();
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Başvurunuz gönderilemedi, lütfen tekrar deneyin."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-white p-8 text-center">
        <p className="font-serif text-xl text-navy">Başvurunuz Alındı</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Teşekkür ederiz. Ekibimiz ürününüzü değerlendirip sizinle iletişime
          geçecektir. Bu başvuru bir satış veya ihracat garantisi
          oluşturmaz — yalnızca ihracat uygunluk değerlendirmesinin ilk
          adımıdır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it in. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="mfr-website">Web Sitesi (doldurmayın)</label>
        <input
          type="text"
          id="mfr-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Firma Adı" name="company" error={fieldErrors.company}>
          <input id="mfr-company" name="company" type="text" required className="form-input" autoComplete="organization" />
        </Field>
        <Field label="Web Sitesi (opsiyonel)" name="companyWebsite">
          <input id="mfr-companyWebsite" name="companyWebsite" type="text" className="form-input" placeholder="www.ornek.com" />
        </Field>
        <Field label="Yetkili Kişi" name="contactPerson" error={fieldErrors.contactPerson}>
          <input id="mfr-contactPerson" name="contactPerson" type="text" required className="form-input" autoComplete="name" />
        </Field>
        <Field label="E-posta" name="email" error={fieldErrors.email}>
          <input id="mfr-email" name="email" type="email" required className="form-input" autoComplete="email" />
        </Field>
        <Field label="Telefon" name="phone" error={fieldErrors.phone}>
          <input id="mfr-phone" name="phone" type="tel" required className="form-input" autoComplete="tel" />
        </Field>
        <Field label="Ürün Grubu" name="productGroup" error={fieldErrors.productGroup}>
          <input id="mfr-productGroup" name="productGroup" type="text" required className="form-input" placeholder="Örn: PVC boru ve fitings" />
        </Field>
        <Field label="HS / GTİP Kodu (opsiyonel)" name="hsCode">
          <input id="mfr-hsCode" name="hsCode" type="text" className="form-input" />
        </Field>
        <Field label="Aylık Üretim Kapasitesi" name="capacity" error={fieldErrors.capacity}>
          <input id="mfr-capacity" name="capacity" type="text" required className="form-input" placeholder="Örn: 50 ton/ay" />
        </Field>
        <Field label="Minimum Sipariş Miktarı (MOQ)" name="moq">
          <input id="mfr-moq" name="moq" type="text" className="form-input" />
        </Field>
        <Field label="Standart Teslim Süresi" name="leadTime">
          <input id="mfr-leadTime" name="leadTime" type="text" className="form-input" placeholder="Örn: 30 gün" />
        </Field>
        <Field label="Sertifikalar (opsiyonel)" name="certifications">
          <input id="mfr-certifications" name="certifications" type="text" className="form-input" placeholder="Örn: CE, ISO 9001" />
        </Field>
        <Field label="Mevcut İhracat Ülkeleri (opsiyonel)" name="currentExportCountries">
          <input id="mfr-currentExportCountries" name="currentExportCountries" type="text" className="form-input" />
        </Field>
      </div>

      <Field label="Hedef Pazar" name="targetMarket" error={fieldErrors.targetMarket}>
        <input id="mfr-targetMarket" name="targetMarket" type="text" required className="form-input" placeholder="Örn: Almanya, Orta Doğu" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Numune Kabiliyeti" name="sampleCapability">
          <select id="mfr-sampleCapability" name="sampleCapability" className="form-input" defaultValue="">
            <option value="" disabled>Seçin</option>
            <option value="var">Var</option>
            <option value="kismi">Kısmi / şartlı</option>
            <option value="yok">Yok</option>
          </select>
        </Field>
        <Field label="İngilizce Katalog / Teknik Doküman" name="englishCatalog">
          <select id="mfr-englishCatalog" name="englishCatalog" className="form-input" defaultValue="">
            <option value="" disabled>Seçin</option>
            <option value="var">Var</option>
            <option value="hazirlaniyor">Hazırlanıyor</option>
            <option value="yok">Yok</option>
          </select>
        </Field>
      </div>

      <Field label="Ek Not (opsiyonel)" name="note">
        <textarea id="mfr-note" name="note" rows={3} className="form-input" />
      </Field>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary bg-gold hover:bg-[#8a6b2d] disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Ürününüzü Değerlendirelim"}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Bu form ihracat uygunluk değerlendirmesinin ilk adımıdır; satış veya
        ihracat garantisi oluşturmaz. Teminor, yazılı sözleşme olmadan hiçbir
        üreticinin yetkili temsilcisi olduğunu iddia etmez.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`mfr-${name}`} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

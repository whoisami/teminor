"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { trackBuyerFormSubmit } from "@/lib/analytics/events";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

// Anayasa v2.0 §10 (Yabancı Alıcı ve Fırsat Doğrulama Standardı)
// alanlarına dayanır — bu form, Türkiye'den tedarik/stratejik satınalma
// (ikincil hizmet) talebinin ilk girdisidir.
export default function BuyerRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "buyer" as const,
      company: String(data.get("company") || "").trim(),
      country: String(data.get("country") || "").trim(),
      companyWebsite: String(data.get("companyWebsite") || "").trim(),
      contactPerson: String(data.get("contactPerson") || "").trim(),
      email: String(data.get("email") || "").trim(),
      product: String(data.get("product") || "").trim(),
      technicalSpec: String(data.get("technicalSpec") || "").trim(),
      quantity: String(data.get("quantity") || "").trim(),
      targetPrice: String(data.get("targetPrice") || "").trim(),
      deliveryCountry: String(data.get("deliveryCountry") || "").trim(),
      certifications: String(data.get("certifications") || "").trim(),
      targetDate: String(data.get("targetDate") || "").trim(),
      sampleNeeded: String(data.get("sampleNeeded") || "").trim(),
      currentSourcingIssue: String(data.get("currentSourcingIssue") || "").trim(),
      note: String(data.get("note") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    const errors: Record<string, string> = {};
    if (!payload.company) errors.company = "Firma adı zorunludur.";
    if (!payload.country) errors.country = "Ülke zorunludur.";
    if (!payload.contactPerson) errors.contactPerson = "Yetkili kişi zorunludur.";
    if (!payload.email || !EMAIL_RE.test(payload.email))
      errors.email = "Geçerli bir kurumsal e-posta adresi girin.";
    if (!payload.product) errors.product = "Aranan ürün zorunludur.";
    if (!payload.quantity) errors.quantity = "Miktar zorunludur.";

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

      trackBuyerFormSubmit();
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Talebiniz gönderilemedi, lütfen tekrar deneyin."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-white p-8 text-center">
        <p className="font-serif text-xl text-navy">Talebiniz Alındı</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Teşekkür ederiz. Ekibimiz talebinizi değerlendirip sizinle iletişime
          geçecektir. Standart yanıt süremiz 1-2 iş günüdür.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it in. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="buyer-website">Web Sitesi (doldurmayın)</label>
        <input
          type="text"
          id="buyer-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Firma Adı" name="company" error={fieldErrors.company}>
          <input id="buyer-company" name="company" type="text" required className="form-input" autoComplete="organization" />
        </Field>
        <Field label="Ülke" name="country" error={fieldErrors.country}>
          <input id="buyer-country" name="country" type="text" required className="form-input" autoComplete="country-name" />
        </Field>
        <Field label="Web Sitesi (opsiyonel)" name="companyWebsite">
          <input id="buyer-companyWebsite" name="companyWebsite" type="text" className="form-input" placeholder="www.example.com" />
        </Field>
        <Field label="Yetkili Kişi" name="contactPerson" error={fieldErrors.contactPerson}>
          <input id="buyer-contactPerson" name="contactPerson" type="text" required className="form-input" autoComplete="name" />
        </Field>
        <Field label="Kurumsal E-posta" name="email" error={fieldErrors.email}>
          <input id="buyer-email" name="email" type="email" required className="form-input" autoComplete="email" />
        </Field>
        <Field label="Teslimat Ülkesi" name="deliveryCountry">
          <input id="buyer-deliveryCountry" name="deliveryCountry" type="text" className="form-input" />
        </Field>
      </div>

      <Field label="Aranan Ürün" name="product" error={fieldErrors.product}>
        <input id="buyer-product" name="product" type="text" required className="form-input" />
      </Field>

      <Field label="Teknik Şartlar (opsiyonel)" name="technicalSpec">
        <textarea id="buyer-technicalSpec" name="technicalSpec" rows={3} className="form-input" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Miktar" name="quantity" error={fieldErrors.quantity}>
          <input id="buyer-quantity" name="quantity" type="text" required className="form-input" placeholder="Örn: 20 ton/ay" />
        </Field>
        <Field label="Hedef Fiyat (opsiyonel)" name="targetPrice">
          <input id="buyer-targetPrice" name="targetPrice" type="text" className="form-input" />
        </Field>
        <Field label="Gerekli Sertifikalar (opsiyonel)" name="certifications">
          <input id="buyer-certifications" name="certifications" type="text" className="form-input" />
        </Field>
        <Field label="Hedef Tarih (opsiyonel)" name="targetDate">
          <input id="buyer-targetDate" name="targetDate" type="text" className="form-input" />
        </Field>
        <Field label="Numune İhtiyacı" name="sampleNeeded">
          <select id="buyer-sampleNeeded" name="sampleNeeded" className="form-input" defaultValue="">
            <option value="" disabled>Seçin</option>
            <option value="evet">Evet</option>
            <option value="hayir">Hayır</option>
          </select>
        </Field>
      </div>

      <Field label="Mevcut Tedarik Probleminiz (opsiyonel)" name="currentSourcingIssue">
        <textarea id="buyer-currentSourcingIssue" name="currentSourcingIssue" rows={2} className="form-input" />
      </Field>

      <Field label="Ek Açıklama (opsiyonel)" name="note">
        <textarea id="buyer-note" name="note" rows={3} className="form-input" />
      </Field>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Talebi Gönder"}
      </button>
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
      <label htmlFor={`buyer-${name}`} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

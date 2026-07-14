"use client";

import { useState, type FormEvent } from "react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import { trackContactFormSubmit } from "@/lib/analytics/events";

const SECTORS = [
  "Catering",
  "Temizlik/Tesis Yönetimi",
  "Otel-Restoran",
  "KOBİ Üretim",
  "Filo/Saha Hizmet",
  "Diğer",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      sector: String(data.get("sector") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    const errors: Record<string, string> = {};
    if (!payload.name) errors.name = "Ad Soyad zorunludur.";
    if (!payload.company) errors.company = "Şirket adı zorunludur.";
    if (!payload.email || !EMAIL_RE.test(payload.email))
      errors.email = "Geçerli bir e-posta adresi girin.";
    if (!payload.phone) errors.phone = "Telefon numarası zorunludur.";
    if (!payload.sector) errors.sector = "Lütfen bir sektör seçin.";
    if (!payload.message) errors.message = "Kısa bir açıklama girin.";

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

      trackContactFormSubmit(payload.sector);
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
        <p className="font-serif text-xl text-navy">
          Talebiniz alındı, 24 saat içinde dönüş yapılacaktır.
        </p>
        <TrackedAnchor
          kind="whatsapp"
          location="contact_form_success"
          href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6 inline-flex"
        >
          WhatsApp&apos;tan Yaz
        </TrackedAnchor>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it in. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Web Sitesi</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" error={fieldErrors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            autoComplete="name"
          />
        </Field>
        <Field label="Şirket Adı" name="company" error={fieldErrors.company}>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="form-input"
            autoComplete="organization"
          />
        </Field>
        <Field label="E-posta" name="email" error={fieldErrors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            autoComplete="email"
          />
        </Field>
        <Field label="Telefon" name="phone" error={fieldErrors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="form-input"
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Sektör" name="sector" error={fieldErrors.sector}>
        <select id="sector" name="sector" required className="form-input" defaultValue="">
          <option value="" disabled>
            Sektör seçin
          </option>
          {SECTORS.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Kısa İhtiyaç Açıklaması"
        name="message"
        error={fieldErrors.message}
      >
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input"
        />
      </Field>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto"
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
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

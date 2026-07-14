"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { trackRfqFormSubmit } from "@/lib/analytics/events";

const CURRENCIES = ["TRY", "USD", "EUR"];
const PAYMENT_PREFERENCES = ["Peşin", "30 Gün Vade", "60 Gün Vade", "Diğer"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

type Status = "idle" | "submitting" | "success" | "error";

export default function RFQForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "rfq" as const,
      company: String(data.get("company") || "").trim(),
      contactPerson: String(data.get("contactPerson") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      requestDate: String(data.get("requestDate") || "").trim(),
      requiredDeadline: String(data.get("requiredDeadline") || "").trim(),
      deliveryLocation: String(data.get("deliveryLocation") || "").trim(),
      currency: String(data.get("currency") || "").trim(),
      productService: String(data.get("productService") || "").trim(),
      technicalSpec: String(data.get("technicalSpec") || "").trim(),
      quantity: String(data.get("quantity") || "").trim(),
      targetBudget: String(data.get("targetBudget") || "").trim(),
      paymentPreference: String(data.get("paymentPreference") || "").trim(),
      note: String(data.get("note") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
    };

    const errors: Record<string, string> = {};
    if (!payload.company) errors.company = "Firma / Unvan zorunludur.";
    if (!payload.contactPerson)
      errors.contactPerson = "Yetkili kişi zorunludur.";
    if (!payload.phone) errors.phone = "Telefon numarası zorunludur.";
    if (!payload.email || !EMAIL_RE.test(payload.email))
      errors.email = "Geçerli bir e-posta adresi girin.";
    if (!payload.requiredDeadline)
      errors.requiredDeadline = "İstenen termin zorunludur.";
    if (!payload.deliveryLocation)
      errors.deliveryLocation = "Teslim yeri zorunludur.";
    if (!payload.currency) errors.currency = "Teklif para birimi zorunludur.";
    if (!payload.productService)
      errors.productService = "Ürün / hizmet zorunludur.";
    if (!payload.technicalSpec)
      errors.technicalSpec = "Teknik özellik zorunludur.";
    if (!payload.quantity) errors.quantity = "Miktar zorunludur.";
    if (!payload.paymentPreference)
      errors.paymentPreference = "Ödeme tercihi zorunludur.";

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

      trackRfqFormSubmit();
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
          Teşekkür ederiz. Bir sonraki aşamada yetkili ekibimiz talebinizi
          değerlendirip sizinle iletişime geçecektir. Standart yanıt süremiz
          1-2 iş günüdür.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field — hidden from real users, bots tend to fill it in. */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="rfq-website">Web Sitesi</label>
          <input
            type="text"
            id="rfq-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Firma / Unvan" name="company" error={fieldErrors.company}>
            <input
              id="rfq-company"
              name="company"
              type="text"
              required
              className="form-input"
              autoComplete="organization"
            />
          </Field>
          <Field
            label="Yetkili Kişi"
            name="contactPerson"
            error={fieldErrors.contactPerson}
          >
            <input
              id="rfq-contactPerson"
              name="contactPerson"
              type="text"
              required
              className="form-input"
              autoComplete="name"
            />
          </Field>
          <Field label="Telefon" name="phone" error={fieldErrors.phone}>
            <input
              id="rfq-phone"
              name="phone"
              type="tel"
              required
              className="form-input"
              autoComplete="tel"
            />
          </Field>
          <Field label="E-posta" name="email" error={fieldErrors.email}>
            <input
              id="rfq-email"
              name="email"
              type="email"
              required
              className="form-input"
              autoComplete="email"
            />
          </Field>
          <Field label="Talep Tarihi" name="requestDate">
            <input
              id="rfq-requestDate"
              name="requestDate"
              type="date"
              defaultValue={todayISO()}
              className="form-input"
            />
          </Field>
          <Field
            label="İstenen Termin"
            name="requiredDeadline"
            error={fieldErrors.requiredDeadline}
          >
            <input
              id="rfq-requiredDeadline"
              name="requiredDeadline"
              type="text"
              required
              placeholder="Örn: 15 Ağustos 2026 veya 2 hafta içinde"
              className="form-input"
            />
          </Field>
          <Field
            label="Teslim Yeri"
            name="deliveryLocation"
            error={fieldErrors.deliveryLocation}
          >
            <input
              id="rfq-deliveryLocation"
              name="deliveryLocation"
              type="text"
              required
              className="form-input"
            />
          </Field>
          <Field
            label="Teklif Para Birimi"
            name="currency"
            error={fieldErrors.currency}
          >
            <select
              id="rfq-currency"
              name="currency"
              required
              className="form-input"
              defaultValue=""
            >
              <option value="" disabled>
                Para birimi seçin
              </option>
              {CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field
          label="Ürün / Hizmet"
          name="productService"
          error={fieldErrors.productService}
        >
          <input
            id="rfq-productService"
            name="productService"
            type="text"
            required
            className="form-input"
          />
        </Field>

        <Field
          label="Teknik Özellik"
          name="technicalSpec"
          error={fieldErrors.technicalSpec}
        >
          <textarea
            id="rfq-technicalSpec"
            name="technicalSpec"
            required
            rows={4}
            className="form-input"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Miktar" name="quantity" error={fieldErrors.quantity}>
            <input
              id="rfq-quantity"
              name="quantity"
              type="text"
              required
              placeholder="Örn: 500 adet, 10 ton"
              className="form-input"
            />
          </Field>
          <Field label="Hedef Bütçe (opsiyonel)" name="targetBudget">
            <input
              id="rfq-targetBudget"
              name="targetBudget"
              type="text"
              className="form-input"
            />
          </Field>
          <Field
            label="Ödeme Tercihi"
            name="paymentPreference"
            error={fieldErrors.paymentPreference}
          >
            <select
              id="rfq-paymentPreference"
              name="paymentPreference"
              required
              className="form-input"
              defaultValue=""
            >
              <option value="" disabled>
                Ödeme tercihi seçin
              </option>
              {PAYMENT_PREFERENCES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Ek Not / Kısıt (opsiyonel)" name="note">
          <textarea id="rfq-note" name="note" rows={3} className="form-input" />
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

      <p className="mt-6 text-xs leading-relaxed text-muted">
        Bu form fiyat araştırması ve tedarik çalışmasının başlatılması
        içindir; sipariş veya satın alma taahhüdü oluşturmaz. Teminor,
        müşteri adına yalnızca yürürlükteki hizmet sözleşmesi ve yetki
        matrisi kapsamında işlem yapar.
      </p>
    </div>
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
      <label htmlFor={`rfq-${name}`} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

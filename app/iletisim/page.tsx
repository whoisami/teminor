import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  SITE_URL,
  whatsappLink,
} from "@/lib/site";

const description =
  "Teminor ile iletişime geçin. Formu doldurun veya doğrudan WhatsApp'tan yazın; 24 saat içinde size dönüş yapalım.";

export const metadata: Metadata = {
  title: "İletişim",
  description,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Teminor",
    description,
    url: `${SITE_URL}/iletisim`,
    type: "website",
  },
};

export default function IletisimPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Teminor İletişim",
    url: `${SITE_URL}/iletisim`,
    about: {
      "@type": "Organization",
      name: "Teminor",
      email: CONTACT_EMAIL,
      telephone: "+905015350086",
    },
  };

  return (
    <section className="py-24">
      <PageViewTracker type="contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-content grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">İletişim</p>
          <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
            Satın alma sürecinizi konuşalım.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Formu doldurun, 24 saat içinde size dönüş yapalım. Daha hızlı bir
            yanıt için formu doldurmak yerine doğrudan WhatsApp&apos;tan da
            yazabilirsiniz.
          </p>

          <TrackedAnchor
            kind="whatsapp"
            location="iletisim_page"
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6 inline-flex"
          >
            WhatsApp&apos;tan Yaz
          </TrackedAnchor>

          <div className="mt-12 space-y-2 text-sm text-muted">
            <p>
              E-posta:{" "}
              <TrackedAnchor
                kind="email"
                location="iletisim_page"
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-navy hover:text-gold"
              >
                {CONTACT_EMAIL}
              </TrackedAnchor>
            </p>
            <p>
              Telefon:{" "}
              <TrackedAnchor
                kind="phone"
                location="iletisim_page"
                href="tel:+905015350086"
                className="text-navy hover:text-gold"
              >
                {CONTACT_PHONE_DISPLAY}
              </TrackedAnchor>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-navy/10 bg-white p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

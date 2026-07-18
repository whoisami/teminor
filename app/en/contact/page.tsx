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
  "Get in touch with Teminor. Fill out the form and we'll get back to you within 24 hours.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: `${SITE_URL}/en/contact`,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      "en-US": `${SITE_URL}/en/contact`,
    },
  },
  openGraph: {
    title: "Contact | Teminor",
    description,
    url: `${SITE_URL}/en/contact`,
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPageEN() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Teminor Contact",
    url: `${SITE_URL}/en/contact`,
    about: {
      "@type": "Organization",
      name: "Teminor",
      email: CONTACT_EMAIL,
      telephone: "+905015350086",
    },
  };

  return (
    <>
      <PageViewTracker type="contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-24">
        <div className="container-content grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
              How Should We Start?
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Fill out the form and we&apos;ll get back to you within 24
              hours. For a faster response, you can also message us
              directly on WhatsApp.
            </p>

            <TrackedAnchor
              kind="whatsapp"
              location="iletisim_page_en"
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              Message on WhatsApp
            </TrackedAnchor>

            <div className="mt-12 space-y-2 text-sm text-muted">
              <p>
                Email:{" "}
                <TrackedAnchor
                  kind="email"
                  location="iletisim_page_en"
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-navy hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </TrackedAnchor>
              </p>
              <p>
                Phone:{" "}
                <TrackedAnchor
                  kind="phone"
                  location="iletisim_page_en"
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
              <ContactForm locale="en" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

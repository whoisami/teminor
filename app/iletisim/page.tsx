import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import RFQForm from "@/components/RFQForm";
import ManufacturerApplicationForm from "@/components/ManufacturerApplicationForm";
import BuyerRequestForm from "@/components/BuyerRequestForm";
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
  "Teminor ile iletişime geçin. Üretici başvurusu, yabancı alıcı talebi veya genel iletişim formunu doldurun; 24 saat içinde size dönüş yapalım.";

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
    <>
      <PageViewTracker type="contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">İletişim</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl text-navy md:text-5xl">
              Sizinle Nasıl Başlayalım?
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              Türk bir üreticiyseniz ürününüzü değerlendirelim; yabancı bir
              alıcıysanız Türkiye&apos;den tedarik talebinizi iletin. Daha
              hızlı bir yanıt için doğrudan WhatsApp&apos;tan da
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
            <div className="mt-8 space-y-2 text-sm text-muted">
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
        </div>
      </section>

      {/* Birincil: Üretici Başvurusu — ihracat uygunluk analizi girişi */}
      <section id="uretici-basvurusu" className="scroll-mt-24 bg-light-bg py-20">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow">Türk Üreticiler İçin</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              Ürününüzü Değerlendirelim
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              İhracat uygunluk analizi, yabancı alıcı geliştirme veya ticari
              temsilcilik için başvurunuzu aşağıdaki formla iletebilirsiniz.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-sm border border-navy/10 bg-white p-8">
              <ManufacturerApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Birincil: Yabancı Alıcı Talebi — Türkiye'den tedarik girişi */}
      <section id="alici-talebi" className="scroll-mt-24 bg-white py-20">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="eyebrow">Yabancı Alıcılar İçin</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              Türkiye&apos;den Üretici Arıyorum
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Türkiye&apos;den ürün veya üretici arıyorsanız, tedarik
              talebinizi aşağıdaki formla iletebilirsiniz.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-sm border border-navy/10 bg-light-bg p-8">
              <BuyerRequestForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* İkincil: genel iletişim + satınalma/tedarik RFQ */}
      <section className="bg-light-bg py-20">
        <div className="container-content grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Genel İletişim</p>
            <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
              Başka Bir Konuda Yazın
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Yukarıdaki formlar dışında bir konuda iletişime geçmek
              isterseniz, aşağıdaki formu kullanabilirsiniz.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-sm border border-navy/10 bg-white p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-content mt-20 max-w-3xl">
        <Reveal>
          <p className="eyebrow">Sourcing from Turkey</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            RFQ — Türkiye&apos;den Tedarik Talep Formu
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Somut bir tedarik ihtiyacınız varsa, aşağıdaki formu doldurarak
            doğrudan süreci başlatabilirsiniz.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-sm border border-navy/10 bg-white p-8">
            <RFQForm />
          </div>
        </Reveal>
      </div>
      <div className="pb-24" />
    </>
  );
}

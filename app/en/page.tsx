import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";
import TradeNetworkIllustration from "@/components/TradeNetworkIllustration";
import { CONTACT_EMAIL, CONTACT_PHONE_INTL, SITE_URL } from "@/lib/site";

// EN homepage — not a translation of the TR homepage. Different
// audience, different story (bkz. decisions/decision-log.md — TR/EN
// mesaj ayrışması kararı): TR speaks to Turkish manufacturers about
// export sales development; this page speaks to foreign buyers and
// distributors looking to source from Turkey. This page is a complete,
// self-contained pitch — it intentionally does not link to
// /en/sourcing-from-turkey (that page is its own nav destination, not a
// homepage cross-link), mirroring how the TR homepage never links out to
// /dis-satinalma-hizmeti either.
const description =
  "Teminor researches, verifies, and manages sourcing from Turkey on your behalf — manufacturer research, RFQs, quote comparison, sample and quality coordination.";

export const metadata: Metadata = {
  title: "Teminor | Sourcing Partner in Turkey",
  description,
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { "tr-TR": SITE_URL, "en-US": `${SITE_URL}/en` },
  },
  openGraph: {
    title: "Teminor — Sourcing Partner in Turkey",
    description,
    url: `${SITE_URL}/en`,
    type: "website",
    locale: "en_US",
  },
};

const gains = [
  "A shortlist of verified manufacturers, not an unverified directory listing",
  "Quotes you can actually compare, normalized across price and commercial terms",
  "Sample and quality coordination before you commit to volume",
  "A single point of contact tracking your order through to delivery",
];

export default function HomePageEN() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Teminor",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/teminor_lockup.png`,
    email: CONTACT_EMAIL,
    telephone: `+${CONTACT_PHONE_INTL}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-ink to-navy py-28 text-white md:py-36">
        <div className="container-content relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Sourcing Partner in Turkey</p>
            <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Verified Turkish Manufacturers &amp; Suppliers,{" "}
              <em className="text-gold">Sourced and Managed For You.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Teminor researches, verifies, and manages sourcing from
              Turkey on your behalf — from first RFQ to delivery tracking.
              You approve every step; we don&apos;t decide on your behalf.
            </p>
            <div className="mt-10">
              <TrackedCta
                href="/en/contact"
                label="en_home_hero_find_supplier"
                location="home_hero_en"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                Find a Turkish Supplier
              </TrackedCta>
            </div>
            <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.15em] text-white/45">
              No price or delivery guarantee · You approve every step ·
              No hidden commission
            </p>
          </Reveal>
          <Reveal delay={0.15} className="hidden justify-self-center lg:block">
            <TradeNetworkIllustration className="h-64 w-full max-w-sm" />
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              A Directory Listing Isn&apos;t a Verified Supplier
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Turkey&apos;s manufacturing base is large and diverse —
              finding a company is easy, but verifying whether it can
              actually deliver at the quality, capacity, and price you
              need takes time most buying teams don&apos;t have.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">The Solution</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              We Find, Verify, and Manage the Process for You
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Teminor identifies the right Turkish manufacturer or
              supplier for your product, collects and compares quotes,
              and coordinates samples, quality, and delivery — from
              first RFQ through to your order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What You Gain */}
      <section className="bg-light-bg py-24">
        <div className="container-content max-w-2xl">
          <Reveal>
            <p className="eyebrow">What You Gain</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              What Working With Us Actually Gets You
            </h2>
            <ul className="mt-8 space-y-4">
              {gains.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm leading-relaxed text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container-content flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">
              Tell Us What You&apos;re Sourcing
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackedCta
                href="/en/contact"
                label="en_home_final_cta_find_supplier"
                location="home_final_cta_en"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                Find a Turkish Supplier
              </TrackedCta>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

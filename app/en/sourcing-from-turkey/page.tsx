import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";
import FAQSection from "@/components/FAQSection";
import TradeNetworkIllustration from "@/components/TradeNetworkIllustration";
import { SITE_URL } from "@/lib/site";

// EN-only, buyer-facing service page. This is not a translation of
// /hizmetler or /dis-satinalma-hizmeti — those are TR-only pages for
// Turkish manufacturers and for local businesses' purchasing departments,
// respectively. This page speaks to a foreign buyer/distributor looking
// for verified Turkish manufacturers and suppliers (bkz.
// decisions/decision-log.md — TR/EN mesaj ayrışması kararı; the previous
// /en/hizmetler and /en/neden-teminor pages were merged and replaced
// here, with 301s from their old URLs — see public/_redirects).
const description =
  "Teminor researches, verifies, and manages sourcing from Turkey on your behalf — manufacturer and supplier research, RFQs, quote comparison, sample and quality coordination, delivery tracking.";

export const metadata: Metadata = {
  title: "Sourcing from Turkey | Verified Manufacturers & Suppliers",
  description,
  alternates: {
    canonical: `${SITE_URL}/en/sourcing-from-turkey`,
  },
  openGraph: {
    title: "Sourcing from Turkey | Teminor",
    description,
    url: `${SITE_URL}/en/sourcing-from-turkey`,
    type: "website",
    locale: "en_US",
  },
};

const processSteps = [
  "Clarify your product, technical specification, target quantity, and delivery point",
  "Research and pre-qualify Turkish manufacturers — production capability, certifications, capacity, MOQ",
  "Prepare and send a structured RFQ to multiple verified candidates",
  "Normalize and compare quotes — price, payment terms, lead time, freight",
  "Coordinate samples and quality verification before you commit to a full order",
  "Coordinate the order only with your written approval, and track lead time and delivery",
];

const gains = [
  "A shortlist of verified manufacturers, not an unverified directory listing",
  "Quotes you can actually compare, normalized across price and commercial terms",
  "Sample and quality coordination before you commit to volume",
  "A single point of contact tracking your order through to delivery",
  "Full visibility — you approve every step, we don't decide on your behalf",
];

const faqItems = [
  {
    question: "Do you guarantee price, quality, or delivery outcomes?",
    answer:
      "No. We run a structured, verifiable sourcing process; technical suitability, final acceptance, and the sourcing decision itself remain yours and the manufacturer's responsibility.",
  },
  {
    question: "How many suppliers do you compare per request?",
    answer:
      "This depends on the category and market availability; our standard process researches and quotes multiple candidates so you're not relying on a single source.",
  },
  {
    question: "Can I request a sample before committing to an order?",
    answer:
      "Yes — sample and quality coordination is a standard step before any full order is placed.",
  },
  {
    question: "Is this a one-off service or an ongoing relationship?",
    answer:
      "Both are possible. A single sourcing request can be handled as a one-off project, or we can manage a recurring sourcing pipeline for you.",
  },
];

export default function SourcingFromTurkeyPageEN() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Sourcing from Turkey",
    name: "Sourcing from Turkey",
    description,
    provider: { "@type": "Organization", name: "Teminor", url: SITE_URL },
    areaServed: "TR",
    audience: { "@type": "Audience", audienceType: "Foreign buyers and distributors" },
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
              Looking for a reliable manufacturer or supplier in Turkey?
              We research, verify, and manage the sourcing process for
              you — from first RFQ to delivery tracking.
            </p>
            <div className="mt-10">
              <TrackedCta
                href="/en/contact"
                label="en_sourcing_hero_find_supplier"
                location="sourcing_hero_en"
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

      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              A Directory Listing Isn&apos;t a Verified Supplier
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Turkey has a large, diverse manufacturing base — which makes
              finding a company easy, and verifying whether that company can
              actually deliver at the quality, capacity, and price you need
              much harder. Directories don&apos;t verify production
              capability, certifications, or responsiveness; that
              verification work is where most sourcing efforts actually
              succeed or fail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              We Verify, Compare, and Manage — You Decide
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <li className="flex gap-4 rounded-sm border border-navy/10 bg-light-bg p-6">
                  <span className="shrink-0 font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-navy/90">
                    {step}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

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

      <FAQSection
        items={faqItems}
        eyebrow="FAQ"
        heading="Frequently Asked Questions"
        className="bg-white"
      />

      <section className="bg-navy py-24 text-white">
        <div className="container-content flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">
              Tell Us What You&apos;re Sourcing
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/en/contact" className="btn-primary bg-gold hover:bg-[#8a6b2d]">
                Find a Turkish Supplier
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

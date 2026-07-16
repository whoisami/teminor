"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  eyebrow?: string;
  heading?: string;
  className?: string;
};

// Single source of truth for both the visible accordion and the FAQPage
// JSON-LD — the schema is generated from the exact same `items` prop that
// renders on screen, so structured data can never drift ahead of the
// visible copy (see docs/strategy/00-company-constitution.md §10, "Sahte
// veya doğrulanamayan structured data" yasağı).
export default function FAQSection({
  items,
  eyebrow = "SSS",
  heading = "Sık Sorulan Sorular",
  className = "bg-white",
}: FAQSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="sss" className={`${className} py-24`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
          {items.map((item, i) => (
            <FAQRow key={item.question} item={item} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item, delay }: { item: FAQItem; delay: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={delay}>
      <div className="py-2">
        <h3>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-6 py-4 text-left font-serif text-lg text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className={`shrink-0 text-xl text-gold transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        </h3>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              role="region"
              initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="pb-5 pr-10 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

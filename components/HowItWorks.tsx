"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { MIN_SUPPLIER_COMPARISON } from "@/lib/site";

const steps = [
  {
    title: "Talep Alımı",
    description: "İhtiyacınızı bildirin, teknik detaylar netleştirilir.",
  },
  {
    title: "Karşılaştırmalı Teklif Toplama",
    description: `En az ${MIN_SUPPLIER_COMPARISON}+ tedarikçiden fiyat ve termin teyidi alınır.`,
  },
  {
    title: "Müşteri Onayı",
    description: "Yazılı onayınız olmadan hiçbir sipariş verilmez.",
    stamped: true,
  },
  {
    title: "Sipariş ve Teslimat Takibi",
    description: "Süreç sonuna kadar takip edilir, aylık raporlanır.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Teminor ile Satın Alma Süreci Nasıl İşler?",
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Süreç</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Nasıl Çalışır?
          </h2>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="flex-1">
              <li className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex w-full items-center">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-lg font-semibold text-white">
                    {i + 1}
                    {step.stamped && (
                      <span
                        aria-hidden="true"
                        className="absolute -right-1 -top-1 flex h-5 w-5 rotate-12 items-center justify-center rounded-full border-2 border-stamp-gold bg-white text-[10px] font-bold text-stamp-gold"
                      >
                        ✓
                      </span>
                    )}
                  </span>
                  {i < steps.length - 1 && (
                    <motion.span
                      aria-hidden="true"
                      className="ml-2 hidden h-px flex-1 origin-left bg-navy/15 lg:block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: i * 0.08 + 0.3 }}
                    />
                  )}
                </div>
                <h3 className="mt-4 font-serif text-lg text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted lg:max-w-none lg:pr-6">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

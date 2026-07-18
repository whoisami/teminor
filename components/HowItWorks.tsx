"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "Ürününüz değerlendirilir",
    description:
      "İhracat uygunluğu; kapasite, MOQ, sertifika ve teknik dokümantasyon açısından değerlendirilir.",
  },
  {
    title: "Hedef pazar belirlenir",
    description:
      "Ürün grubunuza uygun ülke ve alıcı segmenti (ithalatçı, distribütör, toptancı, OEM) netleştirilir.",
  },
  {
    title: "Yabancı alıcı araştırılır",
    description:
      "Uygun alıcı adayları araştırılır; karar verici ve iletişim kanalı doğrulanır.",
  },
  {
    title: "İlk temas kurulur",
    description:
      "Doğrulanan karar vericilere yapılandırılmış bir ilk temas yapılır.",
  },
  {
    title: "Takip ve görüşme yönetilir",
    description:
      "Yanıtlar takip edilir; toplantı ve RFQ süreci sizinle birlikte koordine edilir.",
  },
  {
    title: "Numune ve teklif süreci yürütülür",
    description:
      "Numune, teknik şartlar ve teklif süreci sizinle birlikte yönetilir; nihai karar sizindir.",
  },
  {
    title: "Ticari sinyal raporlanır",
    description:
      "Yapılan çalışma, temas ve doğrulanan sonuçlar raporlanır — satış veya alıcı garantisi verilmez.",
    stamped: true,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Teminor ile İhracat Satış Geliştirme Süreci Nasıl İşler?",
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
};

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Süreç</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Teminor Nasıl Çalışır?
          </h2>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-6 lg:gap-y-14">
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
                  {i < steps.length - 1 && (i + 1) % 4 !== 0 && (
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

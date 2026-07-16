"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PackageTag } from "@/components/hizmetler/PackageComparison";

type Answers = {
  employees: "20-49" | "50-99" | "100-250" | null;
  rfqVolume: "1-4" | "5-10" | "10+" | null;
  categories: "1" | "2-3" | "3+" | null;
  teamCapacity: "yok" | "yetersiz" | "yeterli" | null;
  complexity: "standart" | "orta" | "yuksek" | null;
};

const INITIAL_ANSWERS: Answers = {
  employees: null,
  rfqVolume: null,
  categories: null,
  teamCapacity: null,
  complexity: null,
};

const RESULT_LABEL: Record<PackageTag, string> = {
  pilot: "Satın Alma Pilot Çalışması",
  baslangic: "Temel Satın Alma Desteği (Başlangıç)",
  operasyon: "Esnek Satın Alma Kapasitesi (Operasyon)",
  departman: "Dış Kaynak Satın Alma Departmanı (Departman)",
};

const DISCLAIMER =
  "Bu öneri; çalışan sayınız, RFQ hacminiz, kategori sayınız, mevcut ekip kapasiteniz ve taleplerinizin teknik karmaşıklığı birlikte değerlendirilerek oluşturulan yaklaşık bir yönlendirmedir. Kesin kapsam görüşme sonrası netleşir.";

// Yalnızca doğrudan v1.1 §2.5'te tarif edilen 3 örnek örüntü (Başlangıç /
// Operasyon / Departman) birebir eşleşiyorsa doğrudan o sonuç döner.
// Diğer tüm kombinasyonlar için, aynı 3 örüntüyü kalibre eden 0-8
// aralığında ağırlıklı bir puanlama devreye girer — bu puanlama v1.1'in
// kendisinde tanımlanmamıştır, beş soruyu tek bir sonuca indirgemek için
// yapılan şeffaf bir uygulama tercihidir (bkz. teslim raporu).
function scoreAnswers(a: Answers): number {
  const rfqScore = { "1-4": 0, "5-10": 1, "10+": 2 }[a.rfqVolume ?? "1-4"];
  const categoryScore = { "1": 0, "2-3": 1, "3+": 2 }[a.categories ?? "1"];
  const complexityScore = { standart: 0, orta: 1, yuksek: 2 }[
    a.complexity ?? "standart"
  ];
  const teamScore = { yok: 0, yetersiz: 1, yeterli: 2 }[
    a.teamCapacity ?? "yok"
  ];
  return rfqScore + categoryScore + complexityScore + teamScore;
}

function recommend(a: Answers): PackageTag {
  // v1.1 §2.5 örüntü 3: yüksek RFQ hacmi + 3+ kategori + yüksek teknik karmaşıklık
  if (a.rfqVolume === "10+" && a.categories === "3+" && a.complexity === "yuksek") {
    return "departman";
  }
  // v1.1 §2.5 örüntü 2: orta-yüksek RFQ hacmi + 2-3 kategori + dönemsel yoğunluk
  if (a.rfqVolume === "5-10" && a.categories === "2-3" && a.teamCapacity === "yetersiz") {
    return "operasyon";
  }
  // v1.1 §2.5 örüntü 1: düşük RFQ hacmi + tek kategori + satın alma desteği yok
  if (a.rfqVolume === "1-4" && a.categories === "1" && a.teamCapacity === "yok") {
    return "baslangic";
  }
  const score = scoreAnswers(a);
  if (score <= 3) return "baslangic";
  if (score <= 7) return "operasyon";
  return "departman";
}

const QUESTIONS: Array<{
  key: keyof Answers;
  legend: string;
  options: Array<{ value: string; label: string }>;
}> = [
  {
    key: "employees",
    legend: "Şirketinizde kaç çalışan var?",
    options: [
      { value: "20-49", label: "20–49" },
      { value: "50-99", label: "50–99" },
      { value: "100-250", label: "100–250" },
    ],
  },
  {
    key: "rfqVolume",
    legend: "Ayda yaklaşık kaç teklif talebi (RFQ) açıyorsunuz?",
    options: [
      { value: "1-4", label: "1–4" },
      { value: "5-10", label: "5–10" },
      { value: "10+", label: "10+" },
    ],
  },
  {
    key: "categories",
    legend: "Aynı anda kaç farklı satın alma kategorisinde destek istiyorsunuz?",
    options: [
      { value: "1", label: "1 kategori" },
      { value: "2-3", label: "2–3 kategori" },
      { value: "3+", label: "3+ kategori" },
    ],
  },
  {
    key: "teamCapacity",
    legend: "Mevcut ekibinizin satın alma kapasitesi nasıl?",
    options: [
      { value: "yok", label: "Yok" },
      { value: "yetersiz", label: "Var, yoğun dönemlerde yetersiz kalıyor" },
      { value: "yeterli", label: "Var, yeterli ama esnek ek kapasiteye ihtiyaç var" },
    ],
  },
  {
    key: "complexity",
    legend: "Taleplerinizin teknik karmaşıklığı nasıl?",
    options: [
      { value: "standart", label: "Standart, az teknik detay" },
      { value: "orta", label: "Orta düzey teknik detay" },
      { value: "yuksek", label: "Yüksek teknik detay veya sertifika gereksinimi" },
    ],
  },
];

type PackageFinderProps = {
  onResult?: (tag: PackageTag | null) => void;
};

export default function PackageFinder({ onResult }: PackageFinderProps) {
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
  const [result, setResult] = useState<PackageTag | null>(null);
  const reduceMotion = useReducedMotion();
  const formId = useId();

  const allAnswered = Object.values(answers).every((v) => v !== null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!allAnswered) return;
    const tag = recommend(answers);
    setResult(tag);
    onResult?.(tag);
  }

  function handleReset() {
    setAnswers(INITIAL_ANSWERS);
    setResult(null);
    onResult?.(null);
  }

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-navy/10 bg-light-bg p-8 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
          {answeredCount}/{QUESTIONS.length} soru yanıtlandı
        </p>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300 ease-out"
            style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {QUESTIONS.map((q, qi) => (
          <fieldset key={q.key}>
            <legend className="flex items-baseline gap-2 font-serif text-base text-navy">
              <span className="font-mono text-xs text-gold">
                {String(qi + 1).padStart(2, "0")}
              </span>
              {q.legend}
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const inputId = `${formId}-${q.key}-${opt.value}`;
                const checked = answers[q.key] === opt.value;
                return (
                  <div key={opt.value}>
                    <input
                      type="radio"
                      id={inputId}
                      name={q.key}
                      value={opt.value}
                      checked={checked}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [q.key]: opt.value }))
                      }
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={inputId}
                      className="inline-flex cursor-pointer items-center rounded-sm border border-navy/15 bg-white px-4 py-2 text-sm text-navy transition-all duration-150 hover:border-gold/50 peer-checked:border-gold peer-checked:bg-gold/10 peer-checked:font-semibold peer-focus-visible:ring-2 peer-focus-visible:ring-gold"
                    >
                      {opt.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
        <button
          type="submit"
          disabled={!allAnswered}
          className="btn-primary bg-gold hover:bg-[#8a6b2d] disabled:cursor-not-allowed disabled:bg-navy/20 disabled:text-navy/40"
        >
          Önerimi Göster
        </button>
        {result && (
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
          >
            Baştan başlayın
          </button>
        )}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.22, ease: "easeOut" }}
            role="status"
            className="mt-6 rounded-sm border border-gold/40 bg-white p-7 shadow-sm"
          >
            <p className="eyebrow">Öneri</p>
            <p className="mt-2 font-serif text-lg text-navy">
              {RESULT_LABEL[result]} size uygun olabilir.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {DISCLAIMER}
            </p>
            {result !== "pilot" && (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Modeli önce düşük riskle denemek isterseniz, Satın Alma Pilot
                Çalışması ile başlamanızı da önerebiliriz.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

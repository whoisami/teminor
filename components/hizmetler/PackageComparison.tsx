"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";

export type PackageTag = "pilot" | "baslangic" | "operasyon" | "departman";

type ComparisonTab = {
  id: PackageTag;
  tabLabel: string;
  scope: ReactNode;
};

const TERM_DEFINITIONS: Record<string, string> = {
  RFQ: "Tedarikçilerden fiyat ve teklif talep etmek için hazırlanan standart talep formu.",
  "kaynak araştırma":
    "Kategori uygunluğuna göre alternatif tedarikçi adaylarının araştırılması.",
  "normalize karşılaştırma":
    "Fiyat, vade, termin, nakliye ve diğer ticari koşulların mümkün olduğu ölçüde ortak bir formatta karşılaştırılması.",
  takip: "Sipariş onayından teslimata kadar termin ve sevkiyat sürecinin izlenmesi.",
};

function Term({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const definition = TERM_DEFINITIONS[label];

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={tooltipId}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="border-b border-dotted border-gold font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {children}
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className={`absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-sm border border-navy/10 bg-white p-3 text-xs leading-relaxed text-muted shadow-lg transition-opacity duration-150 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {definition}
      </span>
    </span>
  );
}

const tabs: ComparisonTab[] = [
  {
    id: "pilot",
    tabLabel: "Pilot Çalışma",
    scope: (
      <>
        30 gün süresince 2 kategori ve toplam 3 <Term label="RFQ">RFQ</Term>{" "}
        kapsamında model gerçek talebiniz üzerinde test edilir. Her{" "}
        <Term label="RFQ">RFQ</Term>&apos;da en fazla 5 kalem işlenir ve en
        fazla 3 tedarikçi adayı için{" "}
        <Term label="kaynak araştırma">kaynak araştırma</Term> yapılır;
        teklifler <Term label="normalize karşılaştırma">normalize edilerek karşılaştırılır</Term>{" "}
        ve onay sonrası sipariş {" "}
        <Term label="takip">takip</Term> edilir.
      </>
    ),
  },
  {
    id: "baslangic",
    tabLabel: "Temel Destek (Başlangıç)",
    scope: (
      <>
        Belirlenen kategori(ler)de aylık <Term label="RFQ">RFQ</Term> takibi;
        her talepte <Term label="kaynak araştırma">kaynak araştırma</Term>,
        teklif toplama ve{" "}
        <Term label="normalize karşılaştırma">normalize karşılaştırma</Term>{" "}
        yapılır.
      </>
    ),
  },
  {
    id: "operasyon",
    tabLabel: "Esnek Kapasite (Operasyon)",
    scope: (
      <>
        Değişken <Term label="RFQ">RFQ</Term> hacmine uygun esnek destek;
        dönemsel yoğunlukta kategori bazlı{" "}
        <Term label="kaynak araştırma">kaynak araştırma</Term> ve{" "}
        <Term label="normalize karşılaştırma">karşılaştırma desteği</Term>{" "}
        sağlanır.
      </>
    ),
  },
  {
    id: "departman",
    tabLabel: "Dış Kaynak Departmanı (Departman)",
    scope: (
      <>
        Çoklu kategori <Term label="RFQ">RFQ</Term> yönetimi, tedarikçi
        hafızası, düzenli{" "}
        <Term label="normalize karşılaştırma">karşılaştırma</Term> ve sipariş{" "}
        <Term label="takip">takibi</Term> tek noktadan yürütülür.
      </>
    ),
  },
];

type PackageComparisonProps = {
  highlightedTag?: PackageTag | null;
};

export default function PackageComparison({
  highlightedTag,
}: PackageComparisonProps) {
  const [activeId, setActiveId] = useState<PackageTag>("pilot");
  const reduceMotion = useSafeReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = tabs.findIndex((t) => t.id === activeId);
  const active = tabs[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + dir + tabs.length) % tabs.length;
    setActiveId(tabs[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Hizmet paketleri karşılaştırması"
        className="flex flex-wrap gap-1.5 rounded-sm border border-navy/10 bg-light-bg p-1.5"
      >
        {tabs.map((tab, i) => {
          const isActive = tab.id === activeId;
          const isHighlighted = tab.id === highlightedTag;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={handleKeyDown}
              className={`relative rounded-sm px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                isActive
                  ? "bg-white text-navy shadow-sm"
                  : "text-muted hover:text-navy"
              }`}
            >
              {tab.tabLabel}
              {isHighlighted && (
                <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                  Size uygun olabilir
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.2, ease: "easeOut" }}
            className="rounded-sm border border-navy/10 bg-white p-7 text-sm leading-relaxed text-muted shadow-sm"
          >
            {active.scope}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import PackageComparison, {
  type PackageTag,
} from "@/components/hizmetler/PackageComparison";
import PackageFinder from "@/components/hizmetler/PackageFinder";

// Client-side bridge: lifts the Paket Bulucu's recommendation up so the
// karşılaştırma tabs can surface a "Size uygun olabilir" badge on the
// matching tab. Kept as its own file because app/hizmetler/page.tsx stays
// a server component (it exports `metadata`).
export default function PackageInteractive() {
  const [recommended, setRecommended] = useState<PackageTag | null>(null);

  return (
    <div className="grid gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
          01 — Karşılaştırma
        </p>
        <h3 className="mt-2 font-serif text-xl text-navy">
          Paketler Arasında Fark Nedir?
        </h3>
        <p className="mt-2 text-sm text-muted">
          Çalışan sayınız, RFQ hacminiz, kategori sayınız ve mevcut ekip
          kapasitenize göre bu paket size uygun olabilir.
        </p>
        <div className="mt-6">
          <PackageComparison highlightedTag={recommended} />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
          02 — Paket Bulucu
        </p>
        <h3 className="mt-2 font-serif text-xl text-navy">
          Size Uygun Modeli Bulun
        </h3>
        <p className="mt-2 text-sm text-muted">
          Beş kısa soruyu yanıtlayın, size uygun olabilecek paketi hemen
          görün.
        </p>
        <div className="mt-6">
          <PackageFinder onResult={setRecommended} />
        </div>
      </div>
    </div>
  );
}

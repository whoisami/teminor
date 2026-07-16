"use client";

import { useId, useState } from "react";

// Yalnızca kullanıcının girdiği rakamlara dayanan şeffaf bir çarpım
// hesabıdır — Teminor'un sağlayacağı bir tasarruf veya "%X kazanç" iddiası
// üretmez (bkz. CLAUDE.md'nin doğrulanamayan ticari iddia yasağı). Amaç,
// satın alma sürecinin işletme içinde bugün harcadığı zamanı ve maliyeti
// somut, hesaplanabilir hale getirmektir; kesin kazanım yalnızca görüşme
// sonrası netleşir.
const DEFAULT_RFQ_COUNT = 8;
const DEFAULT_HOURS_PER_RFQ = 3;
const DEFAULT_HOURLY_COST = 400;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RoiCalculator() {
  const [rfqCount, setRfqCount] = useState(DEFAULT_RFQ_COUNT);
  const [hoursPerRfq, setHoursPerRfq] = useState(DEFAULT_HOURS_PER_RFQ);
  const [hourlyCost, setHourlyCost] = useState(DEFAULT_HOURLY_COST);

  const idRfq = useId();
  const idHours = useId();
  const idCost = useId();

  const monthlyHours = rfqCount * hoursPerRfq;
  const monthlyCost = monthlyHours * hourlyCost;
  const annualHours = monthlyHours * 12;
  const annualCost = monthlyCost * 12;

  return (
    <div className="rounded-sm border border-navy/10 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
            Girdileriniz
          </p>
          <div className="mt-5 space-y-5">
            <div>
              <label
                htmlFor={idRfq}
                className="text-sm font-medium text-navy"
              >
                Ayda yaklaşık kaç RFQ (teklif talebi) açıyorsunuz?
              </label>
              <input
                id={idRfq}
                type="number"
                min={0}
                inputMode="numeric"
                value={rfqCount}
                onChange={(e) => setRfqCount(Math.max(0, Number(e.target.value) || 0))}
                className="form-input mt-2"
              />
            </div>
            <div>
              <label
                htmlFor={idHours}
                className="text-sm font-medium text-navy"
              >
                Bir RFQ&apos;yu araştırma, teklif toplama ve karşılaştırmayla
                kapatmak ortalama kaç saat sürüyor?
              </label>
              <input
                id={idHours}
                type="number"
                min={0}
                inputMode="numeric"
                value={hoursPerRfq}
                onChange={(e) =>
                  setHoursPerRfq(Math.max(0, Number(e.target.value) || 0))
                }
                className="form-input mt-2"
              />
            </div>
            <div>
              <label
                htmlFor={idCost}
                className="text-sm font-medium text-navy"
              >
                Bu işi yapan ekip üyesinin saatlik maliyeti yaklaşık ne kadar?
                (TL)
              </label>
              <input
                id={idCost}
                type="number"
                min={0}
                inputMode="numeric"
                value={hourlyCost}
                onChange={(e) =>
                  setHourlyCost(Math.max(0, Number(e.target.value) || 0))
                }
                className="form-input mt-2"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-navy/10 bg-light-bg p-8 md:border-l md:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
            Bugünkü tahmini yük
          </p>
          <dl className="mt-5 space-y-5">
            <div>
              <dt className="text-sm text-muted">Aylık zaman</dt>
              <dd className="mt-1 font-serif text-2xl text-navy">
                {monthlyHours.toLocaleString("tr-TR")} saat
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Aylık tahmini maliyet</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">
                {formatCurrency(monthlyCost)}
              </dd>
            </div>
            <div className="border-t border-navy/10 pt-5">
              <dt className="text-sm text-muted">
                Yıllık zaman / tahmini maliyet
              </dt>
              <dd className="mt-1 font-serif text-xl text-navy">
                {annualHours.toLocaleString("tr-TR")} saat ·{" "}
                {formatCurrency(annualCost)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <p className="border-t border-navy/10 px-8 py-5 text-xs leading-relaxed text-muted">
        Bu hesaplama yalnızca girdiğiniz rakamların çarpımıdır; satın alma
        sürecinizin bugün işletme içinde ne kadar zaman ve maliyet
        gerektirdiğini görünür kılar. Teminor ile çalışmanın size özel
        getirisi, kategori ve kapsamınıza göre görüşme sonrası netleşir —
        burada bir tasarruf veya kazanç yüzdesi vaat edilmez.
      </p>
    </div>
  );
}

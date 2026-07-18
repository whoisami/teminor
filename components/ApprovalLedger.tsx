"use client";

import { useEffect, useState } from "react";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";

// The site's signature element: a small, self-cycling status ledger that
// dramatizes Teminor's actual operating promise — Buyer Validation Sprint
// research/verification before any commercial claim — instead of
// decorating the hero with a generic texture. Illustrative only (not a
// real request), same "Örnek Senaryo" transparency spirit used elsewhere
// on the site: nothing here claims to be live data or a guaranteed sale.
const PHASES = ["received", "comparing", "waiting", "approved"] as const;
type Phase = (typeof PHASES)[number];

const STEP_MS = 1500;
const HOLD_MS = 2400;

export default function ApprovalLedger() {
  const reduceMotion = useSafeReducedMotion();
  const [autoPhaseIndex, setAutoPhaseIndex] = useState(0);
  const phaseIndex = reduceMotion ? PHASES.length - 1 : autoPhaseIndex;

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function advance(current: number) {
      const isApproved = current === PHASES.length - 1;
      timeoutId = setTimeout(
        () => {
          if (cancelled) return;
          const next = isApproved ? 0 : current + 1;
          setAutoPhaseIndex(next);
          advance(next);
        },
        isApproved ? HOLD_MS : STEP_MS
      );
    }

    advance(0);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reduceMotion]);

  const phase: Phase = PHASES[phaseIndex];
  // "received" is always true once mounted — phase starts at "received".
  const received = true;
  const comparing = phaseIndex >= PHASES.indexOf("comparing");
  const waiting = phase === "waiting";
  const approved = phase === "approved";

  return (
    <div className="w-full max-w-sm rounded-sm border border-white/10 bg-ink/60 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-mono text-xs tracking-wide text-white/50">
          SPRINT #048
        </span>
        <span className="font-mono text-xs tracking-wide text-white/30">
          Örnek Senaryo
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        <LedgerRow label="Ürün değerlendirildi" done={received} />
        <LedgerRow
          label="Hedef alıcılar araştırılıyor"
          done={comparing && !waiting}
          active={comparing && !approved && !waiting}
        />
        <LedgerRow label="Görüşme bekleniyor" done={approved} active={waiting} />
      </ul>

      <div className="mt-5 border-t border-white/10 pt-4">
        {approved ? (
          <div className="flex items-center justify-between">
            <span className="animate-stamp inline-flex items-center gap-2 rounded-sm border-2 border-stamp-gold px-3 py-1 font-mono text-xs font-semibold tracking-wide text-stamp-gold">
              ✓ TEMAS KURULDU
            </span>
            <span className="font-mono text-xs text-white/50">
              Görüşme →
            </span>
          </div>
        ) : (
          <span className="font-mono text-xs text-white/30">
            Karar verici doğrulanıyor…
          </span>
        )}
      </div>
    </div>
  );
}

function LedgerRow({
  label,
  done,
  active = false,
}: {
  label: string;
  done: boolean;
  active?: boolean;
}) {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px] transition-colors duration-500 ${
          done
            ? "border-gold bg-gold text-ink"
            : active
              ? "animate-pulse border-stamp-gold text-transparent"
              : "border-white/25 text-transparent"
        }`}
      >
        ✓
      </span>
      <span
        className={`font-mono text-sm transition-colors duration-500 ${
          done || active ? "text-white" : "text-white/40"
        }`}
      >
        {label}
      </span>
    </li>
  );
}

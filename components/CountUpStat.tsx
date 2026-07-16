"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";

type CountUpStatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

// Animates only a real, already-configured number (e.g. MIN_SUPPLIER_
// COMPARISON) counting up once it scrolls into view. Never used for
// invented/unverified statistics — see CLAUDE.md's ban on fabricated
// commercial claims.
export default function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  className,
}: CountUpStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useSafeReducedMotion();
  const [autoDisplay, setAutoDisplay] = useState(0);
  const display = reduceMotion ? value : autoDisplay;

  useEffect(() => {
    if (reduceMotion) return;
    if (!inView) return;

    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setAutoDisplay(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <p ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </p>
  );
}

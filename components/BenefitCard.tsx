import type { ReactNode } from "react";
import Reveal from "./Reveal";

type BenefitCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
};

export default function BenefitCard({
  icon,
  title,
  description,
  delay = 0,
}: BenefitCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-sm border border-navy/10 bg-white p-8 transition-colors duration-300 hover:border-gold/60">
        <div className="mb-6">{icon}</div>
        <h3 className="font-serif text-xl text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </Reveal>
  );
}

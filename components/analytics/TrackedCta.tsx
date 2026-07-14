"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { trackCtaClick } from "@/lib/analytics/events";

type TrackedCtaProps = ComponentProps<typeof Link> & {
  label: string;
  location: string;
};

// Wraps next/link for internal CTAs, firing cta_click before navigating.
// Visuals/behavior are identical to a plain <Link> — only adds tracking.
// Composes with a caller-provided onClick (e.g. closing a mobile menu)
// instead of silently replacing it.
export default function TrackedCta({
  label,
  location,
  onClick,
  ...linkProps
}: TrackedCtaProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackCtaClick(label, location);
    onClick?.(event);
  }

  return <Link {...linkProps} onClick={handleClick} />;
}

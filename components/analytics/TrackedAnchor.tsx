"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import {
  trackEmailClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics/events";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  kind: "whatsapp" | "phone" | "email";
  location: string;
  children: ReactNode;
};

const TRACKERS = {
  whatsapp: trackWhatsAppClick,
  phone: trackPhoneClick,
  email: trackEmailClick,
} as const;

// Wraps a plain <a> (wa.me / tel: / mailto: links) with the matching
// tracked click event. Visuals/behavior are identical to a plain <a> —
// only adds tracking. Composes with a caller-provided onClick instead of
// replacing it.
export default function TrackedAnchor({
  kind,
  location,
  onClick,
  ...anchorProps
}: TrackedAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    TRACKERS[kind](location);
    onClick?.(event);
  }

  return <a {...anchorProps} onClick={handleClick} />;
}

"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};

// framer-motion's useReducedMotion() reads window.matchMedia synchronously
// during render, so on a real device with the OS preference enabled, the
// first client (hydration) render already differs from the SSR output —
// causing a React hydration mismatch. useSyncExternalStore's server snapshot
// keeps the hydration render identical to the server (false), then applies
// the actual preference on the next render, same as React's own
// recommended "isClient" recipe.
function useHasHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function useSafeReducedMotion(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const hasHydrated = useHasHydrated();

  return hasHydrated ? Boolean(prefersReducedMotion) : false;
}

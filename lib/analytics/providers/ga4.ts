import { GA_MEASUREMENT_ID, isGA4Enabled } from "../config";
import type { AnalyticsProvider } from "../types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function callGtag(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag(...args);
}

export const ga4Provider: AnalyticsProvider = {
  name: "ga4",
  isEnabled: () => isGA4Enabled,
  pageview: (path) => {
    if (!GA_MEASUREMENT_ID) return;
    callGtag("event", "page_view", { page_path: path });
  },
  event: (eventName, params) => {
    callGtag("event", eventName, params ?? {});
  },
};

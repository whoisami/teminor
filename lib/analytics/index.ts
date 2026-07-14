import { ga4Provider } from "./providers/ga4";
import type { AnalyticsEventParams, AnalyticsProvider } from "./types";

// Register every active provider here. To add Google Ads, Meta Pixel,
// LinkedIn Insight or Microsoft Clarity later: implement AnalyticsProvider
// in lib/analytics/providers/<name>.ts and add it to this array. Nothing
// else in the app (events, components, pages) needs to change.
const providers: AnalyticsProvider[] = [ga4Provider];

// Every call is wrapped so a broken/blocked/missing analytics provider
// (ad blocker, missing env var, script failed to load) can never break
// the site — tracking is best-effort, always.
function safeCall(fn: () => void) {
  try {
    fn();
  } catch {
    // Analytics must never throw into the app.
  }
}

export function trackPageview(path: string) {
  for (const provider of providers) {
    if (!provider.isEnabled()) continue;
    safeCall(() => provider.pageview(path));
  }
}

export function trackEvent(eventName: string, params?: AnalyticsEventParams) {
  for (const provider of providers) {
    if (!provider.isEnabled()) continue;
    safeCall(() => provider.event(eventName, params));
  }
}

export { GA_MEASUREMENT_ID, isGA4Enabled } from "./config";

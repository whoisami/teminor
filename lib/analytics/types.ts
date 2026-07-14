export type AnalyticsEventParams = Record<string, string | number | boolean>;

// Common shape every analytics provider (GA4, Google Ads, Meta Pixel,
// LinkedIn Insight, Microsoft Clarity, ...) implements. Adding a new
// provider means adding one file under lib/analytics/providers/ that
// satisfies this interface and registering it in lib/analytics/index.ts —
// nothing else in the app needs to change.
export interface AnalyticsProvider {
  name: string;
  isEnabled: () => boolean;
  pageview: (path: string) => void;
  event: (eventName: string, params?: AnalyticsEventParams) => void;
}

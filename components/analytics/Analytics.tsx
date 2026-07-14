import GoogleAnalyticsScripts from "./GoogleAnalyticsScripts";
import RouteChangeTracker from "./RouteChangeTracker";

// Single mount point for the whole analytics layer. Rendered once in the
// root layout. If no provider is configured (no NEXT_PUBLIC_GA_MEASUREMENT_ID
// at build time), this still mounts RouteChangeTracker harmlessly — its
// trackPageview() calls are no-ops when no provider is enabled.
export default function Analytics() {
  return (
    <>
      <GoogleAnalyticsScripts />
      <RouteChangeTracker />
    </>
  );
}

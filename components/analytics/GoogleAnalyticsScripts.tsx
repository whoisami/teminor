"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID, isGA4Enabled } from "@/lib/analytics";

// Renders nothing if NEXT_PUBLIC_GA_MEASUREMENT_ID isn't set at build
// time — no script tags, no console errors, no network requests. The
// site behaves identically with or without analytics configured.
export default function GoogleAnalyticsScripts() {
  if (!isGA4Enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}

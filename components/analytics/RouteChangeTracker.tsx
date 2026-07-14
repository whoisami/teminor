"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPageview } from "@/lib/analytics";

// Fires page_view on first load and on every client-side route change.
// gtag's own automatic page_view is disabled (send_page_view: false in
// GoogleAnalyticsScripts) so this is the single source of truth for
// page_view — no double-counting between the two.
export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);

  return null;
}

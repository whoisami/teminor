"use client";

import { useEffect } from "react";
import {
  trackBlogView,
  trackContactPageView,
  trackServiceView,
} from "@/lib/analytics/events";

// Drop this into a server-rendered page to fire one of the named
// page-level events on mount, without converting the whole page into a
// Client Component. Props are plain strings only (serializable across
// the server/client boundary) — the actual track*() call happens here,
// on the client.
type PageViewTrackerProps =
  | { type: "service"; serviceName: string }
  | { type: "blog"; slug: string; title: string }
  | { type: "contact" };

export default function PageViewTracker(props: PageViewTrackerProps) {
  useEffect(() => {
    if (props.type === "service") {
      trackServiceView(props.serviceName);
    } else if (props.type === "blog") {
      trackBlogView(props.slug, props.title);
    } else {
      trackContactPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

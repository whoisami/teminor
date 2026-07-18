import { trackEvent } from "./index";

// Central catalog of every event Teminor tracks. This is the single
// source of truth: add a new event name here first, then add a typed
// helper below. Nothing should call trackEvent() with a raw string
// outside this file — that keeps event names from drifting.
export const AnalyticsEvents = {
  PageView: "page_view",
  ServiceView: "service_view",
  BlogView: "blog_view",
  ContactPageView: "contact_page_view",
  ContactFormSubmit: "contact_form_submit",
  RfqFormSubmit: "rfq_form_submit",
  ManufacturerFormSubmit: "manufacturer_form_submit",
  BuyerFormSubmit: "buyer_form_submit",
  PhoneClick: "phone_click",
  EmailClick: "email_click",
  WhatsAppClick: "whatsapp_click",
  CtaClick: "cta_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];

export function trackServiceView(serviceName: string) {
  trackEvent(AnalyticsEvents.ServiceView, { service_name: serviceName });
}

export function trackBlogView(slug: string, title: string) {
  trackEvent(AnalyticsEvents.BlogView, { slug, title });
}

export function trackContactPageView() {
  trackEvent(AnalyticsEvents.ContactPageView);
}

export function trackContactFormSubmit(sector: string) {
  trackEvent(AnalyticsEvents.ContactFormSubmit, { sector });
}

export function trackRfqFormSubmit() {
  trackEvent(AnalyticsEvents.RfqFormSubmit);
}

export function trackManufacturerFormSubmit() {
  trackEvent(AnalyticsEvents.ManufacturerFormSubmit);
}

export function trackBuyerFormSubmit() {
  trackEvent(AnalyticsEvents.BuyerFormSubmit);
}

export function trackPhoneClick(location: string) {
  trackEvent(AnalyticsEvents.PhoneClick, { location });
}

export function trackEmailClick(location: string) {
  trackEvent(AnalyticsEvents.EmailClick, { location });
}

export function trackWhatsAppClick(location: string) {
  trackEvent(AnalyticsEvents.WhatsAppClick, { location });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent(AnalyticsEvents.CtaClick, { label, location });
}

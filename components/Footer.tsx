"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  isEnglishPath,
  whatsappLink,
} from "@/lib/site";

// "Üretimden Küresel Talebe" / "From Production to Global Demand" is
// Teminor's official brand line per Şirket Anayasası v2.0 §5 — kept as an
// archived small-print tagline in the footer rather than a hero headline
// (bkz. decisions/decision-log.md, ana sayfa sadeleştirmesi).
const COPY = {
  tr: {
    tagline: "Teminor, Türk üreticiler için ihracat satış geliştirme ve ticari temsilcilik hizmeti sunan bir B2B ticaret geliştirme şirketidir.",
    brandLine: "Üretimden Küresel Talebe.",
    quickLinks: "Hızlı Bağlantılar",
    services: "Hizmetler",
    blog: "Blog",
    contact: "İletişim",
    privacy: "KVKK / Gizlilik",
    contactHeading: "İletişim",
    whatsapp: "WhatsApp'tan Yazın",
    rights: "Tüm hakları saklıdır.",
    location: "İzmir, Türkiye",
  },
  en: {
    tagline: "Teminor is a B2B trade development company providing export sales development and trade representation services for Turkish manufacturers.",
    brandLine: "From Production to Global Demand.",
    quickLinks: "Quick Links",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    privacy: "Privacy Policy",
    contactHeading: "Contact",
    whatsapp: "Message on WhatsApp",
    rights: "All rights reserved.",
    location: "İzmir, Türkiye",
  },
} as const;

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = isEnglishPath(pathname);
  const t = isEnglish ? COPY.en : COPY.tr;
  const servicesHref = isEnglish ? "/en/sourcing-from-turkey" : "/hizmetler";
  const blogHref = isEnglish ? "/en/blog" : "/blog";
  const contactHref = isEnglish ? "/en/contact" : "/iletisim";

  return (
    <footer className="border-t border-white/10 bg-navy text-white/80">
      <div className="container-content grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-sm bg-white px-4 py-2.5">
            <Image
              src="/logo/teminor_lockup.png"
              alt="Teminor logo"
              width={480}
              height={320}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {t.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            {t.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={servicesHref} className="hover:text-gold">
                {t.services}
              </Link>
            </li>
            <li>
              <Link href={blogHref} className="hover:text-gold">
                {t.blog}
              </Link>
            </li>
            <li>
              <Link href={contactHref} className="hover:text-gold">
                {t.contact}
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className="hover:text-gold">
                {t.privacy}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            {t.contactHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <TrackedAnchor
                kind="whatsapp"
                location="footer"
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {t.whatsapp}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                kind="email"
                location="footer"
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-gold"
              >
                {CONTACT_EMAIL}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                kind="phone"
                location="footer"
                href="tel:+905015350086"
                className="hover:text-gold"
              >
                {CONTACT_PHONE_DISPLAY}
              </TrackedAnchor>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-content flex flex-col items-center justify-between gap-2 text-xs text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Teminor. {t.rights}</p>
          <p className="italic text-white/35">{t.brandLine}</p>
          <p>{t.location}</p>
        </div>
      </div>
    </footer>
  );
}

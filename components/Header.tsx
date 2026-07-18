"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import TrackedCta from "@/components/analytics/TrackedCta";
import {
  LANG_COOKIE,
  NAV_LINKS,
  NAV_LINKS_EN,
  isEnglishPath,
  toggleLocalePath,
} from "@/lib/site";

function LanguageSwitcher({
  pathname,
  className = "",
}: {
  pathname: string;
  className?: string;
}) {
  const router = useRouter();
  const isEnglish = isEnglishPath(pathname);

  function setLocale(locale: "tr" | "en") {
    if ((locale === "en") === isEnglish) return;
    document.cookie = `${LANG_COOKIE}=${locale}; path=/; max-age=31536000`;
    router.push(toggleLocalePath(pathname));
  }

  return (
    <div className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
      <button
        type="button"
        onClick={() => setLocale("tr")}
        aria-current={!isEnglish}
        className={`rounded-sm px-2 py-1 transition-colors ${
          !isEnglish ? "bg-navy text-white" : "text-navy/50 hover:text-navy"
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-current={isEnglish}
        className={`rounded-sm px-2 py-1 transition-colors ${
          isEnglish ? "bg-navy text-white" : "text-navy/50 hover:text-navy"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = isEnglishPath(pathname);
  const navLinks = isEnglish ? NAV_LINKS_EN : NAV_LINKS;
  const ctaLabel = isEnglish ? "Contact Us" : "İletişime Geç";
  const ctaHref = isEnglish ? "/en/contact" : "/iletisim";
  const homeHref = isEnglish ? "/en" : "/";

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href={homeHref} className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo/teminor_lockup.png"
            alt="Teminor logo"
            width={480}
            height={320}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-navy hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher pathname={pathname} />
          <TrackedCta
            href={ctaHref}
            label="iletisime_gec"
            location="header"
            className="btn-primary"
          >
            {ctaLabel}
          </TrackedCta>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-navy transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-navy transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-navy transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <nav className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-2 py-3 text-sm font-medium ${
                  pathname === link.href ? "text-gold" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher pathname={pathname} className="mt-2 px-2" />
            <TrackedCta
              href={ctaHref}
              label="iletisime_gec_mobile"
              location="header"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              {ctaLabel}
            </TrackedCta>
          </nav>
        </div>
      )}
    </header>
  );
}

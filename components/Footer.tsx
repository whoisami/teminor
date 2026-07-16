import Image from "next/image";
import Link from "next/link";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappLink,
} from "@/lib/site";

export default function Footer() {
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
            Teminor, KOBİ&apos;ler için dış kaynaklı satın alma departmanıdır.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Hızlı Bağlantılar
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/hizmetler" className="hover:text-gold">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-gold">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className="hover:text-gold">
                KVKK / Gizlilik
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            İletişim
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
                WhatsApp&apos;tan Yazın
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
          <p>&copy; {new Date().getFullYear()} Teminor. Tüm hakları saklıdır.</p>
          <p>İzmir, Türkiye</p>
        </div>
      </div>
    </footer>
  );
}

export const SITE_URL = "https://teminor.com";
export const SITE_NAME = "Teminor";
export const CONTACT_EMAIL = "info@teminor.com";
export const CONTACT_PHONE_DISPLAY = "+90 501 535 00 86";
export const CONTACT_PHONE_INTL = "905015350086";

export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT_PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Merhaba, Teminor hizmetleri hakkında bilgi almak istiyorum.";

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/neden-teminor", label: "Neden Teminor" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

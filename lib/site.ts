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

// Minimum number of supplier quotes gathered per request. Single source of
// truth — referenced from the home page stats strip and the
// /dis-satinalma-hizmeti comparison table so the figure only ever needs to
// change in one place.
export const MIN_SUPPLIER_COMPARISON = 3;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/dis-satinalma-hizmeti", label: "Dış Satınalma Hizmeti" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

// English nav — TR ve EN artık farklı hikayeler anlattığı için (TR: Türk
// üretici, EN: yabancı alıcı/distributor — bkz. decisions/decision-log.md
// karar kaydı) EN slug'ları TR'yi birebir yansıtmıyor. EN sitede ayrı bir
// "Dış Satınalma Hizmeti" sekmesi yok — o hizmet yalnızca TR kitlesi
// (yerli işletmelerin satınalma departmanları) içindir.
export const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/sourcing-from-turkey", label: "Sourcing from Turkey" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/contact", label: "Contact" },
] as const;

export const LANG_COOKIE = "teminor_lang";

export function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

// TR <-> EN path'leri artık birebir aynı slug'ları paylaşmıyor (EN'de
// "Dış Satınalma Hizmeti" sayfası yok; /hizmetler ve /dis-satinalma-hizmeti'nin
// alıcı-perspektifli tek bir EN karşılığı /en/sourcing-from-turkey'de
// birleşti). Dil değiştirici bu yüzden basit bir prefix ekleme/çıkarma
// değil, açık bir eşleme tablosu kullanıyor; eşlenmemiş bir sayfadaysa
// (örn. bir blog yazısı veya /gizlilik) karşı dilin ana sayfasına düşer.
const TR_TO_EN_PATH: Record<string, string> = {
  "/": "/en",
  "/hizmetler": "/en/sourcing-from-turkey",
  "/dis-satinalma-hizmeti": "/en/sourcing-from-turkey",
  "/iletisim": "/en/contact",
  "/blog": "/en/blog",
};

const EN_TO_TR_PATH: Record<string, string> = {
  "/en": "/",
  "/en/sourcing-from-turkey": "/hizmetler",
  "/en/contact": "/iletisim",
  "/en/blog": "/blog",
};

export function toggleLocalePath(pathname: string): string {
  if (isEnglishPath(pathname)) {
    return EN_TO_TR_PATH[pathname] ?? "/";
  }
  return TR_TO_EN_PATH[pathname] ?? "/en";
}

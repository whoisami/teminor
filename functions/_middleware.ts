/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Middleware: runs at the edge in front of every request,
// even for a fully static-exported site (this is a Cloudflare Pages
// feature, distinct from Next.js `middleware.ts` — the latter cannot run
// with `output: "export"` since there is no Node/Edge server for it to
// execute on; see decisions/decision-log.md → DEC-2026-0005).
//
// Behavior:
// - A manual `teminor_lang` cookie (set by the header language switcher)
//   always wins over IP-based geolocation.
// - Otherwise, Cloudflare's own edge geolocation (`request.cf.country`) is
//   used: non-Turkish visitors are redirected to the EN copy of the page
//   they requested; Turkish visitors stay on the root (TR) tree.
// - Static assets (anything with a file extension) and the API route are
//   left untouched.
//
// TR and EN no longer share 1:1 slugs (bkz. decisions/decision-log.md —
// TR/EN mesaj ayrışması kararı): the EN site has no "Dış Satınalma
// Hizmeti" page, so both `/hizmetler` and `/dis-satinalma-hizmeti` map to
// the single buyer-facing `/en/sourcing-from-turkey` page. Pages with no
// direct EN counterpart (individual blog posts, /gizlilik) fall back to
// the EN homepage rather than a broken guess.

const LANG_COOKIE = "teminor_lang";

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

function trToEn(path: string): string {
  return TR_TO_EN_PATH[path] ?? "/en";
}

function enToTr(path: string): string {
  return EN_TO_TR_PATH[path] ?? "/";
}

function getCookie(request: Request, name: string): string | null {
  const header = request.headers.get("Cookie");
  if (!header) return null;
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  const isAsset = /\.[a-zA-Z0-9]+$/.test(path);
  const isApi = path.startsWith("/api/");
  const isAlreadyEnglish = path === "/en" || path.startsWith("/en/");

  if (isAsset || isApi) {
    return context.next();
  }

  const langPref = getCookie(request, LANG_COOKIE);

  if (langPref === "en" && !isAlreadyEnglish) {
    return Response.redirect(`${url.origin}${trToEn(path)}${url.search}`, 302);
  }
  if (langPref === "tr" && isAlreadyEnglish) {
    return Response.redirect(`${url.origin}${enToTr(path)}${url.search}`, 302);
  }
  if (langPref) {
    // Manual preference already matches the current path — no redirect.
    return context.next();
  }

  // No manual preference: fall back to Cloudflare's edge geolocation.
  const country = (
    request as Request & { cf?: IncomingRequestCfProperties }
  ).cf?.country;

  if (country && country !== "TR" && !isAlreadyEnglish) {
    return Response.redirect(`${url.origin}${trToEn(path)}${url.search}`, 302);
  }

  return context.next();
};

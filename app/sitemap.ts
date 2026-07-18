import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// TR and EN no longer describe the same pages (bkz. decisions/
// decision-log.md — TR/EN mesaj ayrışması kararı): the EN site has no
// "Dış Satınalma Hizmeti" equivalent, and its buyer-facing service page
// (/en/sourcing-from-turkey) is not a translation of /hizmetler or
// /dis-satinalma-hizmeti. hreflang alternates are therefore only declared
// for routes that are genuinely equivalent across languages — the
// homepage (as a language/region entry point) and the contact form.
const PAIRED_ROUTES: Array<{ tr: string; en: string }> = [
  { tr: "", en: "/en" },
  { tr: "/iletisim", en: "/en/contact" },
  { tr: "/blog", en: "/en/blog" },
];

// TR-only routes with no EN equivalent by design.
const TR_ONLY_ROUTES = ["/dis-satinalma-hizmeti", "/hizmetler", "/gizlilik"];

// EN-only routes with no TR equivalent by design.
const EN_ONLY_ROUTES = ["/en/sourcing-from-turkey"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pairedTr: MetadataRoute.Sitemap = PAIRED_ROUTES.map((pair) => ({
    url: `${SITE_URL}${pair.tr}`,
    lastModified: now,
    alternates: {
      languages: {
        tr: `${SITE_URL}${pair.tr}`,
        en: `${SITE_URL}${pair.en}`,
      },
    },
  }));

  const pairedEn: MetadataRoute.Sitemap = PAIRED_ROUTES.map((pair) => ({
    url: `${SITE_URL}${pair.en}`,
    lastModified: now,
    alternates: {
      languages: {
        tr: `${SITE_URL}${pair.tr}`,
        en: `${SITE_URL}${pair.en}`,
      },
    },
  }));

  const trOnlyRoutes: MetadataRoute.Sitemap = TR_ONLY_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));

  const enOnlyRoutes: MetadataRoute.Sitemap = EN_ONLY_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));

  const trPostRoutes: MetadataRoute.Sitemap = getAllPosts("tr").map(
    (post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })
  );

  const enPostRoutes: MetadataRoute.Sitemap = getAllPosts("en").map(
    (post) => ({
      url: `${SITE_URL}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })
  );

  return [
    ...pairedTr,
    ...pairedEn,
    ...trOnlyRoutes,
    ...enOnlyRoutes,
    ...trPostRoutes,
    ...enPostRoutes,
  ];
}

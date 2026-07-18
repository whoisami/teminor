import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Locale = "tr" | "en";

// EN posts live in their own directory rather than sharing slugs with TR
// posts — avoids a slug-collision/lookup table and keeps `getAllSlugs`/
// `generateStaticParams` trivial for each locale's blog routes.
const BLOG_DIRS: Record<Locale, string> = {
  tr: path.join(process.cwd(), "content", "blog"),
  en: path.join(process.cwd(), "content", "blog-en"),
};

export type PostFrontmatter = {
  title: string;
  slug: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  ogImage?: string;
};

export type PostSummary = PostFrontmatter & {
  content: string;
};

function readPostFile(
  slug: string,
  locale: Locale = "tr"
): { data: PostFrontmatter; content: string } {
  const filePath = path.join(BLOG_DIRS[locale], `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as PostFrontmatter, content };
}

export function getAllSlugs(locale: Locale = "tr"): string[] {
  const dir = BLOG_DIRS[locale];
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(locale: Locale = "tr"): PostSummary[] {
  const slugs = getAllSlugs(locale);
  const posts = slugs.map((slug) => {
    const { data, content } = readPostFile(slug, locale);
    return { ...data, content };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(
  slug: string,
  locale: Locale = "tr"
): PostSummary | null {
  try {
    const { data, content } = readPostFile(slug, locale);
    return { ...data, content };
  } catch {
    return null;
  }
}

const RELATED_SLUGS: Record<string, string[]> = {
  "satin-almanin-sirketler-icin-stratejik-onemi": [
    "satin-alma-surecinin-ticari-degeri",
    "dis-kaynak-satin-alma-departmani-nedir",
  ],
  "satin-alma-surecinin-ticari-degeri": [
    "kobiler-icin-gizli-maliyet-analizi",
    "satin-almanin-sirketler-icin-stratejik-onemi",
  ],
  "kobiler-icin-dis-kaynak-satin-alma": [
    "dis-kaynak-satin-alma-departmani-nedir",
    "satin-alma-departmani-olan-sirketlere-teminor-faydasi",
  ],
  "satin-alma-departmani-olan-sirketlere-teminor-faydasi": [
    "tedarikci-dolandiriciligindan-korunma-yontemleri",
    "kobiler-icin-dis-kaynak-satin-alma",
  ],
  "dis-kaynak-satin-alma-departmani-nedir": [
    "kobiler-icin-dis-kaynak-satin-alma",
    "satin-almanin-sirketler-icin-stratejik-onemi",
  ],
  "tedarikci-dolandiriciligindan-korunma-yontemleri": [
    "kobiler-icin-gizli-maliyet-analizi",
    "satin-alma-departmani-olan-sirketlere-teminor-faydasi",
  ],
  "kobiler-icin-gizli-maliyet-analizi": [
    "tedarikci-dolandiriciligindan-korunma-yontemleri",
    "satin-alma-surecinin-ticari-degeri",
  ],
  "yabanci-alici-nasil-bulunur": [
    "alici-listesi-neden-tek-basina-satis-getirmez",
    "bir-urun-ihracata-hazir-mi",
  ],
  "alici-listesi-neden-tek-basina-satis-getirmez": [
    "yabanci-alici-nasil-bulunur",
    "bir-urun-ihracata-hazir-mi",
  ],
  "bir-urun-ihracata-hazir-mi": [
    "yabanci-alici-nasil-bulunur",
    "alici-listesi-neden-tek-basina-satis-getirmez",
  ],
};

export function getRelatedPosts(slug: string): PostSummary[] {
  const relatedSlugs = RELATED_SLUGS[slug] ?? [];
  const allPosts = getAllPosts();
  return relatedSlugs
    .map((relatedSlug) => allPosts.find((post) => post.slug === relatedSlug))
    .filter((post): post is PostSummary => Boolean(post));
}

export function formatPostDate(date: string, locale: Locale = "tr"): string {
  return new Date(date).toLocaleDateString(
    locale === "en" ? "en-US" : "tr-TR",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

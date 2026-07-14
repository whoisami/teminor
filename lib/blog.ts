import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

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

function readPostFile(slug: string): { data: PostFrontmatter; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as PostFrontmatter, content };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostSummary[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => {
    const { data, content } = readPostFile(slug);
    return { ...data, content };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostSummary | null {
  try {
    const { data, content } = readPostFile(slug);
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
};

export function getRelatedPosts(slug: string): PostSummary[] {
  const relatedSlugs = RELATED_SLUGS[slug] ?? [];
  const allPosts = getAllPosts();
  return relatedSlugs
    .map((relatedSlug) => allPosts.find((post) => post.slug === relatedSlug))
    .filter((post): post is PostSummary => Boolean(post));
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

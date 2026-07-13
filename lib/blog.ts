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

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

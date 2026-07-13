import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const description =
  "Teminor blogunda satın almanın stratejik önemi, dış kaynak satın alma modeli ve KOBİ'ler için tedarik yönetimi üzerine yazılar bulabilirsiniz.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Teminor",
    description,
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-navy md:text-5xl">
            Satın Alma Üzerine Yazılar
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

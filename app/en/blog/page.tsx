import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const description =
  "Articles on export sales development, buyer development, and sourcing from Turkey.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: `${SITE_URL}/en/blog`,
    languages: { "tr-TR": `${SITE_URL}/blog`, "en-US": `${SITE_URL}/en/blog` },
  },
  openGraph: {
    title: "Blog | Teminor",
    description,
    url: `${SITE_URL}/en/blog`,
    type: "website",
    locale: "en_US",
  },
};

export default function BlogIndexPageEN() {
  const posts = getAllPosts("en");

  return (
    <section className="py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-navy md:text-5xl">
            Articles on Export &amp; Sourcing
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <BlogCard post={post} locale="en" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

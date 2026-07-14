import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import {
  formatPostDate,
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 font-serif text-2xl text-navy" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-4 leading-relaxed text-muted" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-muted" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => <li {...props} />,
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-navy" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
      {...props}
    />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="mt-8 block text-base italic text-navy/80" {...props} />
  ),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Teminor" },
    publisher: {
      "@type": "Organization",
      name: "Teminor",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/teminor_lockup.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    ...(post.ogImage ? { image: post.ogImage } : {}),
    description: post.metaDescription,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <article className="py-24">
      <PageViewTracker type="blog" slug={post.slug} title={post.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container-content max-w-3xl">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="font-medium text-gold hover:text-navy">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="font-medium text-gold hover:text-navy">
              Blog
            </Link>
          </nav>
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-gold">
            {formatPostDate(post.date)}
          </p>
          <h1 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </Reveal>

        {relatedPosts.length > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-16 border-t border-navy/10 pt-10">
              <p className="eyebrow">İlgili Yazılar</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}

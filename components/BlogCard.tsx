import Link from "next/link";
import { formatPostDate, type PostSummary } from "@/lib/blog";

export default function BlogCard({
  post,
  locale = "tr",
}: {
  post: PostSummary;
  locale?: "tr" | "en";
}) {
  const href = locale === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
  return (
    <article className="card-interactive flex h-full flex-col justify-between rounded-sm border border-navy/10 bg-white p-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gold">
          {formatPostDate(post.date, locale)}
        </p>
        <h3 className="mt-3 font-serif text-xl leading-snug text-navy">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {post.metaDescription}
        </p>
      </div>
      <Link
        href={href}
        className="mt-6 inline-block text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
      >
        {locale === "en" ? "Read More" : "Devamını Oku"}
      </Link>
    </article>
  );
}

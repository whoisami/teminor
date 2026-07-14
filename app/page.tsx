import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BenefitCard from "@/components/BenefitCard";
import { TimeIcon, CostIcon, RiskIcon } from "@/components/BenefitIcons";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import BlogCard from "@/components/BlogCard";
import CountUpStat from "@/components/CountUpStat";
import TrackedCta from "@/components/analytics/TrackedCta";
import { getAllPosts } from "@/lib/blog";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_INTL,
  MIN_SUPPLIER_COMPARISON,
  SITE_URL,
} from "@/lib/site";

const description =
  "Teminor, KOBİ'ler için dış kaynaklı satın alma departmanıdır. Talep alımından raporlamaya, tedarikçi araştırmasına kadar satın alma sürecinizi yönetir.";

export const metadata: Metadata = {
  title: "Satın Alma Departmanınız Yoksa, Biz Oluruz",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Teminor | Dış Kaynaklı Satın Alma Departmanı",
    description,
    url: SITE_URL,
    type: "website",
  },
};

const nedenTeminorPoints = [
  "Aracı değil, ortağınız — süreci devralırız, sadece isim vermeyiz.",
  "Onay olmadan hiçbir sipariş verilmez — kararı hep siz verirsiniz.",
  "Tek sektöre değil, ihtiyacınıza göre kurulan operasyon modeli.",
  "Şeffaf ücretlendirme — gizli komisyon yok, ne ödediğinizi bilirsiniz.",
];

const stats = [
  {
    title: "Türkiye Genelinde Tedarikçi Araştırması",
    label: "Bölgesel sınır olmadan, ihtiyacınıza uygun tedarikçi araştırılır.",
  },
  {
    title: "Standart Taleplerde 1-2 İş Günü Yanıt",
    label: "Talebiniz standart süreçte 1-2 iş günü içinde değerlendirilir.",
  },
  {
    title: null,
    label: "Tek kaynağa bağımlı kalmadan, karşılaştırmalı teklif toplanır.",
  },
];

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Teminor",
        url: SITE_URL,
        logo: `${SITE_URL}/logo/teminor_lockup.png`,
        email: CONTACT_EMAIL,
        telephone: `+${CONTACT_PHONE_INTL}`,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Teminor",
        image: `${SITE_URL}/logo/teminor_icon.png`,
        url: SITE_URL,
        telephone: `+${CONTACT_PHONE_INTL}`,
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "İzmir",
          addressCountry: "TR",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <HowItWorks />

      {/* Benefits */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Neden Bizimle Çalışmalısınız</p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl text-navy md:text-4xl">
              İşi biz yürütürüz, kararı siz verirsiniz.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <BenefitCard
              icon={<TimeIcon />}
              title="Zaman Tasarrufu"
              description="Tedarikçi araştırması, teklif toplama ve karşılaştırma sizin yerinize yürütülür; ekibiniz operasyona odaklanır."
            />
            <BenefitCard
              icon={<CostIcon />}
              title="Maliyet Tasarrufu"
              description="Çoklu tedarikçi karşılaştırması ve müzakere gücüyle, tek tedarikçiye bağımlılığın getirdiği fiyat riskini azaltırız."
              delay={0.1}
            />
            <BenefitCard
              icon={<RiskIcon />}
              title="Risk Yönetimi"
              description="Hiçbir sipariş sizin onayınız olmadan tedarikçiye gitmez. Operasyonel risk, size ulaşmadan önce durdurulur."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Neden Teminor short */}
      <section className="bg-navy py-24 text-white">
        <div className="container-content grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">Neden Teminor</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Satın almayı devretmek, kontrolü kaybetmek değildir.
            </h2>
            <TrackedCta
              href="/neden-teminor"
              label="neden_teminor_detay"
              location="home_neden_teminor"
              className="mt-8 inline-block text-sm font-semibold text-gold underline decoration-2 underline-offset-4 hover:text-white"
            >
              Detaylı bilgi alın
            </TrackedCta>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="space-y-5">
              {nedenTeminorPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Rakamlarla Teminor</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="card-interactive rounded-sm border border-navy/10 bg-white p-8 text-center">
                  {stat.title ? (
                    <p className="font-serif text-xl text-gold">
                      {stat.title}
                    </p>
                  ) : (
                    <CountUpStat
                      value={MIN_SUPPLIER_COMPARISON}
                      prefix="Her Talepte "
                      suffix="+ Tedarikçi Karşılaştırması"
                      className="font-serif text-xl text-gold"
                    />
                  )}
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />

      {/* Blog preview */}
      {latestPosts.length > 0 && (
        <section className="bg-light-bg py-24">
          <div className="container-content">
            <Reveal>
              <p className="eyebrow">Blog</p>
              <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
                Satın Alma Üzerine Yazılar
              </h2>
              <TrackedCta
                href="/blog"
                label="tum_yazilari_goruntule"
                location="home_blog_preview"
                className="mt-4 inline-block text-sm font-semibold text-gold underline decoration-2 underline-offset-4 hover:text-navy"
              >
                Tüm Yazıları Görüntüle
              </TrackedCta>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {latestPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.1}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

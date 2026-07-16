import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BenefitCard from "@/components/BenefitCard";
import {
  TimeIcon,
  CostIcon,
  RiskIcon,
  ReachIcon,
  TrackingIcon,
} from "@/components/BenefitIcons";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CategoryGrid from "@/components/CategoryGrid";
import SectorGrid from "@/components/SectorGrid";
import FAQSection from "@/components/FAQSection";
import FinalCta from "@/components/FinalCta";
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
  "Teminor, işletmelerin satın alma iş yükünü dışarıdan yürütür. Tedarikçi araştırma, teklif karşılaştırma ve sipariş takibi; yazılı onay olmadan sipariş verilmez.";

export const metadata: Metadata = {
  title: "Teminor | Dış Kaynak Satın Alma Departmanı — Kontrol Sizde Kalır",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Teminor — Satın Alma İş Yükünüzü Biz Üstlenelim",
    description:
      "Tedarikçi araştırma, teklif karşılaştırma ve sipariş takibini dış kaynak olarak yürütüyoruz. Nihai karar her zaman sizde kalır.",
    url: SITE_URL,
    type: "website",
  },
};

const homeFaqItems = [
  {
    question: "Teminor benim adıma sipariş verebilir mi?",
    answer:
      "Sipariş yalnızca sizin yazılı onayınızla ve onay kapsamıyla sınırlı olarak iletilir.",
  },
  {
    question: "Kontrolü kaybeder miyim?",
    answer:
      "Hayır. Nihai tedarikçi seçimi ve sipariş onayı her zaman sizde kalır.",
  },
  {
    question: "Tedarikçiden komisyon alıyor musunuz?",
    answer:
      "Teminor, müşterinin önceden yazılı bilgisi ve onayı olmadan değerlendirilen tedarikçilerden komisyon veya başka bir ticari menfaat kabul etmez.",
  },
  {
    question: "Ürün yanlış veya kusurlu çıkarsa sorumluluk kimde?",
    answer:
      "Teknik uygunluk ve nihai kabul sizin sorumluluğunuzdadır; tedarikçinin ayıplı ifası Teminor tarafından garanti edilmez.",
  },
  {
    question: "Kaç tedarikçiden teklif alınır?",
    answer:
      "Teklif sayısı kategoriye ve pazardaki uygun tedarikçi durumuna göre değişir; pilot çalışmada RFQ başına en fazla 3 tedarikçi adayı araştırılır.",
  },
  {
    question: "Tedarikçi teklif vermezse ne olur?",
    answer:
      "Alternatif adaylarla araştırma sürdürülür ve durum size bildirilir.",
  },
  {
    question: "Mevcut satın alma çalışanımız varsa hizmeti kullanabilir miyiz?",
    answer:
      "Evet. Teminor, ekibinizin yoğun veya kapasitesini aşan kategorilerinde ek kaynak olarak çalışabilir.",
  },
  {
    question: "Hangi kategorilerde çalışıyorsunuz?",
    answer:
      "Başta makine/metal, ambalaj/plastik/kimya ve gıda üretimi olmak üzere, üretim ve teknik servis ağırlıklı kategorilerde çalışıyoruz.",
  },
  {
    question: "RFQ nedir ve nasıl açılır?",
    answer:
      "RFQ, bir satın alma talebinin teknik ve ticari detaylarını içeren teklif talep formudur. Teminor formu size gönderir; doldurup e-posta ile geri gönderdiğinizde talebiniz sisteme kaydedilir.",
  },
  {
    question: "Pilot çalışma nasıl işler?",
    answer:
      "Pilot çalışma 30 gün sürer; 2 kategori ve toplam 3 RFQ kapsamında ilerler. Her RFQ'da en fazla 5 kalem işlenir ve en fazla 3 tedarikçi adayı araştırılır. Süreç sonunda bir değerlendirme raporu paylaşılır.",
  },
];

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

      {/* Problem */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Problem</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              Satın Alma, Ana İşiniz Değil — Ama Zamanınızı Tüketiyor
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Talepler e-posta ve Excel arasında dağıldığında; kimden teklif
              alındığı, hangi şartın neden seçildiği ve işin nerede beklediği
              görünmez hale gelir. Her geciken teklif veya takipsiz kalan
              sipariş, ekibinizin asıl işine ayırması gereken zamanı alır.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Çözüm */}
      <section className="bg-white py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Çözüm</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              Süreç Sizin, Yürütme Bizim
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Teminor, satın alma taleplerinizi standartlaştırır; alternatif
              tedarikçileri araştırır, teklifleri fiyat, vade, termin,
              nakliye ve diğer ticari koşullar mümkün olduğu ölçüde normalize
              edilerek karşılaştırır, müzakereyi ve sipariş takibini yürütür.
              Siz yalnızca öneriyi değerlendirir ve yazılı onay verirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

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
              title="Zaman Kazanın"
              description="Teklif toplama ve tedarikçi takibi ekibinizin gündeminden çıkar; siz stratejik işinize odaklanırsınız."
            />
            <BenefitCard
              icon={<CostIcon />}
              title="Net Karşılaştırma"
              description="Teklifler fiyat, vade, termin, nakliye ve diğer ticari koşullar mümkün olduğu ölçüde normalize edilerek karşılaştırılır."
              delay={0.08}
            />
            <BenefitCard
              icon={<ReachIcon />}
              title="Daha Geniş Tedarikçi Erişimi"
              description="Mevcut tedarikçi ağınızın dışında, kategoriye uygun alternatif adaylar araştırılır."
              delay={0.16}
            />
            <BenefitCard
              icon={<RiskIcon />}
              title="İz Bırakan Süreç"
              description="Her RFQ, teklif, onay ve sipariş kayıt altına alınır; kimin ne zaman onayladığı nettir."
              delay={0.24}
            />
            <BenefitCard
              icon={<TrackingIcon />}
              title="Teslimat Takibi"
              description="Sipariş onaylandıktan sonra termin ve sevkiyat süreci düzenli olarak takip edilir."
              delay={0.32}
            />
          </div>
        </div>
      </section>

      <HowItWorks />

      <CategoryGrid />

      <SectorGrid />

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

      {/* Güven ve Şeffaflık */}
      <section className="bg-white py-24">
        <div className="container-content max-w-2xl">
          <Reveal>
            <p className="eyebrow">Güven ve Şeffaflık</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              Güven ve Şeffaflık İlkelerimiz
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Yazılı müşteri onayı olmadan sipariş verilmez.",
                "Nihai tedarikçi seçimi size aittir.",
                "Teminor, müşterinin önceden yazılı bilgisi ve onayı olmadan değerlendirilen tedarikçilerden komisyon veya başka bir ticari menfaat kabul etmez.",
                "Tüm teklifler, kararlar ve durum değişiklikleri kayıt altına alınır.",
                "Teknik uygunluk ve teslim kabulü sizin tarafınızdan doğrulanır.",
              ].map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm leading-relaxed text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pilot Hizmet */}
      <section className="bg-navy py-24 text-white">
        <div className="container-content max-w-2xl">
          <Reveal>
            <p className="eyebrow">Pilot</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              30 Günlük Satın Alma Pilot Çalışması
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              30 gün süresince, 2 kategori ve toplam 3 RFQ kapsamında modeli
              gerçek talebiniz üzerinde test edin. Her RFQ&apos;da en fazla 5
              kalem işlenir ve kategoriye uygun en fazla 3 tedarikçi adayı
              araştırılır. Pilot sonunda süreç ve gelişim raporu paylaşılır;
              talep ederseniz düzenli çalışma modeline geçiş birlikte
              değerlendirilir.
            </p>
            <TrackedCta
              href="/hizmetler"
              label="home_pilot_calismayi_inceleyin"
              location="home_pilot"
              className="btn-primary mt-8 bg-gold hover:bg-[#8a6b2d]"
            >
              Pilot Çalışmayı İnceleyin
            </TrackedCta>
          </Reveal>
        </div>
      </section>

      <FAQSection items={homeFaqItems} />

      <FinalCta
        heading="Satın Alma İş Yükünüzü Birlikte Haritalandıralım"
        ctaLabel="İlk Talebinizi Değerlendirelim"
        ctaTrackingLabel="home_final_cta_ilk_talep"
        location="home_final_cta"
      />

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

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
  "Teminor, Türk üreticilerin ürünleri için uygun yabancı alıcıları araştırır, karar vericilere ulaşır ve ihracat satış sürecini ticari görüşmeye kadar yönetir.";

export const metadata: Metadata = {
  title: "Teminor | İhracat Satış Geliştirme ve Yabancı Alıcı Bulma",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Teminor — Üretimden Küresel Talebe",
    description:
      "Doğrulanmış ticari ilgi geliştiririz; liste veya rapor satmayız. İhracat satış geliştirme, yabancı alıcı geliştirme ve ticari temsilcilik.",
    url: SITE_URL,
    type: "website",
  },
};

const homeFaqItems = [
  {
    question: "Teminor bana alıcı veya satış garantisi verir mi?",
    answer:
      "Hayır. Doğrulanmış ticari ilgi geliştirir ve satış sürecini yönetiriz; satış, ihracat veya alıcı garantisi vermeyiz.",
  },
  {
    question: "Teminor, üreticinin yetkili temsilcisi mi?",
    answer:
      "Yalnızca yazılı sözleşmeyle tanımlanan ürün, pazar ve yetki kapsamında. Yazılı sözleşme yoksa hiçbir üreticinin yetkili temsilcisi olduğumuzu iddia etmeyiz.",
  },
  {
    question: "Buyer Validation Sprint nedir?",
    answer:
      "Tek bir ürün grubu ve sınırlı bir hedef pazar için hedef alıcı/karar verici araştırma, doğrulama ve kontrollü temas çalışmasıdır; sonunda bir ticari sinyal raporu paylaşılır.",
  },
  {
    question: "Başvuru için hangi bilgileri paylaşmam gerekiyor?",
    answer:
      "Ürün grubu, HS/GTİP, kapasite, MOQ, teslim süresi, sertifikalar ve İngilizce katalog/teknik doküman durumunuz gibi bilgileri paylaşmanız gerekir.",
  },
  {
    question: "Fiyat, sözleşme veya sipariş kararını Teminor mu verir?",
    answer:
      "Hayır. Fiyat bağlama, sözleşme imzalama ve nihai karar yetkisi, ayrıca ve açıkça verilmedikçe üreticide/müşteride kalır.",
  },
  {
    question: "Tedarikçiden veya alıcıdan komisyon alıyor musunuz?",
    answer:
      "Teminor, önceden yazılı bilgi ve onay olmadan gizli komisyon veya açıklanmayan bir menfaat kabul etmez.",
  },
  {
    question: "Ürün yanlış veya kusurlu çıkarsa sorumluluk kimde?",
    answer:
      "Ürünün teknik uygunluğu, kalite standardı, mevzuata uyumu ve zamanında teslimi üreticinin sorumluluğundadır.",
  },
  {
    question: "Satınalma / Türkiye'den tedarik hizmetini de sunuyor musunuz?",
    answer:
      "Evet. Yabancı alıcılar için Türkiye'den üretici bulma ve tedarik süreci koordinasyonu, ikinci ana yetkinliğimiz olarak devam ediyor — detaylar için Hizmetler sayfasına bakabilirsiniz.",
  },
  {
    question: "RFQ nedir ve nasıl açılır?",
    answer:
      "RFQ, bir satın alma veya ihracat talebinin teknik ve ticari detaylarını içeren teklif talep formudur. Teminor formu iletir; doldurup geri gönderdiğinizde talebiniz sisteme kaydedilir.",
  },
];

const nedenTeminorPoints = [
  "Rapor veya liste satmayız — doğrulanmış ticari ilgi geliştiririz.",
  "Yazılı sözleşme olmadan hiçbir üreticinin yetkili temsilcisi olduğumuzu iddia etmeyiz.",
  "Her çalışma tek ürün grubu ve net hedef segmentle sınırlandırılır.",
  "Satış veya alıcı garantisi vermeyiz; yalnızca yapılan çalışma ve doğrulanan sonuçlar raporlanır.",
];

const stats = [
  {
    title: "Tek Ürün Grubu, Net Hedef Segment",
    label: "Her çalışma sınırlı ve ölçülebilir bir kapsamla yürütülür.",
  },
  {
    title: "Doğrulanmış Karar Verici Teması",
    label: "Genel listeler değil, doğrulanmış karar vericilerle temas kurulur.",
  },
  {
    title: "Şeffaf Ticari Sinyal Raporlama",
    label: "Yapılan çalışma ve doğrulanan sonuçlar düzenli olarak raporlanır.",
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
              Doğru Alıcıyı Bulmak, Ürün Kadar Zor
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Genel şirket listeleri veya tek seferlik fuar temasları tek
              başına satış getirmez. Karar vericiye ulaşmak, doğru zamanda
              doğru teklifi sunmak ve süreci takip etmek; üretimin ve
              kalitenin dışında kalan, zaman ve uzmanlık isteyen ayrı bir
              disiplindir.
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
              Alıcıyı Buluruz, Satış Sürecini Yönetiriz
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Teminor, ürününüze uygun yabancı alıcıları araştırır, karar
              vericileri doğrular; ilk temastan RFQ, numune ve teklife kadar
              satış sürecini sizinle birlikte yönetir. Doğrulanmış ticari
              ilgi geliştiririz; liste veya rapor satmayız.
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
              Alıcıyı biz buluruz, kararı siz verirsiniz.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <BenefitCard
              icon={<TimeIcon />}
              title="Zaman Kazanın"
              description="Alıcı araştırma ve ilk temas süreci sizin yerinize yürütülür; siz üretim ve kaliteye odaklanırsınız."
            />
            <BenefitCard
              icon={<ReachIcon />}
              title="Doğru Alıcıya Ulaşın"
              description="Genel listeler yerine, ürününüze uygun karar vericiler araştırılır ve doğrulanır."
              delay={0.08}
            />
            <BenefitCard
              icon={<CostIcon />}
              title="Süreç Disiplini"
              description="İlk temastan teklife kadar her aşama yapılandırılmış ve takip edilebilir şekilde yürütülür."
              delay={0.16}
            />
            <BenefitCard
              icon={<RiskIcon />}
              title="Şeffaf Raporlama"
              description="Yapılan çalışma, temas ve doğrulanan sonuçlar raporlanır; satış garantisi verilmez."
              delay={0.24}
            />
            <BenefitCard
              icon={<TrackingIcon />}
              title="Kontrol Sizde Kalır"
              description="Fiyat, sözleşme ve nihai karar yetkisi, yazılı yetki verilmedikçe sizde kalır."
              delay={0.32}
            />
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Sourcing from Turkey — ikincil hizmet girişi */}
      <section className="bg-navy py-16 text-white">
        <div className="container-content text-center">
          <Reveal>
            <p className="eyebrow">İkincil Hizmet</p>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl">
              Yabancı Alıcıysanız: Türkiye&apos;den Tedarik ve Stratejik
              Satınalma
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Türkiye&apos;den ürün veya üretici arıyorsanız, tedarikçi
              araştırma, teklif toplama ve karşılaştırma sürecini sizin için
              yürütürüz.
            </p>
            <div className="mt-6 flex justify-center">
              <CountUpStat
                value={MIN_SUPPLIER_COMPARISON}
                prefix="Her Talepte "
                suffix="+ Tedarikçi Karşılaştırması"
                className="font-serif text-xl text-gold"
              />
            </div>
            <TrackedCta
              href="/iletisim#alici-talebi"
              label="home_sourcing_alici_ariyorum"
              location="home_sourcing"
              className="btn-primary mt-6 inline-block bg-gold hover:bg-[#8a6b2d]"
            >
              Türkiye&apos;den Üretici Arıyorum
            </TrackedCta>
          </Reveal>
        </div>
      </section>

      <CategoryGrid />

      <SectorGrid />

      {/* Neden Teminor short */}
      <section className="bg-navy py-24 text-white">
        <div className="container-content grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">Neden Teminor</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              İlk temas kurmak, satışın garantisi değildir.
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
            <p className="eyebrow">Nasıl Çalıştığımız</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="card-interactive rounded-sm border border-navy/10 bg-white p-8 text-center">
                  <p className="font-serif text-xl text-gold">{stat.title}</p>
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
                "Üretici adına fiyat bağlama, sözleşme imzalama veya tahsilat yetkisi, ayrıca ve açıkça verilmedikçe kullanılmaz.",
                "Gizli komisyon veya açıklanmayan menfaat kabul edilmez.",
                "Yetkili temsilcilik yalnızca yazılı sözleşmeyle ve tanımlı kapsamla kurulur.",
                "Ürünün teknik uygunluğu, kalite standardı ve zamanında teslimi üreticinin sorumluluğundadır.",
                "Kanıtlanamayan müşteri, hacim, başarı veya ortaklık iddiası paylaşılmaz.",
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

      {/* Buyer Validation Sprint */}
      <section className="bg-navy py-24 text-white">
        <div className="container-content max-w-2xl">
          <Reveal>
            <p className="eyebrow">Buyer Validation Sprint</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Tek Ürün, Tek Pazar, Doğrulanmış Ticari Sinyal
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Buyer Validation Sprint; tek bir ürün grubu, sınırlı bir hedef
              pazar ve net bir alıcı segmentiyle çalışır. Hedef şirketler ve
              karar vericiler doğrulanır, kontrollü temas ve takip yürütülür,
              süreç sonunda bir ticari sinyal raporu paylaşılır. Amaç satış
              garantisi değil, sinyal doğrulamadır.
            </p>
            <TrackedCta
              href="/hizmetler"
              label="home_buyer_validation_sprint_inceleyin"
              location="home_sprint"
              className="btn-primary mt-8 bg-gold hover:bg-[#8a6b2d]"
            >
              Buyer Validation Sprint&apos;i İnceleyin
            </TrackedCta>
          </Reveal>
        </div>
      </section>

      <FAQSection items={homeFaqItems} />

      <FinalCta
        heading="Ürününüzü Değerlendirip İlk Adımı Birlikte Atalım"
        ctaLabel="Ürününüzü Değerlendirelim"
        href="/iletisim#uretici-basvurusu"
        ctaTrackingLabel="home_final_cta_urun_degerlendirme"
        location="home_final_cta"
      />

      {/* Blog preview */}
      {latestPosts.length > 0 && (
        <section className="bg-light-bg py-24">
          <div className="container-content">
            <Reveal>
              <p className="eyebrow">Blog</p>
              <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
                İhracat ve Satın Alma Üzerine Yazılar
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

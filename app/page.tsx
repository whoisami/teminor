import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import FinalCta from "@/components/FinalCta";
import BlogCard from "@/components/BlogCard";
import TrackedCta from "@/components/analytics/TrackedCta";
import { getAllPosts } from "@/lib/blog";
import { CONTACT_EMAIL, CONTACT_PHONE_INTL, SITE_URL } from "@/lib/site";

const description =
  "Teminor, Türk üreticilerin ürünleri için uygun yabancı alıcıları araştırır, karar vericilere ulaşır ve ihracat satış sürecini ticari görüşmeye kadar yönetir.";

export const metadata: Metadata = {
  title: "Teminor | İhracat Satış Geliştirme ve Yabancı Alıcı Bulma",
  description,
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/", "en-US": "/en" },
  },
  openGraph: {
    title: "Teminor — Türk Üreticiler İçin Uluslararası Satış Kanalları",
    description,
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
];

// "Bizimle çalışırsanız ne kazanırsınız" — süreç odaklı, ölçülemez/uydurma
// istatistik içermeyen somut kazanım listesi.
const gains = [
  "Doğrulanmış alıcılarla görüşme fırsatı — genel liste değil, karar vericiyle kurulan gerçek temas.",
  "Yönetilen RFQ ve teklif süreci — ilk temastan numuneye, teklife kadar her aşama sizin adınıza takip edilir.",
  "Temsilcilik ve doğrudan dış ticarete açılan yol — doğrulanan ilişkiler zaman içinde yazılı sözleşmeyle temsilciliğe dönüşebilir.",
  "Şeffaf raporlama — yapılan çalışma ve doğrulanan sonuçlar düzenli olarak paylaşılır.",
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
              Yabancı Alıcıya Ulaşmak, Üretmekten Ayrı Bir İş
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Ürününüz iyi olabilir — sorun genelde doğru alıcıya
              ulaşamamak veya satış sürecini takip edecek zaman ve ekibin
              olmamasıdır. Genel şirket listeleri veya tek seferlik fuar
              temasları tek başına satış getirmez.
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

      {/* Bizimle çalışırsanız ne kazanırsınız */}
      <section className="bg-light-bg py-24">
        <div className="container-content max-w-2xl">
          <Reveal>
            <p className="eyebrow">Ne Kazanırsınız</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              Bizimle Çalışırsanız Ne Kazanırsınız
            </h2>
            <ul className="mt-8 space-y-4">
              {gains.map((point) => (
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

      <HowItWorks />

      {/* Güven ve Şeffaflık */}
      <section className="bg-light-bg py-24">
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

      <FAQSection items={homeFaqItems} />

      <FinalCta
        heading="Ürününüzü Değerlendirip İlk Adımı Birlikte Atalım"
        ctaLabel="Ürününüzü Değerlendirelim"
        href="/iletisim"
        ctaTrackingLabel="home_final_cta_urun_degerlendirme"
        location="home_final_cta"
        showWhatsapp={false}
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

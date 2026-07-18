import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  MIN_SUPPLIER_COMPARISON,
  SITE_URL,
  whatsappLink,
} from "@/lib/site";

const comparisonRows = [
  {
    criterion: "Zaman",
    yourself: "Araştırma, teklif toplama ve takip ekibinizin zamanını alır",
    withTeminor: "Süreç dış kaynağa devredilir, ekibiniz operasyona odaklanır",
  },
  {
    criterion: "Tedarikçi Erişimi",
    yourself: "Bilinen/mevcut tedarikçilerle sınırlı kalınabilir",
    withTeminor: "Alternatif ve karşılaştırmalı tedarikçi araştırması yapılır",
  },
  {
    criterion: "Fiyat Karşılaştırması",
    yourself: "Tek kaynaktan fiyat alınabilir",
    withTeminor: `Her talepte ${MIN_SUPPLIER_COMPARISON}+ tedarikçiden teklif toplanır`,
  },
  {
    criterion: "Risk Yönetimi",
    yourself: "Tedarikçi doğrulaması manuel ve düzensiz olabilir",
    withTeminor: "Çok kaynaklı doğrulama ve güven derecelendirmesi uygulanır",
  },
  {
    criterion: "Süreklilik",
    yourself: "Ana tedarikçide sorun çıkarsa yedek plan olmayabilir",
    withTeminor: "Ana/yedek tedarikçi önerisi standart süreçtir",
  },
];

// Hypothetical, illustrative scenarios — not real customer references.
// Each card is labeled "Örnek Senaryo" in the UI so this is never
// presented as a testimonial or case study.
const scenarioCards = [
  {
    title: "Catering / Toplu Yemek",
    description:
      "Bir catering işletmesi ambalaj ve tek kullanımlık ürün kategorisinde aylık 6'ya kadar RFQ ile çalışır; süreç talep girişinden karşılaştırmalı teklife kadar birkaç iş günü içinde ilerler.",
  },
  {
    title: "Temizlik / Tesis Yönetimi",
    description:
      "Temizlik ve hijyen ürünleri kategorisinde çalışan bir tesis yönetim şirketi, konsantrasyon ve kullanım maliyeti karşılaştırmasıyla birim maliyetlerini netleştirir.",
  },
  {
    title: "Otel / Restoran",
    description:
      "Kurumsal mutfak işletmesi, kâğıt ürünleri kategorisinde kalite/gramaj eşitlemesiyle farklı tedarikçilerin tekliflerini karşılaştırılabilir hale getirir.",
  },
];

const description =
  "Dış Satınalma Hizmeti: Türkiye'den tedarik ve stratejik satınalma. Ortaklık yaklaşımı, onay mekanizması, esnek operasyon modeli ve şeffaf ücretlendirme.";

export const metadata: Metadata = {
  title: {
    absolute: "Dış Satınalma Hizmeti | Türkiye'den Tedarik ve Stratejik Satınalma",
  },
  description,
  // No EN hreflang alternate — this is a TR-only page for domestic
  // companies' purchasing departments; it has no EN equivalent (the
  // buyer-facing /en/sourcing-from-turkey targets a different audience
  // — bkz. decisions/decision-log.md TR/EN mesaj ayrışması kararı).
  alternates: { canonical: "/dis-satinalma-hizmeti" },
  openGraph: {
    title: "Dış Satınalma Hizmeti | Teminor",
    description,
    url: `${SITE_URL}/dis-satinalma-hizmeti`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dış Satınalma Hizmeti | Teminor",
    description,
  },
};

export default function NedenTeminorPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dış Satınalma Hizmeti",
        item: `${SITE_URL}/dis-satinalma-hizmeti`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Strategic Sourcing / Sourcing from Turkey",
    name: "Dış Satınalma Hizmeti",
    description,
    provider: { "@type": "Organization", name: "Teminor", url: SITE_URL },
    areaServed: "TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="bg-navy py-24 text-white">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Dış Satınalma Hizmeti</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              Türkiye&apos;den Tedarik: Sürece Siz Değil, Yükü Biz Taşırız
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Bu hizmet, yalnızca <strong className="text-white">yerli işletmenizin satın alma departmanı</strong>{" "}
              için tasarlanmıştır — catering, temizlik/tesis yönetimi,
              otel-restoran veya filo/saha hizmeti gibi düzenli tedarik
              ihtiyacı olan Türkiye&apos;deki şirketler için satın alma
              sürecini dışarıdan yönetiyoruz. (Yabancı bir alıcıysanız, bu
              sayfa size uygun değildir — <em>sourcing from Turkey</em>{" "}
              hizmetimiz için lütfen{" "}
              <a href="https://teminor.com/en/sourcing-from-turkey" className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold">
                İngilizce sitemize
              </a>{" "}
              bakın.)
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/60">
              Birincil hizmetimiz olan ihracat satış geliştirme için{" "}
              <Link href="/hizmetler" className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold">
                Hizmetler
              </Link>{" "}
              sayfasına bakabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-content max-w-3xl space-y-16">
          <Reveal>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Aracı değil, ortağınız — süreci devralırız, sadece isim vermeyiz.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Klasik bir tedarikçi bulma hizmeti, size yalnızca bir isim ve
              iletişim bilgisi verir; sürecin geri kalanı yine sizin
              omuzlarınızdadır. Teminor bu noktada farklı bir konumlanma
              seçer: tedarikçi araştırmasından teklif toplamaya, karşılaştırma
              tablosunun hazırlanmasından müzakereye kadar sürecin tamamını
              üstleniriz. Amacımız size bir liste sunmak değil, satın alma
              kararınızı kolaylaştıracak eksiksiz bir çalışma teslim etmektir.
              Bu yaklaşım, işletmenizin satın alma fonksiyonunu bir departman
              kurmadan, dışarıdan profesyonel bir ortakla yürütmesini sağlar.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Onay olmadan hiçbir sipariş verilmez — kararı hep siz verirsiniz.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Dış kaynaklı bir satın alma modeline geçerken en sık dile
              getirilen endişe, kontrolü kaybetme riskidir. Teminor&apos;da
              işleyiş bunun tam tersini garanti eder: her teklif karşılaştırması
              sizinle paylaşılır, her sipariş sizin onayınızdan geçer.
              Ekibimiz araştırma, müzakere ve operasyonel takibi yürütürken,
              nihai karar mercii her zaman sizsiniz. Bu, hem finansal
              kontrolünüzü korur hem de tedarikçi ilişkilerinizde son sözün
              işletmenizde kalmasını sağlar.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Tek sektöre değil, ihtiyacınıza göre kurulan operasyon modeli.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Satın alma ihtiyaçları sektörden sektöre, hatta aynı sektördeki
              işletmeler arasında bile büyük farklılık gösterir. Teminor,
              standart bir paket dayatmak yerine, işletmenizin satın alma
              hacmini, kategori dağılımını ve mevcut ekip yapısını analiz
              ederek özel bir operasyon modeli kurar. Catering, temizlik ve
              tesis yönetimi, otel-restoran işletmeleri veya filo/saha hizmeti
              veren şirketler gibi düzenli ve tekrar eden satın alma yapan
              işletmelerden, belirli kategorilerde noktasal destek arayan
              kurumsal yapılara kadar farklı ihtiyaç profillerine uyarlanabilir
              bir yaklaşım benimseriz.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Şeffaf ücretlendirme — gizli komisyon yok, ne ödediğinizi
              bilirsiniz.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Satın alma danışmanlığı alanında en çok karşılaşılan güven
              sorunlarından biri, tedarikçilerden alınan gizli komisyonlardır.
              Teminor bu modeli benimsemez. Ücretlendirmemiz, işletmenizle
              baştan netleştirilen ve anlaşılır bir yapıya dayanır; ne için ne
              ödediğinizi her zaman bilirsiniz. Bu şeffaflık, hem tedarikçi
              seçiminde tarafsız kalmamızı sağlar hem de sizinle uzun vadeli
              bir güven ilişkisi kurmamızın temelini oluşturur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-center">Karşılaştırma</p>
            <h2 className="mt-3 text-center font-serif text-3xl text-navy md:text-4xl">
              Kendiniz Yaparsanız vs. Teminor ile Çalışırsanız
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-x-auto rounded-sm border border-navy/10 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/10 bg-navy text-white">
                    <th className="px-6 py-4 font-serif text-base font-medium">
                      Kriter
                    </th>
                    <th className="px-6 py-4 font-serif text-base font-medium">
                      Kendiniz Yaparsanız
                    </th>
                    <th className="px-6 py-4 font-serif text-base font-medium">
                      Teminor ile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.criterion}
                      className={i % 2 === 1 ? "bg-light-bg" : undefined}
                    >
                      <td className="px-6 py-4 align-top font-semibold text-navy">
                        {row.criterion}
                      </td>
                      <td className="px-6 py-4 align-top text-muted">
                        {row.yourself}
                      </td>
                      <td className="px-6 py-4 align-top text-navy">
                        {row.withTeminor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow text-center">Örnek Senaryolar</p>
            <h2 className="mt-3 text-center font-serif text-3xl text-navy md:text-4xl">
              Sektörünüzde nasıl çalışır?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {scenarioCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-light-bg p-8 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wide text-gold">
                    Örnek Senaryo
                  </p>
                  <h3 className="mt-3 font-serif text-lg text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.24}>
            <p className="mt-10 text-center text-sm text-muted">
              Tedarikçi kaynaklı riskleri nasıl yönettiğimizi merak
              ediyorsanız{" "}
              <Link
                href="/blog/tedarikci-dolandiriciligindan-korunma-yontemleri"
                className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Tedarikçi Dolandırıcılığından Korunma Yöntemleri
              </Link>{" "}
              yazımızı inceleyebilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="container-content flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              Satın alma sürecinizi birlikte değerlendirelim.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="btn-primary">
                İletişime Geç
              </Link>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

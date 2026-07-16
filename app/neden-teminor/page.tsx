import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RoiCalculator from "@/components/RoiCalculator";
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
  "Teminor'un dış kaynaklı satın alma modelinin temel ilkeleri: ortaklık yaklaşımı, onay mekanizması, esnek operasyon modeli ve şeffaf ücretlendirme.";

export const metadata: Metadata = {
  title: { absolute: "Neden Teminor | Dış Kaynaklı Satın Alma Ortağınız" },
  description,
  alternates: { canonical: "/neden-teminor" },
  openGraph: {
    title: "Neden Teminor | Dış Kaynaklı Satın Alma Ortağınız",
    description,
    url: `${SITE_URL}/neden-teminor`,
    type: "website",
  },
};

export default function NedenTeminorPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Neden Teminor</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              Satın alma sürecinizi devrederken kontrolü kaybetmezsiniz.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Teminor&apos;u farklı kılan, satın alma disiplinini şirketinizin
              ihtiyaçlarına göre kurması ve her adımda kararı size bırakmasıdır.
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

      <section className="bg-white py-24">
        <div className="container-content max-w-4xl">
          <Reveal>
            <p className="eyebrow text-center">Operasyonel Yük</p>
            <h2 className="mt-3 text-center font-serif text-3xl text-navy md:text-4xl">
              Satın Alma Sürecinizin Bugünkü Maliyetini Hesaplayın
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
              Tasarruf yüzdesi vaat etmiyoruz; bunun yerine ekibinizin satın
              alma sürecine bugün ne kadar zaman ve maliyet ayırdığını kendi
              rakamlarınızla görün.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <RoiCalculator />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-20">
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
                <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8 shadow-sm">
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

      <section className="bg-white py-20">
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

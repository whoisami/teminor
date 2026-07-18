import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import FAQSection from "@/components/FAQSection";
import FinalCta from "@/components/FinalCta";
import TradeNetworkIllustration from "@/components/TradeNetworkIllustration";
import { SITE_URL } from "@/lib/site";

const description =
  "İhracat uygunluk analizi, yabancı alıcı geliştirme, ihracat satış geliştirme ve ticari temsilcilik hizmetlerimiz. Türkiye'den tedarik ve stratejik satınalma ikinci ana yetkinliğimizdir.";

export const metadata: Metadata = {
  title: "Teminor Hizmetleri | İhracat Satış Geliştirme ve Ticari Temsilcilik",
  description,
  // Not paired with an EN hreflang alternate — the former /en/hizmetler
  // page was a producer-facing translation; it's been replaced by the
  // buyer-facing /en/sourcing-from-turkey, which is different content
  // for a different audience, not a translation of this page (bkz.
  // decisions/decision-log.md — TR/EN mesaj ayrışması kararı).
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Teminor Hizmetleri — Üretimden Küresel Talebe",
    description:
      "İhracat uygunluk analizinden ticari temsilciliğe; Türkiye'den tedarikten stratejik satınalmaya kadar hizmetlerimiz.",
    url: `${SITE_URL}/hizmetler`,
    type: "website",
  },
};

type ServiceDetail = {
  name: string;
  trName: string;
  audience: string;
  steps: readonly string[];
  requiredInfo: string;
  output: string;
  limits: string;
  ctaLabel: string;
  ctaHref: string;
};

// Birincil hizmetler — Anayasa v2.0 §6 (Ana İş Modeli) aşama 1-4. Her
// hizmet, paket/fiyat karşılaştırması değil, fiilen yapılan iş adımlarını
// anlatır (bkz. decisions/decision-log.md — bu sayfa önceden paket/tier
// mantığıyla kuruluydu, süreç anlatımıyla değiştirildi).
const exportServices: ServiceDetail[] = [
  {
    name: "Export Readiness Assessment",
    trName: "İhracat Uygunluk Analizi",
    audience:
      "İhracata yeni başlayan veya ihracat sürecini sistemli hale getirmek isteyen Türk üreticiler",
    steps: [
      "Ürün grubu, HS/GTİP ve teknik dokümantasyonun gözden geçirilmesi",
      "Kapasite, MOQ, teslim süresi ve sertifikaların değerlendirilmesi",
      "İngilizce katalog/teknik doküman ve ticari yanıt kapasitesinin kontrolü",
      "Uygunluk değerlendirme raporunun hazırlanması",
    ],
    requiredInfo:
      "Ürün grubu, HS/GTİP, kapasite, sertifikalar, mevcut ihracat deneyiminiz",
    output:
      "Uygunluk değerlendirme raporu — hazır olduğunuz ve geliştirilmesi gereken alanlar",
    limits: "Satış garantisi verilmez; yalnızca mevcut durumun değerlendirmesi sunulur.",
    ctaLabel: "Ürününüzü Değerlendirelim",
    ctaHref: "/iletisim",
  },
  {
    name: "Export Buyer Development",
    trName: "Yabancı Alıcı Geliştirme",
    audience: "İhracata hazır, hedef pazarını netleştirmiş üreticiler",
    steps: [
      "Hedef pazar ve alıcı segmentinin (ithalatçı, distribütör, toptancı, OEM) netleştirilmesi",
      "Uygun alıcı adaylarının araştırılması",
      "Karar vericinin ve iletişim kanalının doğrulanması",
      "Yapılandırılmış ilk temasın kurulması ve ticari sinyal raporunun paylaşılması",
    ],
    requiredInfo: "Ürün grubu, hedef pazar, fiyat pozisyonu, numune kabiliyeti",
    output: "Doğrulanmış hedef şirket/karar verici listesi ve ticari sinyal raporu",
    limits: "Liste satışı değildir; alıcı garantisi verilmez.",
    ctaLabel: "Buyer Validation Sprint'i Değerlendirelim",
    ctaHref: "/iletisim",
  },
  {
    name: "Export Sales Development",
    trName: "İhracat Satış Geliştirme",
    audience:
      "Doğrulanmış alıcı adayları olan, satış sürecini yönetecek iç kapasitesi sınırlı üreticiler",
    steps: [
      "İlk temas sonrası takip sürecinin yürütülmesi",
      "Toplantı ve RFQ taleplerinin koordine edilmesi",
      "Numune ve teklif sürecinin yönetilmesi",
      "Pipeline durumunun düzenli olarak raporlanması",
    ],
    requiredInfo: "Doğrulanmış alıcı adayları, ürün teklif altyapısı",
    output: "Düzenli pipeline raporlaması",
    limits: "Satış garantisi verilmez; nihai fiyat ve sözleşme kararı sizindir.",
    ctaLabel: "Süreci Birlikte Değerlendirelim",
    ctaHref: "/iletisim",
  },
  {
    name: "Export Sales Representation",
    trName: "Ticari Temsilcilik",
    audience:
      "Alıcı ilişkileri olgunlaşmış, yurt dışında sürekli ve yetkili bir ticari uzantı isteyen üreticiler",
    steps: [
      "Temsil edilecek ürün/ürün grupları ve hedef ülke/bölgenin tanımlanması",
      "Münhasırlık, fiyat/teklif/müzakere sınırlarının belirlenmesi",
      "Komisyon oranı, müşteri koruma ve yetki kapsamının yazılı sözleşmeye bağlanması",
      "Sözleşme kapsamında yurtdışı satış temsilciliğinin yürütülmesi",
    ],
    requiredInfo:
      "Temsil edilecek ürün/ürün grupları, hedef ülke/bölge, münhasırlık tercihi",
    output: "Yazılı temsilcilik sözleşmesi ve tanımlı yetki kapsamı",
    limits:
      "Sistemde varsayılan olarak pasiftir; yalnızca yazılı sözleşme ile aktifleşir. Yazılı yetki olmadan temsilcilik iddiası kullanılmaz.",
    ctaLabel: "Temsilcilik Görüşmesi Talep Edin",
    ctaHref: "/iletisim",
  },
];

// İkincil hizmet — Anayasa v2.0 §12 (Satınalma ve Türkiye'den Tedarik).
// Önceden "Stratejik Satınalma" (kapsam belirleme) ve "Türkiye'den
// Tedarik" (yürütme) iki ayrı kart olarak anlatılıyordu; ikisi de aynı
// müşteri profiline hitap ediyordu ve fiilen tek bir sürecin ardışık
// aşamalarıydı (önce kapsam/strateji netleşir, sonra tedarikçi araştırma
// ve RFQ süreci yürütülür) — iki alternatif hizmetmiş gibi görünmeleri
// kafa karıştırıcıydı, bu yüzden tek kartta birleştirildi (bkz.
// decisions/decision-log.md — DEC-2026-0008).
const sourcingServices: ServiceDetail[] = [
  {
    name: "Strategic Sourcing / Sourcing from Turkey",
    trName: "Stratejik Satınalma ve Türkiye'den Tedarik",
    audience:
      "Türkiye'den düzenli veya proje bazlı tedarik ihtiyacı olan yabancı alıcılar ve yerli işletmeler",
    steps: [
      "İhtiyacın, tedarik stratejisinin (tek seferlik veya düzenli) ve kategori kapsamının netleştirilmesi",
      "Üretici/tedarikçi araştırması ve teknik-ticari ön yeterlilik",
      "RFQ hazırlama ve teklif toplama",
      "Teklif karşılaştırma — fiyat, vade, termin, nakliye",
      "Numune ve kalite koordinasyonu",
      "Müşteri onayıyla sipariş koordinasyonu ve teslimat takibi",
    ],
    requiredInfo:
      "Ürün/hizmet ihtiyacı, teknik özellik, miktar, hedef fiyat, teslimat noktası",
    output:
      "Tedarik stratejisi özeti, karşılaştırma raporu, numune/kalite kaydı, sipariş ve teslimat takip kaydı",
    limits:
      "Nihai tedarikçi seçimi ve sipariş kararı müşteriye aittir; yazılı onay olmadan sipariş verilmez.",
    ctaLabel: "Tedarik İhtiyacınızı Değerlendirelim",
    ctaHref: "/iletisim",
  },
];

const hizmetlerFaqItems = [
  {
    question: "İhracat satış geliştirme ile Türkiye'den tedarik hizmeti arasındaki fark nedir?",
    answer:
      "İhracat satış geliştirme, Türk üreticiler için yabancı alıcı bulma ve satış sürecini yönetmedir — birincil hizmetimizdir. Türkiye'den tedarik ise yabancı alıcılar veya yerli müşteriler için üretici bulma ve satınalma sürecini koordine etmemizdir — ikinci ana yetkinliğimizdir.",
  },
  {
    question: "Tek seferlik bir tedarik ihtiyacım var, düzenli hizmet almak zorunda mıyım?",
    answer:
      "Hayır. Tek seferlik veya proje bazlı tedarik ihtiyaçları, düzenli çalışma kapsamı dışında ayrıca değerlendirilir (bkz. Özel Proje).",
  },
  {
    question: "Sourcing from Turkey süreci ne kadar sürer?",
    answer:
      "Kapsam ve tedarikçi araştırmasının karmaşıklığına göre değişir; ilk RFQ genellikle birkaç iş günü içinde karşılaştırmaya hazır hale gelir.",
  },
  {
    question: "Adil kullanım kapsamı nasıl belirlenir?",
    answer:
      "Beklenen RFQ hacmi ve kategori sayısı, çalışmaya başlarken birlikte tanımlanır; ihtiyaç değiştikçe kapsam yeniden gözden geçirilir.",
  },
];

function ServiceCard({ service, delay }: { service: ServiceDetail; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8 shadow-sm">
        <span className="h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-navy/40">
          {service.name}
        </p>
        <h3 className="mt-1 font-serif text-xl text-navy">{service.trName}</h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/40">
          Kimler için
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {service.audience}
        </p>
        <div className="mt-6 border-t border-navy/10 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
            Süreç
          </p>
          <ol className="mt-2 space-y-2">
            {service.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="shrink-0 font-mono text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
            Gerekli bilgi
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {service.requiredInfo}
          </p>
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
            Çıktı
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {service.output}
          </p>
        </div>
        <p className="mt-6 text-xs font-semibold text-gold">{service.limits}</p>
        <div className="mt-8 border-t border-navy/10 pt-6">
          <TrackedCta
            href={service.ctaHref}
            label={`hizmet_${service.name.toLowerCase().replace(/\s+/g, "_")}`}
            location="hizmetler_service_card"
            className="btn-primary w-full justify-center sm:w-auto"
          >
            {service.ctaLabel}
          </TrackedCta>
        </div>
      </div>
    </Reveal>
  );
}

export default function HizmetlerPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
    ],
  };

  const servicesJsonLd = [...exportServices, ...sourcingServices].map(
    (service) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.name,
      name: service.trName,
      description: `${service.audience} ${service.steps.join(" ")}`,
      provider: { "@type": "Organization", name: "Teminor", url: SITE_URL },
      areaServed: "TR",
    })
  );

  return (
    <>
      <PageViewTracker type="service" serviceName="Hizmetler" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-ink to-navy py-24 text-white md:py-28">
        <div className="container-content relative grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Hizmetler</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              İhracat Uygunluk Analizinden Ticari Temsilciliğe
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Türk üreticiler için ihracat satış geliştirme, yabancı alıcı
              geliştirme ve ticari temsilcilik; yabancı alıcılar için
              Türkiye&apos;den tedarik ve stratejik satınalma.
            </p>
            <TrackedCta
              href="/iletisim"
              label="hizmetler_hero_urununuzu_degerlendirelim"
              location="hizmetler_hero"
              className="btn-primary mt-8 inline-block bg-gold hover:bg-[#8a6b2d]"
            >
              Ürününüzü Değerlendirelim
            </TrackedCta>
            <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.15em] text-white/45">
              Satış garantisi yok · Yazılı yetki olmadan temsilcilik iddiası
              yok · Gizli komisyon yok
            </p>
          </Reveal>
          <Reveal delay={0.15} className="hidden justify-self-center lg:block">
            <TradeNetworkIllustration className="h-64 w-full max-w-sm" />
          </Reveal>
        </div>
      </section>

      {/* Birincil hizmetler — ihracat satış geliştirme */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Birincil Hizmet</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              İhracat Satış Geliştirme Hizmetlerimiz
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Her hizmet tek ürün grubu ve net hedef segmentle sınırlandırılır;
              amaç doğrulanmış ticari ilgi geliştirmektir, satış garantisi
              değil.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {exportServices.map((service, i) => (
              <ServiceCard key={service.name} service={service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* İkincil hizmet — Stratejik Satınalma / Sourcing from Turkey */}
      <section className="bg-white py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">İkincil Hizmet</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              Stratejik Satınalma ve Türkiye&apos;den Tedarik
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Yabancı alıcılar ve yerli işletmeler için Türkiye&apos;den
              üretici bulma, teklif toplama, karşılaştırma ve tedarik
              sürecini koordine ediyoruz — Teminor&apos;un ikinci ana
              yetkinliği. Aşağıda hangi işi fiilen yaptığımızı ve hangi
              adımlardan geçtiğimizi anlatıyoruz; bir fiyat/paket
              karşılaştırması değildir.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-2xl">
            {sourcingServices.map((service, i) => (
              <ServiceCard key={service.name} service={service} delay={i * 0.08} />
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-12 text-center text-sm text-muted">
              Dış kaynaklı satın alma modelinin nasıl işlediğini merak
              ediyorsanız{" "}
              <Link
                href="/blog/dis-kaynak-satin-alma-departmani-nedir"
                className="link-draw font-semibold text-navy decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Dış Kaynak Satın Alma Departmanı Nedir?
              </Link>{" "}
              yazımızı, hizmetin tüm ayrıntıları için{" "}
              <Link
                href="/dis-satinalma-hizmeti"
                className="link-draw font-semibold text-navy decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Dış Satınalma Hizmeti
              </Link>{" "}
              sayfamızı inceleyebilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Özel Proje ve Tek Seferlik Tedarikçi Araştırması — ana hizmet
          anlatımının dışında tutulur. */}
      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-sm border border-navy/10 bg-white p-10 text-center shadow-sm">
              <p className="eyebrow">Özel Proje</p>
              <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
                Özel Proje ve Tek Seferlik Tedarikçi Araştırması
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Düzenli hizmet kapsamı dışında kalan, zor bulunan ürün, teknik
                tedarikçi, özel üretim veya tek seferlik kaynak araştırma
                ihtiyaçları proje bazında ayrıca değerlendirilir.
              </p>
              <TrackedCta
                href="/iletisim"
                label="hizmetler_ozel_proje"
                location="hizmetler_ozel_proje"
                className="btn-primary mt-6 inline-block"
              >
                Projenizi Değerlendirelim
              </TrackedCta>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={hizmetlerFaqItems}
        heading="Sıkça Sorulan Sorular"
        className="bg-white"
      />

      <FinalCta
        heading="Hangi Hizmetin Size Uygun Olduğunu Birlikte Belirleyelim"
        ctaLabel="Görüşme Talep Edin"
        ctaTrackingLabel="hizmetler_final_cta_gorusme"
        location="hizmetler_bottom"
      />
    </>
  );
}

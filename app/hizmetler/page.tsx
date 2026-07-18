import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import FAQSection from "@/components/FAQSection";
import FinalCta from "@/components/FinalCta";
import PackageInteractive from "@/components/hizmetler/PackageInteractive";
import { SITE_URL } from "@/lib/site";

const description =
  "İhracat uygunluk analizi, yabancı alıcı geliştirme, ihracat satış geliştirme ve ticari temsilcilik hizmetlerimiz. Türkiye'den tedarik ve stratejik satınalma ikinci ana yetkinliğimizdir.";

export const metadata: Metadata = {
  title: "Teminor Hizmetleri | İhracat Satış Geliştirme ve Ticari Temsilcilik",
  description,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Teminor Hizmetleri — Üretimden Küresel Talebe",
    description:
      "İhracat uygunluk analizinden ticari temsilciliğe; Türkiye'den tedarikten stratejik satınalmaya kadar hizmetlerimiz.",
    url: `${SITE_URL}/hizmetler`,
    type: "website",
  },
};

// Birincil hizmetler — Anayasa v2.0 §6 (Ana İş Modeli) aşama 1-4.
const exportServices = [
  {
    name: "Export Readiness Assessment",
    trName: "İhracat Uygunluk Analizi",
    audience:
      "İhracata yeni başlayan veya ihracat sürecini sistemli hale getirmek isteyen Türk üreticiler",
    scope:
      "Ürününüzün, üretim kapasitenizin ve teklif altyapınızın dış satışa hazır olup olmadığını; kapasite, MOQ, teslim süresi, sertifika ve İngilizce dokümantasyon açısından değerlendiririz.",
    requiredInfo:
      "Ürün grubu, HS/GTİP, kapasite, sertifikalar, mevcut ihracat deneyiminiz",
    output:
      "Uygunluk değerlendirme raporu — hazır olduğunuz ve geliştirilmesi gereken alanlar",
    limits: "Satış garantisi verilmez; yalnızca mevcut durumun değerlendirmesi sunulur.",
    ctaLabel: "Ürününüzü Değerlendirelim",
    ctaHref: "/iletisim#uretici-basvurusu",
  },
  {
    name: "Export Buyer Development",
    trName: "Yabancı Alıcı Geliştirme",
    audience: "İhracata hazır, hedef pazarını netleştirmiş üreticiler",
    scope:
      "Uygun ithalatçı, distribütör, toptancı, OEM veya kurumsal alıcı adaylarını araştırır, karar vericileri doğrularız — Buyer Validation Sprint kapsamında.",
    requiredInfo: "Ürün grubu, hedef pazar, fiyat pozisyonu, numune kabiliyeti",
    output: "Doğrulanmış hedef şirket/karar verici listesi ve ticari sinyal raporu",
    limits: "Liste satışı değildir; alıcı garantisi verilmez.",
    ctaLabel: "Buyer Validation Sprint'i Değerlendirelim",
    ctaHref: "/iletisim#uretici-basvurusu",
  },
  {
    name: "Export Sales Development",
    trName: "İhracat Satış Geliştirme",
    audience:
      "Doğrulanmış alıcı adayları olan, satış sürecini yönetecek iç kapasitesi sınırlı üreticiler",
    scope:
      "İlk temas, takip, toplantı, RFQ, numune ve teklif sürecini sizinle birlikte yönetiriz — Aylık İhracat Satış Masası modeliyle sürekli yürütülür.",
    requiredInfo: "Doğrulanmış alıcı adayları, ürün teklif altyapısı",
    output: "Düzenli pipeline raporlaması",
    limits: "Satış garantisi verilmez; nihai fiyat ve sözleşme kararı sizindir.",
    ctaLabel: "Süreci Birlikte Değerlendirelim",
    ctaHref: "/iletisim#uretici-basvurusu",
  },
  {
    name: "Export Sales Representation",
    trName: "Ticari Temsilcilik",
    audience:
      "Alıcı ilişkileri olgunlaşmış, yurt dışında sürekli ve yetkili bir ticari uzantı isteyen üreticiler",
    scope:
      "Yazılı sözleşmeyle tanımlanan ürün, pazar ve yetki kapsamında yurtdışı satış temsilciliği yürütürüz — komisyon, müşteri koruma ve yetki sınırları sözleşmede tanımlanır.",
    requiredInfo:
      "Temsil edilecek ürün/ürün grupları, hedef ülke/bölge, münhasırlık tercihi",
    output: "Yazılı temsilcilik sözleşmesi ve tanımlı yetki kapsamı",
    limits:
      "Sistemde varsayılan olarak pasiftir; yalnızca yazılı sözleşme ile aktifleşir. Yazılı yetki olmadan temsilcilik iddiası kullanılmaz.",
    ctaLabel: "Temsilcilik Görüşmesi Talep Edin",
    ctaHref: "/iletisim",
  },
] as const;

// İkincil hizmetler — Anayasa v2.0 §6 aşama 5 (Stratejik Satınalma ve
// Türkiye'den Tedarik). v1.0 döneminde kurulan 4 paket yapısı burada
// korunur, yalnızca hedef kitle "yabancı alıcı + yerli müşteri" olarak
// genişletilmiştir (bkz. decisions/decision-log.md → DEC-2026-0002).
const tiers = [
  {
    name: "Satın Alma Pilot Çalışması",
    tagline: "Pilot",
    audience:
      "Dış kaynak satın alma modelini ilk kez test etmek isteyen işletmeler",
    benefit: "Düşük riskle, gerçek bir talep üzerinden süreci deneyimlersiniz.",
    scope:
      "30 gün süresinde 2 kategori ve toplam 3 RFQ; RFQ başına en fazla 5 kalem ve en fazla 3 tedarikçi adayı araştırması; teklif toplama, karşılaştırma raporu, onay sonrası sipariş koordinasyonu, pilot sonu değerlendirme raporu.",
    control:
      "Kategori ve kapsamı siz belirlersiniz; sipariş yalnızca yazılı onayınızla verilir.",
    trust: "Yazılı onaysız sipariş yok · Gizli komisyon yok",
    ctaLabel: "Pilot Çalışmayı Değerlendirelim",
  },
  {
    name: "Temel Satın Alma Desteği",
    tagline: "Başlangıç",
    audience: "Ayda sınırlı fakat düzenli talebi olan 20–49 çalışanlı işletmeler",
    benefit: "Tam zamanlı personel almadan düzenli satın alma yükünü devredersiniz.",
    scope:
      "Belirlenen kategori(ler)de aylık RFQ takibi, tedarikçi araştırması, teklif toplama ve karşılaştırma.",
    control: "Aylık kapsam ve kategori sınırları birlikte belirlenir; onay süreci değişmez.",
    trust: "Adil kullanım kapsamı net tanımlanır",
    ctaLabel: "Kapsamı Birlikte Netleştirelim",
  },
  {
    name: "Esnek Satın Alma Kapasitesi",
    tagline: "Operasyon",
    audience:
      "Satın alma sorumlusu olan fakat dönemsel yoğunluk yaşayan 50–99 çalışanlı işletmeler",
    benefit: "Ekibinizin kapasitesini artırırsınız; yoğun dönemlerde kategori bazlı destek alırsınız.",
    scope: "Değişken RFQ hacmine uygun esnek destek, tedarikçi araştırması ve karşılaştırma desteği.",
    control: "Hangi kategorilerde destek alınacağı ekibinizle birlikte belirlenir.",
    trust: "Ekibinizin uzantısı gibi çalışırız",
    ctaLabel: "Esnek Kapasiteyi İnceleyin",
  },
  {
    name: "Dış Kaynak Satın Alma Departmanı",
    tagline: "Departman",
    audience: "Düzenli ve çok kategorili alımı olan 100–250 çalışanlı işletmeler",
    benefit: "Çok kategorili satın alma yükünü sistematik ve izlenebilir biçimde yönetirsiniz.",
    scope: "Çoklu kategori RFQ yönetimi, tedarikçi hafızası, düzenli karşılaştırma ve sipariş takibi.",
    control: "Nihai tedarikçi seçimi ve onay yetkisi tamamen sizde kalır.",
    trust: "Her aşama kayıt altındadır",
    ctaLabel: "Departman Modelini Görüşelim",
  },
] as const;

const hizmetlerFaqItems = [
  {
    question: "İhracat satış geliştirme ile Türkiye'den tedarik hizmeti arasındaki fark nedir?",
    answer:
      "İhracat satış geliştirme, Türk üreticiler için yabancı alıcı bulma ve satış sürecini yönetmedir — birincil hizmetimizdir. Türkiye'den tedarik ise yabancı alıcılar veya yerli müşteriler için üretici bulma ve satınalma sürecini koordine etmemizdir — ikinci ana yetkinliğimizdir.",
  },
  {
    question: "Paketler arasında geçiş yapabilir miyiz?",
    answer:
      "Evet, ihtiyacınız değiştikçe paket kapsamı birlikte güncellenebilir.",
  },
  {
    question: "Adil kullanım ne anlama gelir?",
    answer:
      "Aylık RFQ sayısı paket kapsamında tanımlanır; aşım durumunda kapsam birlikte gözden geçirilir.",
  },
  {
    question: "Paket önerisi nasıl hesaplanır?",
    answer:
      "Çalışan sayısı, RFQ hacmi, kategori sayısı, mevcut ekip kapasitesi ve teknik karmaşıklık birlikte değerlendirilerek yaklaşık bir öneri sunulur; kesin kapsam görüşme sonrası netleşir.",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <PageViewTracker type="service" serviceName="Hizmetler" />
      <section className="relative overflow-hidden bg-gradient-to-br from-ink to-navy py-24 text-white md:py-28">
        <div className="container-content relative">
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
              href="/iletisim#uretici-basvurusu"
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
              <Reveal key={service.name} delay={i * 0.08}>
                <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8 shadow-sm">
                  <span className="h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-navy/40">
                    {service.name}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-navy">
                    {service.trName}
                  </h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/40">
                    Kimler için
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {service.audience}
                  </p>
                  <div className="mt-6 border-t border-navy/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
                      Kapsam
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {service.scope}
                    </p>
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
                  <p className="mt-6 text-xs font-semibold text-gold">
                    {service.limits}
                  </p>
                  <div className="mt-8 border-t border-navy/10 pt-6">
                    <TrackedCta
                      href={service.ctaHref}
                      label={`hizmet_${service.name.toLowerCase().replace(/\s+/g, "_")}`}
                      location="hizmetler_export_card"
                      className="btn-primary w-full justify-center sm:w-auto"
                    >
                      {service.ctaLabel}
                    </TrackedCta>
                  </div>
                </div>
              </Reveal>
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
              Stratejik Satınalma ve Sourcing from Turkey
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Yabancı alıcılar ve yerli işletmeler için Türkiye&apos;den
              üretici bulma, teklif toplama, karşılaştırma ve tedarik
              sürecini koordine ediyoruz — Teminor&apos;un ikinci ana
              yetkinliği. Her paket aynı onay disiplinini paylaşır; aradaki
              fark kapsam, RFQ hacmi ve sağlanan destek düzeyidir.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-light-bg p-8 shadow-sm">
                  <span className="h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-xl text-navy">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/40">
                    Kimler için
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tier.audience}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-navy/90">
                    {tier.benefit}
                  </p>
                  <div className="mt-6 border-t border-navy/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
                      Kapsam
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {tier.scope}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
                      Müşteri kontrolü
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {tier.control}
                    </p>
                  </div>
                  <p className="mt-6 text-xs font-semibold text-gold">
                    {tier.trust}
                  </p>
                  <div className="mt-8 border-t border-navy/10 pt-6">
                    <TrackedCta
                      href="/iletisim#alici-talebi"
                      label={`hizmet_teklif_${tier.tagline.toLowerCase()}`}
                      location="hizmetler_tier_card"
                      className="btn-primary w-full justify-center sm:w-auto"
                    >
                      {tier.ctaLabel}
                    </TrackedCta>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="container-content">
          <Reveal delay={0.4}>
            <p className="mt-12 text-center text-sm text-muted">
              Dış kaynaklı satın alma modelinin nasıl işlediğini merak
              ediyorsanız{" "}
              <Link
                href="/blog/dis-kaynak-satin-alma-departmani-nedir"
                className="link-draw font-semibold text-navy decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Dış Kaynak Satın Alma Departmanı Nedir?
              </Link>{" "}
              yazımızı inceleyebilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-24">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Karşılaştırma</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-navy md:text-4xl">
              Paketleri Karşılaştırın, Size Uygun Olanı Bulun
            </h2>
          </Reveal>
          <div className="mt-12">
            <PackageInteractive />
          </div>
        </div>
      </section>

      {/* Özel Proje ve Tek Seferlik Tedarikçi Araştırması — ana paket
          karşılaştırmasının ve paket bulucunun dışında tutulur. */}
      <section className="bg-white py-24">
        <div className="container-content">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-sm border border-navy/10 bg-light-bg p-10 text-center shadow-sm">
              <p className="eyebrow">Özel Proje</p>
              <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
                Özel Proje ve Tek Seferlik Tedarikçi Araştırması
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Düzenli hizmet paketi dışında kalan, zor bulunan ürün, teknik
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
        heading="Hangi Modelin Size Uygun Olduğunu Birlikte Belirleyelim"
        ctaLabel="Görüşme Talep Edin"
        ctaTrackingLabel="hizmetler_final_cta_gorusme"
        location="hizmetler_bottom"
      />
    </>
  );
}

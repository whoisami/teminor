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
  "İşletmenizin büyüklüğüne uygun satın alma dış kaynak modelini seçin: pilot çalışmadan tam kapsamlı departman desteğine kadar. Kontrol ve onay yetkisi sizde kalır.";

export const metadata: Metadata = {
  title: "Teminor Hizmet Paketleri | Pilot, Başlangıç, Operasyon ve Departman Modeli",
  description,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Teminor Hizmet Paketleri — Kontrol Sizde Kalır",
    description:
      "Pilot çalışmadan dış kaynak satın alma departmanına kadar, büyüklüğünüze uygun modeli seçin.",
    url: `${SITE_URL}/hizmetler`,
    type: "website",
  },
};

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
      <section className="bg-navy py-24 text-white">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Hizmetler</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              İhtiyacınıza Göre Esnek Satın Alma Kapasitesi
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Şirketinizin büyüklüğüne ve RFQ yoğunluğuna uygun çalışma
              modelini seçin; kontrol her modelde sizde kalır.
            </p>
            <TrackedCta
              href="/iletisim"
              label="hizmetler_hero_modelinizi_secelim"
              location="hizmetler_hero"
              className="btn-primary mt-8 inline-block bg-gold hover:bg-[#8a6b2d]"
            >
              Modelinizi Birlikte Seçelim
            </TrackedCta>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="container-content">
          <Reveal>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              Hizmet Paketlerimiz
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div className="card-interactive flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8">
                  <p className="eyebrow">
                    {tier.name}{" "}
                    <span className="text-navy/40">
                      (Sözleşme paket adı: {tier.tagline})
                    </span>
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Kimler için
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tier.audience}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy/90">
                    {tier.benefit}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Kapsam
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tier.scope}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/50">
                    Müşteri kontrolü
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {tier.control}
                  </p>
                  <p className="mt-5 text-xs font-semibold text-gold">
                    {tier.trust}
                  </p>
                  <TrackedCta
                    href="/iletisim"
                    label={`hizmet_teklif_${tier.tagline.toLowerCase()}`}
                    location="hizmetler_tier_card"
                    className="btn-primary mt-6 self-start"
                  >
                    {tier.ctaLabel}
                  </TrackedCta>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="container-content">
          <Reveal delay={0.4}>
            <p className="mt-10 text-center text-sm text-muted">
              Dış kaynaklı satın alma modelinin nasıl işlediğini merak
              ediyorsanız{" "}
              <Link
                href="/blog/dis-kaynak-satin-alma-departmani-nedir"
                className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Dış Kaynak Satın Alma Departmanı Nedir?
              </Link>{" "}
              yazımızı inceleyebilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-content">
          <PackageInteractive />
        </div>
      </section>

      {/* Özel Proje ve Tek Seferlik Tedarikçi Araştırması — ana paket
          karşılaştırmasının ve paket bulucunun dışında tutulur. */}
      <section className="bg-light-bg py-20">
        <div className="container-content max-w-2xl">
          <Reveal>
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

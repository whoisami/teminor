import { Boxes, FileText, HardHat, Package, SprayCan } from "lucide-react";
import Reveal from "@/components/Reveal";

const categories = [
  {
    icon: Package,
    title: "Ambalaj ve Tek Kullanımlık",
    examples: "yemek kabı, streç, folyo, koli, poşet, bant",
    seoLine: "Ambalaj ve tek kullanımlık ürün kategorisinde tedarikçi araştırması ve karşılaştırmalı teklif desteği sağlıyoruz.",
  },
  {
    icon: SprayCan,
    title: "Temizlik ve Hijyen",
    examples: "kimyasallar, çöp torbası, eldiven, dezenfektan",
    seoLine: "Temizlik ve hijyen ürünlerinde çoklu tedarikçi karşılaştırmasıyla maliyet avantajı sağlıyoruz.",
  },
  {
    icon: FileText,
    title: "Kâğıt Ürünleri",
    examples: "havlu, peçete, tuvalet kağıdı",
    seoLine: "Kâğıt ürünleri kategorisinde kalite ve gramaj standardizasyonuyla tedarikçi karşılaştırması yapıyoruz.",
  },
  {
    icon: HardHat,
    title: "İş Güvenliği ve Kıyafet (İSG)",
    examples: "eldiven, maske, iş kıyafeti, ayakkabı",
    seoLine: "İş güvenliği ve kıyafet (İSG) tedarikinde güvenilirliği doğrulanmış tedarikçi ağımızla çalışıyoruz.",
  },
  {
    icon: Boxes,
    title: "Genel İşletme Sarfları",
    examples: "ofis, depo, bakım ve araç sarfları",
    seoLine: "Ofis, depo ve araç sarfları dahil genel işletme sarfları kategorisinde Türkiye genelinde tedarik desteği veriyoruz.",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Kategoriler</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Odaklandığımız Kategoriler
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-5">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-sm border border-navy/10 bg-light-bg p-6">
                  <Icon
                    className="h-8 w-8 text-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-serif text-base text-navy">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    ({category.examples})
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {category.seoLine}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

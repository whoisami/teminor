import { Factory, FlaskConical, Wheat, Wrench, Building2, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

// Distinct axis from CategoryGrid: CategoryGrid lists the product/service
// categories Teminor buys on the customer's behalf; this lists the company
// profiles (sectors) Teminor's sales focus targets. See docs/strategy/
// 01-master-strategy.md §2 and docs/seo/keyword-clusters.md for why the two
// axes are kept separate rather than merged into one grid.
const sectors = [
  {
    icon: Factory,
    title: "Makine / Metal / Endüstriyel Üretim",
    description:
      "Yedek parça, sarf malzeme, fason imalat ve teknik tedarikçi ihtiyaçlarınızda tedarikçi araştırma ve teklif toplama sürecini üstleniyoruz.",
  },
  {
    icon: FlaskConical,
    title: "Ambalaj / Plastik / Kimya Yan Sanayi",
    description:
      "Hammadde, ambalaj, baskı ve kalıp tedarikinde düzenli teklif karşılaştırması sağlıyoruz.",
  },
  {
    icon: Wheat,
    title: "Gıda Üretimi",
    description:
      "Ambalaj, bakım, sarf ve hijyen kategorilerinde tedarikçi evrak kontrolü dahil destek alın.",
  },
  {
    icon: Wrench,
    title: "Teknik Servis / Bakım Şirketleri",
    description:
      "Acil parça ihtiyacında farklı lokasyonlardan tedarikçi araştırma desteği alın.",
  },
  {
    icon: Building2,
    title: "İnşaat Yan Sanayi / Proje Firmaları",
    description:
      "Proje bazlı fiyat, termin ve çoklu tedarikçi koordinasyonunu tek noktadan yönetin.",
  },
  {
    icon: Truck,
    title: "Distribütör / Toptancı",
    description:
      "Operasyonel sarf ve hizmet alımlarınızda dolaylı satın alma yükünüzü azaltın.",
  },
];

export default function SectorGrid() {
  return (
    <section className="bg-light-bg py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Kimler İçin Uygun</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Öncelikli Sektörler
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.title} delay={i * 0.06}>
                <div className="card-interactive group flex h-full flex-col rounded-sm border border-navy/10 bg-white p-6">
                  <Icon
                    className="h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="link-draw mt-4 self-start font-serif text-base text-navy">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {sector.description}
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

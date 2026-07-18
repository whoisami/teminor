import { Building2, SprayCan, Truck, Utensils } from "lucide-react";
import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";

// Sektör/müşteri profili ekseni — /dis-satinalma-hizmeti sayfasındaki örnek
// senaryolarla (Catering, Temizlik/Tesis Yönetimi, Otel/Restoran) ve gövde
// metnindeki "filo/saha hizmeti" ifadesiyle tutarlı tutulur. Kategori
// bilgisi (ambalaj, temizlik, kağıt, İSG, genel sarf) burada her sektörün
// tipik ihtiyacını anlatan destekleyici detay olarak kullanılır, başlık
// olarak değil (bkz. decisions/decision-log.md — bu bölüm önceden "ürün
// kategorisi" ekseniyle kurulmuştu, sektör ekseniyle değiştirildi).
const sectors = [
  {
    icon: Utensils,
    title: "Catering / Toplu Yemek",
    description:
      "Ambalaj ve tek kullanımlık ürün, kâğıt ürünleri ve hijyen sarflarında karşılaştırmalı teklif ile birim maliyetlerinizi netleştiriyoruz.",
  },
  {
    icon: SprayCan,
    title: "Temizlik / Tesis Yönetimi",
    description:
      "Temizlik kimyasalları, İSG ekipmanı ve sarf malzemesinde çoklu tedarikçi karşılaştırmasıyla konsantrasyon ve kullanım maliyeti analizi yapıyoruz.",
  },
  {
    icon: Building2,
    title: "Otel / Restoran",
    description:
      "Kâğıt ürünleri, ambalaj ve genel işletme sarflarında kalite/gramaj standardizasyonuyla tedarikçi karşılaştırması sağlıyoruz.",
  },
  {
    icon: Truck,
    title: "Filo / Saha Hizmeti",
    description:
      "Genel işletme sarfları, İSG ve bakım kalemlerinde, birden fazla lokasyonu tek noktadan koordine ederek Türkiye genelinde tedarik desteği veriyoruz.",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">Sektörler</p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            Odaklandığımız Sektörler
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.title} delay={i * 0.06}>
                <div className="card-interactive group flex h-full flex-col rounded-sm border border-navy/10 bg-light-bg p-6">
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

        <Reveal delay={sectors.length * 0.06 + 0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Yukarıdaki sektörler şu an en yoğun çalıştığımız alanlar. Farklı
            bir sektörden geliyorsanız da, satın alma ihtiyacınızı
            değerlendirmekten memnuniyet duyarız —{" "}
            <TrackedCta
              href="/iletisim"
              label="sektor_disi_iletisim"
              location="home_category_grid"
              className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              bize ulaşın, birlikte konuşalım
            </TrackedCta>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

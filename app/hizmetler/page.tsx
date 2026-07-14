import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { DEFAULT_WHATSAPP_MESSAGE, SITE_URL, whatsappLink } from "@/lib/site";

const description =
  "Teminor'un satın alma hizmet paketlerini inceleyin: talep hacminize uygun Başlangıç, Aktif, Yoğun/Kurumsal modelleri veya proje bazlı tedarik desteğini seçin.";

export const metadata: Metadata = {
  title: "Hizmetler",
  description,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Hizmetler | Teminor Satın Alma Paketleri",
    description,
    url: `${SITE_URL}/hizmetler`,
    type: "website",
  },
};

const tiers = [
  {
    name: "Hizmet 1",
    tagline: "Başlangıç",
    description: "Ayda 1-2 satın alma talebi olan işletmeler için.",
    items: ["Sınırlı RFQ kotası", "Ortak havuz kaynak", "Standart yanıt süresi"],
  },
  {
    name: "Hizmet 2",
    tagline: "Aktif",
    description: "Düzenli/sık talep gönderen işletmeler için.",
    items: [
      "Genişletilmiş RFQ kotası",
      "Öncelikli sıra",
      "Hızlandırılmış yanıt süresi",
    ],
  },
  {
    name: "Hizmet 3",
    tagline: "Yoğun/Kurumsal",
    description:
      "Yüksek hacimli, çok kalemli, sürekli tedarik ihtiyacı olanlar için.",
    items: [
      "Yüksek RFQ kotası",
      "Sabit atanmış uzman + yedek",
      "En hızlı yanıt süresi",
    ],
  },
  {
    name: "Hizmet 4",
    tagline: "Proje Bazlı",
    description:
      "Tekil, büyük ölçekli tedarik ihtiyaçları için (tesis kurulumu, toplu ekipman alımı vb.)",
    items: ["Kapsam netleştikten sonra ayrı teklif ile fiyatlandırılır."],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white">
        <div className="container-content">
          <Reveal>
            <p className="eyebrow">Hizmetler</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">
              İhtiyacınıza göre kurulan satın alma hizmet paketleri.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Talep hacminize uygun modeli — Başlangıç&apos;tan
              Yoğun/Kurumsal&apos;a, proje bazlı tedarik desteğine kadar —
              birlikte belirleriz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="container-content grid gap-6 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8">
                <p className="eyebrow">{tier.name}</p>
                <h2 className="mt-2 font-serif text-2xl text-navy">
                  {tier.tagline}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-navy/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className="btn-primary mt-8 self-start">
                  Fiyat Teklifi İçin Bize Ulaşın
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-content flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              Hangi paketin size uygun olduğunu birlikte belirleyelim.
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

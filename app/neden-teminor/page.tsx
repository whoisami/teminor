import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { DEFAULT_WHATSAPP_MESSAGE, SITE_URL, whatsappLink } from "@/lib/site";

const description =
  "Teminor'un dış kaynaklı satın alma modelinin temel ilkeleri: ortaklık yaklaşımı, onay mekanizması, esnek operasyon modeli ve şeffaf ücretlendirme.";

export const metadata: Metadata = {
  title: "Neden Teminor",
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

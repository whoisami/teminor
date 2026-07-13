import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

// NOTE: This is a generic, placeholder KVKK/privacy notice. It has not been
// reviewed by legal counsel and must be replaced with Teminor's finalized
// privacy policy before relying on it for compliance purposes.

const description =
  "Teminor Gizlilik Politikası ve KVKK Aydınlatma Metni: kişisel verilerin işlenme amaçları, hukuki sebepleri ve haklarınız hakkında bilgi edinin.";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description,
  alternates: { canonical: "/gizlilik" },
  openGraph: {
    title: "Gizlilik Politikası | Teminor",
    description,
    url: `${SITE_URL}/gizlilik`,
    type: "website",
  },
};

export default function GizlilikPage() {
  return (
    <section className="py-24">
      <div className="container-content max-w-3xl">
        <Reveal>
          <p className="eyebrow">KVKK / Gizlilik</p>
          <h1 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
          <p className="mt-6 text-sm text-muted">
            Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) kapsamında genel bilgilendirme amacıyla
            hazırlanmış bir taslak metindir. Şirketimize özel, nihai
            aydınlatma metni hazırlanana kadar geçerli bir genel çerçeve
            sunar.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="font-serif text-xl text-navy">
                Veri Sorumlusu
              </h2>
              <p className="mt-2">
                Teminor olarak, internet sitemiz ve iletişim formu üzerinden
                bizimle paylaştığınız kişisel verileriniz, veri sorumlusu
                sıfatıyla tarafımızca işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">
                İşlenen Kişisel Veriler ve Amaçları
              </h2>
              <p className="mt-2">
                İletişim formu aracılığıyla ad soyad, şirket adı, e-posta,
                telefon numarası, sektör bilgisi ve talep açıklamanız gibi
                veriler; talebinizin değerlendirilmesi, tarafınıza dönüş
                yapılması ve hizmet süreçlerimizin yürütülmesi amacıyla
                işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">
                Hukuki Sebep
              </h2>
              <p className="mt-2">
                Kişisel verileriniz, KVKK madde 5 kapsamında açık rızanız
                veya bir sözleşmenin kurulması/ifasıyla doğrudan doğruya
                ilgili olması hukuki sebeplerine dayanılarak işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">
                Veri Aktarımı
              </h2>
              <p className="mt-2">
                Kişisel verileriniz, yasal zorunluluklar haricinde, açık
                rızanız olmaksızın üçüncü taraflarla paylaşılmaz. İletişim
                formu verileriniz, form gönderiminin işlenmesi amacıyla
                kullandığımız e-posta gönderim altyapısı üzerinden
                tarafımıza iletilir.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">
                Haklarınız
              </h2>
              <p className="mt-2">
                KVKK madde 11 kapsamında; kişisel verilerinizin işlenip
                işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep
                etme, işlenme amacını ve amacına uygun kullanılıp
                kullanılmadığını öğrenme, düzeltilmesini veya silinmesini
                talep etme haklarına sahipsiniz. Bu haklarınızı kullanmak
                için{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">
                Veri Saklama Süresi
              </h2>
              <p className="mt-2">
                Kişisel verileriniz, işleme amacının gerektirdiği süre
                boyunca ve yasal saklama yükümlülükleri çerçevesinde
                saklanır; bu sürenin sonunda silinir, yok edilir veya anonim
                hale getirilir.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

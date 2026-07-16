import Reveal from "@/components/Reveal";
import HeroTexture from "@/components/HeroTexture";
import ApprovalLedger from "@/components/ApprovalLedger";
import TrackedCta from "@/components/analytics/TrackedCta";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink to-navy text-white">
      <HeroTexture />
      <div className="container-content relative grid gap-16 py-28 md:py-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
          <Reveal>
            <p className="eyebrow">Doğru. Güvenli. Verimli.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Satın Alma İş Yükünü Biz Üstlenelim.{" "}
              <em className="text-gold">Siz Yalnızca Nihai Kararı Verin.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Tedarikçi araştırma, teklif toplama, karşılaştırma, müzakere ve
              sipariş takibini dış satın alma ekibiniz gibi yürütüyoruz.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              Yazılı onayınız olmadan sipariş verilmez; kontrol her aşamada
              sizde kalır.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TrackedCta
                href="/iletisim"
                label="hero_ilk_talebi_degerlendirelim"
                location="home_hero"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                İlk Talebinizi Değerlendirelim
              </TrackedCta>
              <TrackedCta
                href="#nasil-calisir"
                label="hero_nasil_calisir"
                location="home_hero"
                className="btn-primary bg-transparent border border-white/30 hover:bg-white/10"
              >
                Nasıl Çalıştığımızı Görün
              </TrackedCta>
            </div>
          </Reveal>
          <Reveal delay={0.38}>
            <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.15em] text-white/45">
              Yazılı onaysız sipariş yok · Şeffaf karşılaştırma · Gizli
              komisyon yok
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="flex justify-center lg:justify-end">
          <ApprovalLedger />
        </Reveal>
      </div>
    </section>
  );
}

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
            <p className="eyebrow">İhracat Satış Geliştirme Ortağınız</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Türk Üreticiler İçin{" "}
              <em className="text-gold">Uluslararası Satış Kanalları Kurarız.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Ürününüze uygun yabancı alıcıları buluruz, karar vericilere
              ulaşırız ve ihracat satış sürecini ilk temastan ticari
              görüşmeye kadar sizin için yönetiriz.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <TrackedCta
                href="/iletisim"
                label="hero_urununuzu_degerlendirelim"
                location="home_hero"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                Ürününüzü Değerlendirelim
              </TrackedCta>
            </div>
          </Reveal>
          <Reveal delay={0.38}>
            <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.15em] text-white/45">
              Satış garantisi yok · Yazılı yetki olmadan temsilcilik iddiası
              yok · Gizli komisyon yok
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

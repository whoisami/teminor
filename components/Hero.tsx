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
            <p className="eyebrow">Üretimden Küresel Talebe</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Ürününüz İçin Doğru Yabancı Alıcıyı Buluyor,{" "}
              <em className="text-gold">Satışı Ticari Görüşmeye Kadar Yönetiyoruz.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Teminor, Türk üreticilerin ürünleri için uygun yabancı alıcıları
              araştırır, karar vericilere ulaşır ve ihracat satış sürecini
              ticari görüşmeye kadar yönetir.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              Rapor veya liste satmayız; doğrulanmış ticari ilgi geliştiririz.
              Satış garantisi vermeyiz.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TrackedCta
                href="/iletisim#uretici-basvurusu"
                label="hero_urununuzu_degerlendirelim"
                location="home_hero"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                Ürününüzü Değerlendirelim
              </TrackedCta>
              <TrackedCta
                href="#nasil-calisir"
                label="hero_nasil_calisiyoruz"
                location="home_hero"
                className="btn-primary bg-transparent border border-white/30 hover:bg-white/10"
              >
                Nasıl Çalışıyoruz?
              </TrackedCta>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <TrackedCta
              href="/iletisim#alici-talebi"
              label="hero_turkiyeden_uretici_ariyorum"
              location="home_hero"
              className="mt-4 inline-block text-sm font-semibold text-white/70 underline decoration-white/30 decoration-2 underline-offset-4 hover:text-gold"
            >
              Yabancı bir alıcıysanız: Türkiye&apos;den Üretici Arıyorum →
            </TrackedCta>
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

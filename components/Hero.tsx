import Reveal from "@/components/Reveal";
import HeroTexture from "@/components/HeroTexture";
import ApprovalLedger from "@/components/ApprovalLedger";
import TrackedCta from "@/components/analytics/TrackedCta";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

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
              Satın alma departmanınız yoksa,{" "}
              <em className="text-gold">biz oluruz.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Tedarikçi bulmakla kalmayız — talebinizi alır, doğru fiyatı
              bulur, siparişi takip eder, size raporlarız.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              Departmanınız varsa da, yoğun dönemlerde veya belirli
              kategorilerde ek kapasite olarak yanınızdayız.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TrackedCta
                href="/iletisim"
                label="hero_gorusme_talep_et"
                location="home_hero"
                className="btn-primary bg-gold hover:bg-[#8a6b2d]"
              >
                Hemen Görüşelim
              </TrackedCta>
              <TrackedAnchor
                kind="whatsapp"
                location="home_hero"
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp&apos;tan Yaz
              </TrackedAnchor>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="flex justify-center lg:justify-end">
          <ApprovalLedger />
        </Reveal>
      </div>
    </section>
  );
}

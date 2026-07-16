import Reveal from "@/components/Reveal";
import TrackedCta from "@/components/analytics/TrackedCta";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

type FinalCtaProps = {
  heading: string;
  ctaLabel: string;
  location: string;
  ctaTrackingLabel: string;
  showWhatsapp?: boolean;
};

export default function FinalCta({
  heading,
  ctaLabel,
  location,
  ctaTrackingLabel,
  showWhatsapp = true,
}: FinalCtaProps) {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="container-content flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl">{heading}</h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedCta
              href="/iletisim"
              label={ctaTrackingLabel}
              location={location}
              className="btn-primary bg-gold hover:bg-[#8a6b2d]"
            >
              {ctaLabel}
            </TrackedCta>
            {showWhatsapp && (
              <TrackedAnchor
                kind="whatsapp"
                location={location}
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp&apos;tan Yaz
              </TrackedAnchor>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

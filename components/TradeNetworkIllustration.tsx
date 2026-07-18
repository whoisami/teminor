// Abstract, geometric illustration for the primary export-service hero
// sections — a node/line network with one verified node highlighted in
// gold. Deliberately not a literal photo or stock-photo cliché (no
// handshake, world map, or container/ship imagery — bkz. Anayasa v2.0
// "Marka ve Tasarım Yönergesi"): premium B2B, industrial, understated,
// pure inline SVG, consistent with HeroTexture.tsx's visual language.
export default function TradeNetworkIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="#F6F1E7" strokeOpacity="0.25" strokeWidth="1.5">
        <line x1="60" y1="80" x2="180" y2="150" />
        <line x1="180" y1="150" x2="320" y2="90" />
        <line x1="180" y1="150" x2="260" y2="230" />
        <line x1="60" y1="80" x2="90" y2="220" />
        <line x1="90" y1="220" x2="260" y2="230" />
        <line x1="320" y1="90" x2="260" y2="230" />
        <line x1="60" y1="80" x2="320" y2="90" />
      </g>
      <circle cx="60" cy="80" r="6" fill="#F6F1E7" fillOpacity="0.35" />
      <circle cx="320" cy="90" r="6" fill="#F6F1E7" fillOpacity="0.35" />
      <circle cx="90" cy="220" r="6" fill="#F6F1E7" fillOpacity="0.35" />
      <circle cx="260" cy="230" r="6" fill="#F6F1E7" fillOpacity="0.35" />
      <circle cx="180" cy="150" r="10" fill="#C9A227" />
      <circle
        cx="180"
        cy="150"
        r="18"
        stroke="#C9A227"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

// Subtle background treatment for the hero: a faint ruled-paper line
// pattern (evoking a ledger/manifest, not a generic dashboard grid) over
// an ink-to-navy gradient. Pure inline SVG, no external images.
export default function HeroTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="teminor-ruled"
          width="800"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="48" x2="800" y2="48" stroke="#F6F1E7" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#teminor-ruled)" />
      <line x1="120" y1="0" x2="120" y2="600" stroke="#C9A227" strokeWidth="1" />
    </svg>
  );
}

// Subtle animated geometric texture used behind the hero section.
// Pure inline SVG, low opacity, no external images.
export default function HeroTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="teminor-grid"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M80 0 L0 0 0 80"
            fill="none"
            stroke="#F7F7F5"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#teminor-grid)" />
      <circle cx="680" cy="120" r="180" fill="none" stroke="#9C7A34" strokeWidth="1" />
      <circle cx="90" cy="520" r="140" fill="none" stroke="#9C7A34" strokeWidth="1" />
      <line x1="0" y1="0" x2="800" y2="600" stroke="#F7F7F5" strokeWidth="1" />
    </svg>
  );
}

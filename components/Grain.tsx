export default function Grain() {
  return (
    <svg
      className="grain"
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="100%"
    >
      <filter id="grain-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#grain-filter)"
        opacity="0.025"
      />
    </svg>
  );
}

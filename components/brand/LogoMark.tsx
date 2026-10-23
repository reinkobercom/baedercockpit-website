/**
 * Bildmarke BäderCockpit – Logo-Idee 6 „Modul-Kacheln“.
 * Vier Kacheln = vier Module (Gäste, Personal, Technik, Gastronomie); eine Kachel trägt die Welle.
 *
 * LOGO TAUSCHEN: Nur diese Datei ersetzen. Logo, Favicon (app/icon.tsx),
 * Apple-Icon und OG-Bild beziehen die Marke ausschließlich von hier.
 */

export type LogoVariant = "color" | "negative" | "mono";

type Palette = { a: string; b: string; c: string; d: string; wave: string };

export const LOGO_PALETTES: Record<LogoVariant, Palette> = {
  color: { a: "#0B3A5B", b: "#1B8AA6", c: "#8FD3E3", d: "#1B8AA6", wave: "#FFFFFF" },
  negative: { a: "#FFFFFF", b: "#1B8AA6", c: "#8FD3E3", d: "#1B8AA6", wave: "#FFFFFF" },
  mono: { a: "currentColor", b: "currentColor", c: "currentColor", d: "currentColor", wave: "var(--logo-mono-wave, #fff)" },
};

/** Geometrie als Daten, damit dieselbe Marke auch im Favicon/OG-Bild (ohne React-DOM) gezeichnet werden kann. */
export const LOGO_GEOMETRY = {
  viewBox: 40,
  tile: 18,
  gap: 4,
  radius: 5,
  /** Wellenpfad in der Kachel unten rechts */
  wavePath: "M26.2 31.6c1.6-1.8 3.2-1.8 4.8 0s3.2 1.8 4.8 0",
  waveStroke: 2.2,
};

export function LogoMark({
  variant = "color",
  size = 32,
  className,
  title,
}: {
  variant?: LogoVariant;
  size?: number;
  className?: string;
  title?: string;
}) {
  const p = LOGO_PALETTES[variant];
  const { tile, gap, radius, wavePath, waveStroke, viewBox } = LOGO_GEOMETRY;
  const o = tile + gap;
  const monoOpacity = variant === "mono";
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect x="0" y="0" width={tile} height={tile} rx={radius} fill={p.a} />
      <rect x={o} y="0" width={tile} height={tile} rx={radius} fill={p.b} opacity={monoOpacity ? 0.75 : 1} />
      <rect x="0" y={o} width={tile} height={tile} rx={radius} fill={p.c} opacity={monoOpacity ? 0.5 : 1} />
      <rect x={o} y={o} width={tile} height={tile} rx={radius} fill={p.d} />
      <path d={wavePath} fill="none" stroke={p.wave} strokeWidth={waveStroke} strokeLinecap="round" />
    </svg>
  );
}

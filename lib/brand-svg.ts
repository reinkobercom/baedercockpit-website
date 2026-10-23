import { LOGO_GEOMETRY, LOGO_PALETTES, type LogoVariant } from "@/components/brand/LogoMark";

/**
 * Bildmarke als SVG-String – für Favicon, Apple-Icon und OG-Bild.
 * Liest dieselben Daten wie <LogoMark/>, damit ein Logo-Tausch überall greift.
 */
export function logoMarkSvg(variant: Exclude<LogoVariant, "mono"> = "color", size = 40) {
  const p = LOGO_PALETTES[variant];
  const { tile, gap, radius, wavePath, waveStroke, viewBox } = LOGO_GEOMETRY;
  const o = tile + gap;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${viewBox} ${viewBox}">
<rect x="0" y="0" width="${tile}" height="${tile}" rx="${radius}" fill="${p.a}"/>
<rect x="${o}" y="0" width="${tile}" height="${tile}" rx="${radius}" fill="${p.b}"/>
<rect x="0" y="${o}" width="${tile}" height="${tile}" rx="${radius}" fill="${p.c}"/>
<rect x="${o}" y="${o}" width="${tile}" height="${tile}" rx="${radius}" fill="${p.d}"/>
<path d="${wavePath}" fill="none" stroke="${p.wave}" stroke-width="${waveStroke}" stroke-linecap="round"/>
</svg>`;
}

export function svgDataUri(svg: string) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

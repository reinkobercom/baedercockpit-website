import { ImageResponse } from "next/og";
import { hero } from "@/content/hero";
import { logoMarkSvg, svgDataUri } from "@/lib/brand-svg";

export const alt = "BäderCockpit – Software für Schwimmbäder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0B3A5B 0%, #072A42 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={svgDataUri(logoMarkSvg("negative", 64))} width={64} height={64} alt="" />
          <div style={{ display: "flex", fontSize: 40 }}>
            <span>Bäder</span>
            <span style={{ fontWeight: 900 }}>Cockpit</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2 }}>{hero.titleStart}</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>{hero.titleMid}&nbsp;</span>
            <span style={{ color: "#8FD3E3" }}>{hero.titleAccent}</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,.75)" }}>
            Gäste-App · Trinkgeld · Dienstplan · Betriebstagebuch
          </div>
        </div>
      </div>
    ),
    size,
  );
}

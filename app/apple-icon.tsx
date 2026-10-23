import { ImageResponse } from "next/og";
import { logoMarkSvg, svgDataUri } from "@/lib/brand-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// App-Icon: Bildmarke (negativ) auf Navy
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B3A5B" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={svgDataUri(logoMarkSvg("negative", 108))} width={108} height={108} alt="" />
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { logoMarkSvg, svgDataUri } from "@/lib/brand-svg";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon aus der Bildmarke (transparent, farbig)
export default function Icon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={svgDataUri(logoMarkSvg("color", 64))} width={64} height={64} alt="" />
    ),
    size,
  );
}

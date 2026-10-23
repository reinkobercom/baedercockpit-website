import { LogoMark, type LogoVariant } from "./LogoMark";

/** Einzige Stelle, an der das Logo in der Seite verwendet wird. */
export function Logo({
  variant = "color",
  showWordmark = true,
  height = 32,
  className = "",
}: {
  variant?: LogoVariant;
  showWordmark?: boolean;
  height?: number;
  className?: string;
}) {
  const textColor =
    variant === "negative" ? "text-white" : variant === "mono" ? "text-current" : "text-navy";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark variant={variant} size={height} />
      {showWordmark && (
        <span
          className={`${textColor} leading-none tracking-[-0.01em]`}
          style={{ fontSize: Math.round(height * 0.66) }}
        >
          <span className="font-normal">Bäder</span>
          <span className="font-bold">Cockpit</span>
        </span>
      )}
      <span className="sr-only">{showWordmark ? "" : "BäderCockpit"}</span>
    </span>
  );
}

import { Clock } from "lucide-react";

export function DevBadge({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-bold leading-none ${
        dark ? "bg-hellblau/15 text-hellblau" : "bg-petrol/10 text-[#136a80]"
      } ${className}`}
    >
      <Clock size={12} strokeWidth={2.25} aria-hidden />
      In Entwicklung
    </span>
  );
}

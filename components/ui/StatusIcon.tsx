import type { Status } from "@/content/features";
import { statusLabel } from "@/content/features";

/** Status-Symbol mit Form-Unterschied (nicht nur Farbe) und Screenreader-Label. */
export function StatusIcon({ status, size = 20, strong = false }: { status: Status; size?: number; strong?: boolean }) {
  const label = statusLabel[status];
  const s = size;
  const c = s / 2;
  const r = s / 2 - 1.5;
  let shape;
  switch (status) {
    case "yes":
      shape = (
        <>
          <circle cx={c} cy={c} r={r + 1} fill={strong ? "#0B3A5B" : "#1B8AA6"} />
          <path
            d={`M${s * 0.3} ${s * 0.52} l${s * 0.14} ${s * 0.14} l${s * 0.27} -${s * 0.3}`}
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
      break;
    case "partial":
      shape = (
        <>
          <circle cx={c} cy={c} r={r} fill="none" stroke="#1B8AA6" strokeWidth={1.75} />
          <path d={`M${c} ${c - r} A${r} ${r} 0 0 0 ${c} ${c + r} Z`} fill="#1B8AA6" />
        </>
      );
      break;
    case "dev":
      shape = (
        <>
          <circle cx={c} cy={c} r={r} fill="none" stroke="#1B8AA6" strokeWidth={1.75} strokeDasharray="2.6 2.2" />
          <path d={`M${c} ${c - r * 0.55} V${c} L${c + r * 0.45} ${c + r * 0.3}`} fill="none" stroke="#1B8AA6" strokeWidth={1.75} strokeLinecap="round" />
        </>
      );
      break;
    default:
      shape = <path d={`M${s * 0.32} ${c} H${s * 0.68}`} stroke="#9AB3C2" strokeWidth={2} strokeLinecap="round" />;
  }
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} role="img" aria-label={label} className="shrink-0">
      <title>{label}</title>
      {shape}
    </svg>
  );
}

/** Auswertung für Träger – ruhige Diagramme mit fiktiven Werten, ohne Prozentversprechen. */
export function ReportChart() {
  const bars = [38, 44, 41, 52, 58, 61, 66, 72];
  const months = ["Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt"];
  const line = [30, 34, 33, 40, 44, 43, 50, 54];
  const W = 280;
  const H = 90;
  const lx = (i: number) => (i / (line.length - 1)) * W;
  const ly = (v: number) => H - (v / 60) * H;
  const d = line.map((v, i) => `${i ? "L" : "M"}${lx(i).toFixed(1)} ${ly(v).toFixed(1)}`).join(" ");
  return (
    <div className="p-4 text-navy sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted">Auswertung</p>
          <p className="text-[15px] font-bold">Hallenbad Musterstadt · 2026</p>
        </div>
        <span className="rounded-full bg-eisblau px-2.5 py-1 text-[10px] font-bold text-muted">Beispieldaten</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
          <p className="text-[12px] font-bold">Besuche pro Stammgast</p>
          <p className="mb-3 text-[10.5px] text-muted">pro Monat</p>
          <div className="flex h-[110px] items-end gap-1.5">
            {bars.map((b, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-md ${i === bars.length - 1 ? "bg-navy" : "bg-hellblau"}`}
                  style={{ height: `${b * 1.4}px` }}
                />
                <span className="text-[8.5px] text-muted">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
          <p className="text-[12px] font-bold">Gastro-Umsatz pro Besuch</p>
          <p className="mb-3 text-[10.5px] text-muted">Durchschnitt je Monat</p>
          <svg viewBox={`0 0 ${W} ${H + 20}`} className="h-[110px] w-full" preserveAspectRatio="none">
            {[0, 1, 2, 3].map((g) => (
              <line key={g} x1="0" x2={W} y1={(H / 3) * g} y2={(H / 3) * g} stroke="#D5E7EE" strokeDasharray="3 4" />
            ))}
            <path d={`${d} L${W} ${H} L0 ${H} Z`} fill="#8FD3E3" opacity=".25" />
            <path d={d} fill="none" stroke="#1B8AA6" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            <circle cx={lx(line.length - 1)} cy={ly(line[line.length - 1])} r="4" fill="#0B3A5B" />
          </svg>
        </div>
      </div>
    </div>
  );
}

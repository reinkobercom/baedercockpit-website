import { Bell, Check, TriangleAlert } from "lucide-react";

const values = [
  { k: "Freies Chlor", v: "0,42", u: "mg/l" },
  { k: "Gebundenes Chlor", v: "0,12", u: "mg/l" },
  { k: "pH-Wert", v: "7,1", u: "" },
  { k: "Redox", v: "768", u: "mV" },
];

/** 7-Tage-Verlauf freies Chlor (fiktiv), Sollbereich 0,3–0,6 mg/l */
const series = [0.41, 0.45, 0.38, 0.44, 0.49, 0.4, 0.42];

export function LogBook() {
  const W = 260;
  const H = 72;
  const y = (v: number) => H - ((v - 0.2) / 0.5) * H;
  const x = (i: number) => (i / (series.length - 1)) * W;
  const d = series.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-7 text-navy">
      <div className="mb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">Betriebstagebuch</p>
        <p className="text-[13px] font-bold">Becken 1 · Sportbecken</p>
      </div>

      <div className="rounded-2xl bg-white p-3 ring-1 ring-line">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-bold">Messung 10:00</p>
          <span className="text-[10px] text-muted">DIN 19643</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {values.map((m) => (
            <div key={m.k} className="rounded-xl bg-[#f6fafc] px-2.5 py-2 ring-1 ring-line/70">
              <p className="text-[9.5px] text-muted">{m.k}</p>
              <p className="flex items-center justify-between text-[15px] font-black leading-tight">
                <span>
                  {m.v}
                  <span className="ml-0.5 text-[9px] font-bold text-muted">{m.u}</span>
                </span>
                <Check size={12} strokeWidth={3} className="text-success" />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 flex items-start gap-2 rounded-xl bg-warning/15 px-3 py-2 text-[10.5px] leading-snug text-[#7a5000] ring-1 ring-warning/40">
        <TriangleAlert size={13} strokeWidth={2.5} className="mt-0.5 shrink-0" />
        <span>
          <b>Becken 2:</b> gebundenes Chlor 0,22 mg/l – bitte prüfen
        </span>
      </div>

      <div className="mt-2.5 rounded-2xl bg-white p-3 ring-1 ring-line">
        <p className="mb-1 text-[10.5px] font-bold text-muted">Freies Chlor · 7 Tage</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[64px] w-full" preserveAspectRatio="none">
          <rect x="0" y={y(0.6)} width={W} height={y(0.3) - y(0.6)} fill="#E8F4F8" />
          <path d={d} fill="none" stroke="#1B8AA6" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          {series.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r="2.6" fill="#0B3A5B" />
          ))}
        </svg>
        <div className="mt-1 flex justify-between text-[9px] text-muted">
          <span>Sollbereich 0,3–0,6 mg/l</span>
          <span>Fr</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-2.5 text-[10.5px] text-muted">
        <Bell size={12} strokeWidth={2.25} className="text-petrol" /> Nächste Messung 14:00 · Erinnerung aktiv
      </div>
    </div>
  );
}

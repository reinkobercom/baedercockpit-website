import { Repeat, TriangleAlert } from "lucide-react";
import { Avatar } from "./Frames";

type Shift = "A" | "K" | "T" | null;

const people: { name: string; week: Shift[] }[] = [
  { name: "Jana", week: ["A", "A", null, "A", "K"] },
  { name: "Murat", week: ["T", null, "T", "A", "A"] },
  { name: "Lena", week: ["K", "K", "A", null, "A"] },
  { name: "Tobias", week: [null, "A", "A", "T", "T"] },
  { name: "Sven", week: ["A", "T", "K", "K", null] },
];

const label: Record<Exclude<Shift, null>, string> = { A: "Aufsicht", K: "Kasse", T: "Technik" };
const style: Record<Exclude<Shift, null>, string> = {
  A: "bg-petrol text-white",
  K: "bg-hellblau text-navy",
  T: "bg-navy text-white",
};

/** Wochen-Dienstplan mit Tauschanfrage und Hinweis zur Mindestbesetzung. Fiktive Daten. */
export function ShiftPlan() {
  return (
    <div className="p-4 text-navy sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted">Dienstplan</p>
          <p className="text-[15px] font-bold">KW 43 · Hallenbad Musterstadt</p>
        </div>
        <div className="flex gap-1.5 text-[10px] font-bold">
          {(["A", "K", "T"] as const).map((s) => (
            <span key={s} className={`rounded-md px-1.5 py-0.5 ${style[s]}`}>
              {label[s]}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2 rounded-xl bg-warning/15 px-3 py-2 text-[11.5px] font-bold text-[#7a5000] ring-1 ring-warning/40">
        <TriangleAlert size={14} strokeWidth={2.25} className="shrink-0" />
        Sportbecken 14–16 Uhr: 1 Aufsicht fehlt
      </div>

      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-line">
        <div className="grid grid-cols-[72px_repeat(5,1fr)] border-b border-line bg-[#f6fafc] text-[10px] font-bold text-muted">
          <span className="px-2 py-1.5" />
          {["Mo", "Di", "Mi", "Do", "Fr"].map((d) => (
            <span key={d} className="py-1.5 text-center">
              {d}
            </span>
          ))}
        </div>
        {people.map((p, r) => (
          <div key={p.name} className="grid grid-cols-[72px_repeat(5,1fr)] items-center border-b border-line/70 last:border-b-0">
            <span className="flex items-center gap-1.5 px-2 py-1.5 text-[11px] font-bold">
              <Avatar name={p.name} tone={r} />
              <span className="truncate">{p.name}</span>
            </span>
            {p.week.map((s, i) => (
              <span key={i} className="px-0.5 py-1.5">
                {s ? (
                  <span
                    className={`block truncate rounded-md px-1 py-1 text-center text-[9.5px] font-bold ${style[s]} ${
                      r === 1 && i === 3 ? "ring-2 ring-warning ring-offset-1" : ""
                    }`}
                  >
                    {label[s]}
                  </span>
                ) : (
                  <span className="block rounded-md border border-dashed border-line py-[9px]" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-line">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-eisblau text-petrol">
          <Repeat size={15} strokeWidth={2.25} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[11.5px] font-bold">Tauschanfrage</p>
          <p className="truncate text-[10.5px] text-muted">Murat → Lena · Do, Aufsicht Früh</p>
        </div>
        <span className="rounded-lg bg-navy px-2.5 py-1.5 text-[10px] font-bold text-white">Freigeben</span>
      </div>
      <p className="mt-2 text-right text-[10px] text-muted/80">Beispieldaten</p>
    </div>
  );
}

import { Bell, Droplets, Gift, Repeat, Users } from "lucide-react";
import { Avatar, Chip } from "./Frames";
import { CountUp } from "./CountUp";

/** Übersicht „Hallenbad Musterstadt“ – fiktive Beispieldaten. */
export function CockpitOverview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-[#f6fafc] p-4 sm:p-5">
      {/* Kopfzeile */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted">Cockpit</p>
          <p className="text-[15px] font-bold text-navy sm:text-[16px]">Hallenbad Musterstadt</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-[11px] text-muted sm:inline">Fr, 23. Okt.</span>
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-line">
            <Bell size={14} className="text-navy" strokeWidth={2} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-warning" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Heute im Bad */}
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-line sm:p-4">
          <div className="flex items-start justify-between gap-1">
            <p className="text-[11px] font-bold text-muted">Heute im Bad</p>
          </div>
          <p className="mt-1.5 text-[28px] font-black leading-none text-navy sm:text-[32px]">
            <CountUp to={412} />
          </p>
          <p className="text-[11px] text-muted">Besuche</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-eisblau">
            <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-petrol to-hellblau" />
          </div>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10.5px] text-muted">
            Auslastung 64 %
            <span className="rounded-full bg-petrol/10 px-1.5 py-px text-[8.5px] font-bold text-[#136a80]">In Entwicklung</span>
          </p>
        </div>

        {/* Team */}
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-line sm:p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-muted">
            <Users size={12} strokeWidth={2.25} /> Team
          </p>
          <div className="mt-2.5 flex -space-x-1.5">
            {["Jana", "Murat", "Lena", "Tobias"].map((n, i) => (
              <Avatar key={n} name={n} tone={i} />
            ))}
          </div>
          <p className="mt-2.5 text-[12.5px] font-bold leading-snug text-navy">Frühschicht vollständig</p>
          <div className="mt-2">
            <Chip tone="info">
              <Repeat size={10} strokeWidth={2.5} /> 2 Tauschanfragen
            </Chip>
          </div>
        </div>

        {/* Wasser */}
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-line sm:p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-muted">
            <Droplets size={12} strokeWidth={2.25} /> Wasser · Becken 1
          </p>
          <div className="mt-2 flex items-baseline gap-3">
            <div>
              <p className="text-[20px] font-black leading-none text-navy">
                0,42<span className="ml-0.5 text-[10px] font-bold text-muted">mg/l</span>
              </p>
              <p className="text-[10px] text-muted">freies Chlor</p>
            </div>
            <div>
              <p className="text-[20px] font-black leading-none text-navy">7,1</p>
              <p className="text-[10px] text-muted">pH</p>
            </div>
          </div>
          <div className="mt-2.5">
            <Chip tone="ok">● Im Normbereich</Chip>
          </div>
          {!compact && <p className="mt-1.5 text-[10.5px] text-muted">Nächste Messung 14:00</p>}
        </div>

        {/* Gäste-App */}
        <div className="rounded-2xl bg-navy p-3.5 text-white sm:p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-hellblau">
            <Gift size={12} strokeWidth={2.25} /> Gäste-App
          </p>
          <p className="mt-1.5 text-[28px] font-black leading-none sm:text-[32px]">
            <CountUp to={38} prefix="+" />
          </p>
          <p className="text-[11px] text-white/75">Empfehlungen diese Woche</p>
          <svg viewBox="0 0 120 32" className="mt-2 h-8 w-full" fill="none">
            <path d="M0 26 C 15 24, 22 20, 34 21 S 55 12, 68 14 S 92 6, 120 4" stroke="#8FD3E3" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M0 26 C 15 24, 22 20, 34 21 S 55 12, 68 14 S 92 6, 120 4 V32 H0Z" fill="url(#g1)" opacity=".35" />
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#8FD3E3" />
                <stop offset="1" stopColor="#8FD3E3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="mt-3 text-right text-[10px] text-muted/80">Beispieldaten</p>
    </div>
  );
}

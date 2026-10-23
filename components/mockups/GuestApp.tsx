import { ChevronRight, Coffee, Gift, Heart, UserPlus, Waves } from "lucide-react";
import { Avatar, BadMark } from "./Frames";

/** White-Label-Gäste-App. Fiktives Bad, fiktive Gäste. */
export function GuestApp({ screen = "points" }: { screen?: "points" | "rewards" | "tip" }) {
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-7 text-navy">
      <div className="mb-4 flex items-center gap-2">
        <BadMark size={24} />
        <div className="leading-tight">
          <p className="text-[10px] text-muted">Hallenbad Musterstadt</p>
          <p className="text-[13px] font-bold">{screen === "tip" ? "Danke sagen" : screen === "rewards" ? "Prämien" : "Hallo Lena"}</p>
        </div>
      </div>
      {screen === "points" && <Points />}
      {screen === "rewards" && <Rewards />}
      {screen === "tip" && <Tip />}
    </div>
  );
}

function PointsCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy p-4 text-white">
      <svg className="absolute -right-6 -top-4 h-24 w-40 opacity-30" viewBox="0 0 160 96" fill="none" aria-hidden>
        <path d="M0 40c20-16 40-16 60 0s40 16 60 0 30-16 40-8" stroke="#8FD3E3" strokeWidth="3" />
        <path d="M0 62c20-16 40-16 60 0s40 16 60 0 30-16 40-8" stroke="#8FD3E3" strokeWidth="3" opacity=".6" />
      </svg>
      <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-hellblau">Ihre Punkte</p>
      <p className="mt-1 text-[30px] font-black leading-none">1.240</p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
        <div className="h-full w-[82%] rounded-full bg-hellblau" />
      </div>
      <p className="mt-1.5 text-[10px] text-white/75">noch 260 bis zum Saunaaufguss</p>
    </div>
  );
}

function Points() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <PointsCard />
      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-line">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-eisblau text-petrol">
          <Coffee size={18} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[12px] font-bold">Gratis-Kaffee</p>
          <p className="text-[10px] text-muted">am Kiosk einlösen · 300 P</p>
        </div>
        <span className="rounded-lg bg-navy px-2.5 py-1.5 text-[10px] font-bold text-white">Einlösen</span>
      </div>
      <div className="rounded-2xl bg-white p-3 ring-1 ring-line">
        <p className="mb-2 text-[10.5px] font-bold text-muted">Zuletzt</p>
        <Row icon={<Waves size={14} />} label="Besuch am Mittwoch" value="+50" />
        <Row icon={<UserPlus size={14} />} label="Empfehlung: Murat" value="+200" />
      </div>
      <div className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-petrol py-2.5 text-[12px] font-bold text-white">
        <UserPlus size={14} strokeWidth={2.25} /> Freund einladen
      </div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-petrol">{icon}</span>
      <span className="flex-1 text-[11px]">{label}</span>
      <span className="text-[11px] font-bold text-[#1f7a52]">{value}</span>
    </div>
  );
}

function Rewards() {
  const items = [
    { icon: <Coffee size={18} strokeWidth={2} />, t: "Gratis-Kaffee", s: "Kiosk", p: "300 P", ok: true },
    { icon: <Gift size={18} strokeWidth={2} />, t: "Snack nach Wahl", s: "Kiosk", p: "450 P", ok: true },
    { icon: <Waves size={18} strokeWidth={2} />, t: "Saunaaufguss", s: "Saunalandschaft", p: "1.500 P", ok: false },
    { icon: <Heart size={18} strokeWidth={2} />, t: "Trinkgeld fürs Team", s: "200 P = 2 €", p: "200 P", ok: true },
  ];
  return (
    <div className="flex flex-1 flex-col gap-2.5">
      <div className="flex items-center justify-between rounded-2xl bg-navy px-4 py-3 text-white">
        <span className="text-[11px] text-white/75">Guthaben</span>
        <span className="text-[18px] font-black">1.240 P</span>
      </div>
      {items.map((i) => (
        <div key={i.t} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-line">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-eisblau text-petrol">{i.icon}</span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[12px] font-bold">{i.t}</p>
            <p className="text-[10px] text-muted">{i.s}</p>
          </div>
          <span className={`text-[10.5px] font-bold ${i.ok ? "text-navy" : "text-muted"}`}>{i.p}</span>
          <ChevronRight size={14} className="text-muted" />
        </div>
      ))}
    </div>
  );
}

function Tip() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="rounded-2xl bg-white p-4 text-center ring-1 ring-line">
        <div className="mx-auto mb-2 flex w-fit -space-x-1.5">
          {["Jana", "Murat", "Lena"].map((n, i) => (
            <Avatar key={n} name={n} tone={i} />
          ))}
        </div>
        <p className="text-[13px] font-bold">Trinkgeld an das Kiosk-Team</p>
        <p className="text-[10.5px] text-muted">Danke für den tollen Service!</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["1 €", "2 €", "5 €"].map((v, i) => (
          <div
            key={v}
            className={`rounded-xl py-3 text-center text-[14px] font-black ${
              i === 1 ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-line"
            }`}
          >
            {v}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-eisblau px-3 py-2.5">
        <span className="text-[11px] font-bold">oder mit Punkten</span>
        <span className="rounded-lg bg-white px-2 py-1 text-[11px] font-black text-navy ring-1 ring-line">200 P</span>
      </div>
      <div className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-petrol py-2.5 text-[12px] font-bold text-white">
        <Heart size={14} strokeWidth={2.25} /> Danke senden
      </div>
    </div>
  );
}

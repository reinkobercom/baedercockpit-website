import type { ReactNode } from "react";

/** Neutrale Gerätehüllen – bewusst keinem Hersteller nachempfunden. Alle Mockups sind dekorativ. */

export function BrowserFrame({ children, className = "", url = "app.baedercockpit.de" }: { children: ReactNode; className?: string; url?: string }) {
  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_2px_4px_rgba(11,58,91,.06),0_24px_64px_rgba(11,58,91,.14)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-[#f6fafc] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5e7ee]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5e7ee]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5e7ee]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[220px] items-center justify-center rounded-md bg-white px-3 text-[11px] text-muted ring-1 ring-line">
          {url}
        </div>
        <div className="w-[42px]" />
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "", width = 260 }: { children: ReactNode; className?: string; width?: number }) {
  return (
    <div
      aria-hidden
      className={`relative rounded-[38px] border border-line bg-white p-2 shadow-[0_2px_4px_rgba(11,58,91,.08),0_28px_70px_rgba(11,58,91,.22)] ${className}`}
      style={{ width }}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-[#f6fafc]" style={{ aspectRatio: "9 / 19" }}>
        <div className="absolute left-1/2 top-2 z-10 h-[6px] w-16 -translate-x-1/2 rounded-full bg-[#d5e7ee]" />
        {children}
      </div>
    </div>
  );
}

export function TabletFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={`rounded-[28px] border border-line bg-white p-2.5 shadow-[0_2px_4px_rgba(11,58,91,.06),0_24px_64px_rgba(11,58,91,.14)] ${className}`}
    >
      <div className="overflow-hidden rounded-[20px] border border-line/70 bg-[#f6fafc]">{children}</div>
    </div>
  );
}

/** Kleine wiederverwendbare Bausteine für Mockup-Screens */
export function Chip({ tone, children }: { tone: "ok" | "warn" | "info" | "neutral"; children: ReactNode }) {
  const cls = {
    ok: "bg-success/12 text-[#1f7a52]",
    warn: "bg-warning/18 text-[#8a5a00]",
    info: "bg-petrol/10 text-[#136a80]",
    neutral: "bg-eisblau text-muted",
  }[tone];
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-bold ${cls}`}>{children}</span>;
}

export function Avatar({ name, tone = 0 }: { name: string; tone?: number }) {
  const colors = ["#1B8AA6", "#0B3A5B", "#8FD3E3", "#4A6478", "#2E9E6B"];
  const bg = colors[tone % colors.length];
  const fg = bg === "#8FD3E3" ? "#0B3A5B" : "#fff";
  return (
    <span
      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ring-2 ring-white"
      style={{ background: bg, color: fg }}
    >
      {name[0]}
    </span>
  );
}

export function BadMark({ size = 22 }: { size?: number }) {
  // neutrales Platzhalter-Logo „Ihr Bad“ in der White-Label-App
  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-navy text-white" style={{ width: size, height: size }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M2 15c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3.5-2.5 5 0" />
        <path d="M2 9c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3.5-2.5 5 0" opacity=".6" />
      </svg>
    </span>
  );
}

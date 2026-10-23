import type { ReactNode } from "react";

type Tone = "white" | "ice" | "navy";

const toneClass: Record<Tone, string> = {
  white: "bg-white text-navy",
  ice: "bg-eisblau text-navy",
  navy: "bg-navy text-white",
};

export function Section({
  id,
  tone = "white",
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass[tone]} section-y relative ${className}`}>
      <div className="container-bc">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p
      className={`mb-4 text-[13px] font-bold uppercase tracking-[0.12em] ${dark ? "text-hellblau" : "text-petrol"} ${className}`}
    >
      {children}
    </p>
  );
}

/** H2 mit optional einem hervorgehobenen Schlüsselwort (Petrol bzw. Hellblau auf Navy). */
export function Heading({
  id,
  text,
  accent,
  dark = false,
  className = "",
  as: Tag = "h2",
}: {
  id?: string;
  text: string;
  accent?: string;
  dark?: boolean;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag id={id} className={`t-h2 text-balance ${dark ? "text-white" : "text-navy"} ${className}`}>
      {text}
      {accent && (
        <>
          {" "}
          <span className={dark ? "text-hellblau" : "text-petrol"}>{accent}</span>
        </>
      )}
    </Tag>
  );
}

import { Fragment } from "react";

/**
 * Rendert Text und hebt offene Platzhalter in [eckigen Klammern] sichtbar hervor,
 * damit sie vor dem Livegang nicht übersehen werden.
 */
export function Txt({ children, dark = false }: { children: string; dark?: boolean }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") && p.endsWith("]") ? (
          <mark
            key={i}
            data-placeholder
            className={`rounded px-1 py-0.5 text-[0.85em] font-normal not-italic ${
              dark ? "bg-white/10 text-hellblau outline outline-1 outline-dashed outline-hellblau/50" : "bg-warning/15 text-navy outline outline-1 outline-dashed outline-warning/70"
            }`}
          >
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/** Text ohne Platzhalter-Klammerinhalte – z. B. für Metadaten und JSON-LD. */
export function stripPlaceholders(s: string) {
  return s.replace(/\s*\[[^\]]+\]/g, "").trim();
}

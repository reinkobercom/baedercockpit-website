export const hero = {
  eyebrow: "Software nur für Schwimmbäder",
  titleStart: "Ihr ganzes Bad.",
  titleMid: "In einem",
  titleAccent: "Cockpit.",
  subline:
    "Gäste-App mit Punkten, Trinkgeld, Dienstplan und digitales Betriebstagebuch – in einer Plattform. Dockt an Ihre bestehende Kasse an.",
  proof: ["Mehr Besuche pro Gast", "Weniger Abstimmung im Team", "Betriebstagebuch nach DIN 19643"],
  question: "Welches Bad betreiben Sie?",
};

/** Bad-Typen – gemeinsam genutzt von Hero und Demo-Formular. */
export const poolTypes = [
  { id: "hallenbad", label: "Hallenbad" },
  { id: "freibad", label: "Freibad" },
  { id: "kombibad", label: "Kombibad" },
  { id: "mehrere", label: "Mehrere Bäder" },
] as const;

export type PoolTypeId = (typeof poolTypes)[number]["id"];

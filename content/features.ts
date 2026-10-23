/**
 * Eine Quelle für Vergleichstabelle UND Roadmap.
 * Status ändern → beide Darstellungen aktualisieren sich.
 */

export type Status = "yes" | "partial" | "dev" | "no";

export const statusLabel: Record<Status, string> = {
  yes: "Enthalten",
  partial: "Teilweise",
  dev: "In Entwicklung",
  no: "Nicht enthalten",
};

export const categories = [
  { id: "kasse", label: "Kassen- und Zutrittssystem", short: "Kasse & Zutritt" },
  { id: "ticketing", label: "Ticketing-Plattform", short: "Ticketing" },
  { id: "loyalty", label: "Loyalty-App (branchenübergreifend)", short: "Loyalty-App" },
  { id: "dienstplan", label: "Dienstplan-Software (branchenübergreifend)", short: "Dienstplan" },
  { id: "tagebuch", label: "Betriebstagebuch-Tool", short: "Betriebstagebuch" },
  { id: "trinkgeld", label: "Trinkgeld-App", short: "Trinkgeld" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Feature = {
  id: string;
  label: string;
  /** Status der Kategorien in Reihenfolge von `categories` */
  others: Record<CategoryId, Status>;
  bc: Status;
  bcNote?: string;
  roadmap?: { title: string; text: string; icon: string };
};

const n = (o: Partial<Record<CategoryId, Status>>): Record<CategoryId, Status> => ({
  kasse: "no",
  ticketing: "no",
  loyalty: "no",
  dienstplan: "no",
  tagebuch: "no",
  trinkgeld: "no",
  ...o,
});

export const featureGroups: { title: string; features: Feature[] }[] = [
  {
    title: "Gäste",
    features: [
      { id: "app", label: "Eigene App im Design des Bades", others: n({ kasse: "partial", ticketing: "partial", loyalty: "yes" }), bc: "yes" },
      { id: "empfehlung", label: "Punkte für Empfehlungen", others: n({ loyalty: "yes" }), bc: "yes" },
      {
        id: "besuchspunkte",
        label: "Punkte automatisch pro Besuch",
        others: n({ loyalty: "partial" }),
        bc: "dev",
        roadmap: { icon: "plug", title: "Kassen-Schnittstellen", text: "Besuche lösen automatisch Punkte aus." },
      },
      { id: "einloesen", label: "Punkte in der Gastronomie einlösen", others: n({ kasse: "partial", loyalty: "partial" }), bc: "yes" },
      {
        id: "auslastung",
        label: "Live-Auslastung in der App",
        others: n({ kasse: "partial", ticketing: "partial" }),
        bc: "dev",
        roadmap: { icon: "activity", title: "Live-Auslastung", text: "Gäste sehen in der App, wie voll es ist." },
      },
    ],
  },
  {
    title: "Gastronomie & Trinkgeld",
    features: [
      { id: "trinkgeld", label: "Digitales Trinkgeld", others: n({ trinkgeld: "yes" }), bc: "yes" },
      { id: "trinkgeld-punkte", label: "Trinkgeld mit Punkten", others: n({}), bc: "yes" },
    ],
  },
  {
    title: "Team",
    features: [
      { id: "dienstplan", label: "Dienstplan und Schichttausch", others: n({ dienstplan: "yes" }), bc: "yes" },
      { id: "mindestbesetzung", label: "Mindestbesetzung pro Becken", others: n({}), bc: "yes" },
      {
        id: "qualifikation",
        label: "Qualifikationsnachweise mit Ablaufdatum",
        others: n({ dienstplan: "partial" }),
        bc: "dev",
        roadmap: {
          icon: "badge",
          title: "Qualifikationsnachweise",
          text: "Rettungsschwimmer und Unterweisungen mit Ablaufdatum im Dienstplan.",
        },
      },
    ],
  },
  {
    title: "Technik",
    features: [
      { id: "din", label: "Betriebstagebuch nach DIN 19643", others: n({ tagebuch: "yes" }), bc: "yes" },
      { id: "hinweis", label: "Erinnerung und Hinweis bei Abweichung", others: n({ tagebuch: "partial" }), bc: "yes" },
      {
        id: "messwerte",
        label: "Automatische Messwertübernahme",
        others: n({ tagebuch: "partial" }),
        bc: "dev",
        roadmap: {
          icon: "gauge",
          title: "Automatische Messwerte",
          text: "Direkt aus der Mess- und Regeltechnik ins Betriebstagebuch.",
        },
      },
    ],
  },
  {
    title: "Plattform",
    features: [
      { id: "baeder", label: "Speziell für Schwimmbäder", others: n({ kasse: "yes", ticketing: "partial", tagebuch: "yes" }), bc: "yes" },
      { id: "login", label: "Alles mit einem Login", others: n({}), bc: "yes" },
      { id: "kasse", label: "Ersetzt die Kasse", others: n({ kasse: "yes" }), bc: "no", bcNote: "dockt an" },
    ],
  },
];

export const comparison = {
  eyebrow: "Im Vergleich",
  title: "Was andere einzeln können – in",
  titleAccent: "einem System.",
  subline: "Typischer Funktionsumfang je Software-Kategorie.",
  footnote:
    "Einstufung nach öffentlich verfügbaren Angaben typischer Anbieter je Kategorie, Stand Oktober 2026. Einzelne Anbieter können abweichen.",
};

export const roadmap = {
  eyebrow: "In Entwicklung",
  title: "Was als Nächstes kommt.",
  /** Reihenfolge der Roadmap-Karten */
  order: ["besuchspunkte", "auslastung", "messwerte", "qualifikation"],
};

export function roadmapItems() {
  const all = featureGroups.flatMap((g) => g.features);
  return roadmap.order
    .map((id) => all.find((f) => f.id === id))
    .filter((f): f is Feature & { roadmap: NonNullable<Feature["roadmap"]> } => !!f?.roadmap && f.bc === "dev");
}

/** Zentrale Texte und Einstellungen. */
export const site = {
  name: "BäderCockpit",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://baedercockpit.de",
  title: "BäderCockpit – Software für Schwimmbäder: Gäste-App, Dienstplan, Betriebstagebuch",
  description:
    "Eine Plattform für Frei-, Hallen- und Kombibäder: Gäste-App mit Punkten, Trinkgeld, Dienstplan und Betriebstagebuch nach DIN 19643. Dockt an Ihre Kasse an.",
  tagline: "Software nur für Schwimmbäder.",
  cta: {
    label: "Demo vereinbaren",
    short: "Demo",
    reassurance: "30 Minuten · online · unverbindlich",
    reassuranceShort: "30 Min · unverbindlich",
  },
  contact: {
    email: "kontakt@reinkober.com",
    demoEmail: "kontakt@reinkober.com",
  },
  company: "RX2 Marketing GmbH",
};

/** Liefert eine mailto-Adresse nur, wenn der Platzhalter ersetzt wurde. */
export function mailHref(address: string) {
  const clean = address.replace(/[[\]]/g, "");
  return `mailto:${clean}`;
}

export const trust = [
  { icon: "waves", label: "Aus dem Bäderbetrieb entwickelt" },
  { icon: "shield", label: "DSGVO-konform" },
  { icon: "server", label: "Hosting in Deutschland" },
  { icon: "clipboard", label: "Betriebstagebuch nach DIN 19643" },
] as const;

export const problem = {
  eyebrow: "Der Alltag im Bad",
  title: "Vier Tools. Zettel. Excel. Und zu wenig Personal.",
  cards: [
    { icon: "sheet", text: "Dienstplan per Excel, Tausch per WhatsApp" },
    { icon: "notebook", text: "Messwerte auf Papier, Lücken fallen spät auf" },
    { icon: "users", text: "Stammgäste bleiben anonym – und kommen seltener" },
  ],
} as const;

export const howItWorks = {
  eyebrow: "Andocken statt ersetzen",
  title: "Ihre Kasse bleibt. Ihr Bad bekommt ein",
  titleAccent: "Cockpit.",
  steps: [
    {
      icon: "plug",
      title: "Verbinden",
      text: "BäderCockpit dockt an Ihr Kassen- und Zutrittssystem an.",
      note: "Kassen-Schnittstellen sind in Entwicklung – wir klären die Anbindung im Demo-Gespräch.",
    },
    { icon: "settings", title: "Einrichten", text: "Becken, Team und App in Ihrem Design – wir begleiten Sie." },
    { icon: "play", title: "Loslegen", text: "Gäste sammeln Punkte, das Team plant und dokumentiert." },
  ],
};

export const beforeAfter = {
  eyebrow: "Vorher · Nachher",
  title: "Aus vier Insellösungen wird eine Plattform.",
  before: ["Excel-Dienstplan", "WhatsApp-Gruppe", "Papier-Betriebstagebuch", "Stempelkarte", "Trinkgeldglas"],
  after: ["Dienstplan & Tausch", "Betriebstagebuch", "Gäste-App & Punkte", "Trinkgeld"],
  closing: "Ein Login. Ein Ansprechpartner. Ein Vertrag.",
};

export const security = {
  eyebrow: "Sicherheit",
  title: "Gebaut für öffentliche Betreiber.",
  items: [
    { icon: "shield", title: "DSGVO-konform", text: "Auftragsverarbeitungsvertrag inklusive." },
    { icon: "server", title: "Hosting in Deutschland", text: "Ihre Daten bleiben in der EU." },
    { icon: "clipboard", title: "DIN 19643", text: "Betriebstagebuch nach der geltenden Norm." },
    { icon: "key", title: "Rollen und Rechte", text: "Jeder sieht nur, was er braucht." },
  ],
};

export const founder = {
  eyebrow: "Wer dahintersteht",
  title: "Aus der Branche. Für die Branche.",
  quote: "Wir kennen den Alltag im Bad. Deshalb bauen wir die Software, die wir uns selbst immer gewünscht haben.",
  quoteBy: "Philipp & Simon, Gründer von BäderCockpit",
  people: [
    { name: "Philipp", role: "Marketingleiter & Badleitung in einem Schwimmbad" },
    { name: "Simon", role: "Marketing & Entwicklung" },
  ],
};

export const demo = {
  eyebrow: "Demo",
  title: "Sehen Sie BäderCockpit in",
  titleAccent: "30 Minuten.",
  points: ["Live-Demo für Ihre Rolle", "Ihre Fragen zu Kasse und Datenschutz", "Unverbindlich und online"],
  success: "Danke! Wir melden uns innerhalb eines Werktags mit Terminvorschlägen.",
};

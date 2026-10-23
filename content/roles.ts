import type { MockupId } from "./modules";

export const rolePicker = {
  eyebrow: "Für Ihre Rolle",
  title: "Was bringt BäderCockpit",
  titleAccent: "Ihnen?",
  subline: "Wählen Sie Ihre Rolle.",
};

export type Role = {
  id: string;
  icon: string;
  title: string;
  /** kurze Form für CTA „Demo für … vereinbaren“ */
  ctaLabel: string;
  headline: string;
  benefits: { icon: string; title: string; text: string }[];
  mockup: MockupId;
};

export const roles: Role[] = [
  {
    id: "betriebsleitung",
    icon: "dashboard",
    title: "Betriebsleitung",
    ctaLabel: "Betriebsleitung",
    headline: "Ihr Betrieb auf einen Blick.",
    benefits: [
      { icon: "layers", title: "Ein Login statt vier Tools", text: "Dienstplan, Messungen und Gäste an einem Ort." },
      { icon: "users", title: "Aufsicht sicher planen", text: "Mindestbesetzung pro Becken, Lücken werden sofort sichtbar." },
      { icon: "repeat", title: "Schichttausch ohne Telefonkette", text: "Das Team tauscht, Sie geben frei." },
    ],
    mockup: "cockpit",
  },
  {
    id: "traeger",
    icon: "landmark",
    title: "Geschäftsführung, Stadtwerke, Träger",
    ctaLabel: "Geschäftsführung & Träger",
    headline: "Mehr Wert aus jedem Besuch.",
    benefits: [
      { icon: "heart", title: "Stammgäste binden", text: "Punkte pro Besuch sorgen für mehr Besuche pro Jahr." },
      { icon: "plug", title: "Bestehende Kasse bleibt", text: "Keine neue Hardware, keine Großinvestition." },
      { icon: "shield", title: "Datenschutz von Anfang an", text: "DSGVO-konform, Hosting in Deutschland [bestätigen]." },
    ],
    mockup: "report",
  },
  {
    id: "technik",
    icon: "droplets",
    title: "Schwimmmeister und Technik",
    ctaLabel: "Schwimmmeister & Technik",
    headline: "Messen, dokumentieren, fertig.",
    benefits: [
      { icon: "smartphone", title: "Betriebstagebuch auf dem Handy", text: "Nach DIN 19643, in Sekunden erfasst." },
      { icon: "bell", title: "Erinnerung und Hinweis", text: "Wenn eine Messung fällig ist oder ein Wert abweicht." },
      { icon: "filecheck", title: "Prüfbereit fürs Gesundheitsamt", text: "Export auf Knopfdruck." },
    ],
    mockup: "logbook",
  },
  {
    id: "marketing",
    icon: "handshake",
    title: "Marketing und Gastronomie",
    ctaLabel: "Marketing & Gastronomie",
    headline: "Gäste, die wiederkommen.",
    benefits: [
      { icon: "smartphone", title: "Ihre eigene App", text: "Im Look Ihres Bades, mit Ihrem Logo." },
      { icon: "coffee", title: "Punkte am Kiosk einlösen", text: "Kaffee, Snack, Saunaaufguss." },
      { icon: "coins", title: "Trinkgeld fürs Team", text: "Digital, mit Punkten oder Geld." },
    ],
    mockup: "guest-rewards",
  },
];

/** Rollen im Demo-Formular (inkl. „Sonstiges“) */
export const formRoles = [
  { id: "betriebsleitung", label: "Betriebsleitung" },
  { id: "traeger", label: "Geschäftsführung / Stadtwerke / Träger" },
  { id: "technik", label: "Schwimmmeister / Technik" },
  { id: "marketing", label: "Marketing / Gastronomie" },
  { id: "sonstiges", label: "Sonstiges" },
] as const;

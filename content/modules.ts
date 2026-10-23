export const platform = {
  eyebrow: "Eine Plattform",
  title: "Alles, was Ihr Bad",
  titleAccent: "bewegt.",
};

export const modules = [
  {
    id: "gaeste",
    icon: "smartphone",
    title: "Gäste-App",
    text: "Punkte für jeden Besuch und jede Empfehlung – im Design Ihres Bades.",
    mockup: "guest-points",
  },
  {
    id: "trinkgeld",
    icon: "coins",
    title: "Trinkgeld",
    text: "Gäste sagen Danke – mit Punkten oder Geld, direkt ans Team.",
    mockup: "guest-tip",
  },
  {
    id: "dienstplan",
    icon: "calendar",
    title: "Dienstplan",
    text: "Dienste planen, tauschen, Mindestbesetzung pro Becken im Blick.",
    mockup: "shiftplan",
  },
  {
    id: "betriebstagebuch",
    icon: "droplets",
    title: "Betriebstagebuch",
    text: "Messungen nach DIN 19643 – mit Erinnerung und Hinweis bei Abweichung.",
    mockup: "logbook",
  },
] as const;

export type MockupId = "guest-points" | "guest-rewards" | "guest-tip" | "shiftplan" | "logbook" | "cockpit" | "report";
export const interests = ["Gäste-App", "Trinkgeld", "Dienstplan", "Betriebstagebuch", "Alles"] as const;

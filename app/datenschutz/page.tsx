import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: "Datenschutz – BäderCockpit",
  description: "Datenschutzerklärung von BäderCockpit, einer Marke der RX2 Marketing GmbH.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage title={datenschutz.title} updated={datenschutz.updated} intro={datenschutz.intro} sections={datenschutz.sections} />
  );
}

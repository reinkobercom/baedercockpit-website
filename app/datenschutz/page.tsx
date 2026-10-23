import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: "Datenschutz – BäderCockpit",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage title={datenschutz.title} intro={datenschutz.intro} sections={datenschutz.sections} />;
}

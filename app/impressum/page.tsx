import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: "Impressum – BäderCockpit",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage title={impressum.title} sections={impressum.sections} />;
}

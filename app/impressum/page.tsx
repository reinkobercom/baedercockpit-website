import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: "Impressum – BäderCockpit",
  description: "Impressum von BäderCockpit, einer Marke der RX2 Marketing GmbH.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage title={impressum.title} intro={impressum.intro} sections={impressum.sections} />;
}

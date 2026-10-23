import { stripPlaceholders } from "@/components/ui/Txt";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { DemoSection } from "@/components/sections/DemoSection";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Founder } from "@/components/sections/Founder";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { Problem } from "@/components/sections/Problem";
import { RolePicker } from "@/components/sections/RolePicker";
import { Roadmap } from "@/components/sections/Roadmap";
import { Security } from "@/components/sections/Security";
import { StickyCta } from "@/components/sections/StickyCta";
import { TrustBar } from "@/components/sections/TrustBar";
import { faq } from "@/content/faq";
import { DemoPrefillProvider } from "@/lib/demo-prefill";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripPlaceholders(f.a) },
    })),
  };

  return (
    <DemoPrefillProvider>
      <Header />
      <main id="inhalt">
        <Hero />
        <TrustBar />
        <Problem />
        <PlatformShowcase />
        <RolePicker />
        <HowItWorks />
        <BeforeAfter />
        <ComparisonTable />
        <Roadmap />
        <Security />
        <Founder />
        <DemoSection />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </DemoPrefillProvider>
  );
}

import type { MockupId } from "@/content/modules";
import { CockpitOverview } from "./CockpitOverview";
import { BrowserFrame, PhoneFrame, TabletFrame } from "./Frames";
import { GuestApp } from "./GuestApp";
import { LogBook } from "./LogBook";
import { ReportChart } from "./ReportChart";
import { ShiftPlan } from "./ShiftPlan";

/** Wählt Mockup + passende Gerätehülle. Einheitlich zentriert, feste Mindesthöhe gegen Layout-Sprünge. */
export function MockupView({ id }: { id: MockupId }) {
  switch (id) {
    case "guest-points":
      return (
        <PhoneFrame width={270} className="mx-auto">
          <GuestApp screen="points" />
        </PhoneFrame>
      );
    case "guest-rewards":
      return (
        <PhoneFrame width={270} className="mx-auto">
          <GuestApp screen="rewards" />
        </PhoneFrame>
      );
    case "guest-tip":
      return (
        <PhoneFrame width={270} className="mx-auto">
          <GuestApp screen="tip" />
        </PhoneFrame>
      );
    case "logbook":
      return (
        <PhoneFrame width={270} className="mx-auto">
          <LogBook />
        </PhoneFrame>
      );
    case "shiftplan":
      return (
        <TabletFrame className="mx-auto w-full max-w-[540px]">
          <ShiftPlan />
        </TabletFrame>
      );
    case "report":
      return (
        <BrowserFrame className="mx-auto w-full max-w-[580px]">
          <ReportChart />
        </BrowserFrame>
      );
    case "cockpit":
    default:
      return (
        <BrowserFrame className="mx-auto w-full max-w-[540px]">
          <CockpitOverview />
        </BrowserFrame>
      );
  }
}

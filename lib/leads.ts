import { Resend } from "resend";
import { poolTypes } from "@/content/hero";
import { formRoles } from "@/content/roles";
import type { Lead } from "./lead-schema";

/**
 * Zustellung einer Demo-Anfrage. Heute per E-Mail (Resend).
 * Später kann hier zusätzlich ein CRM angebunden werden, ohne Formular oder API-Route zu ändern.
 */
export async function deliverLead(lead: Lead): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_RECIPIENT_EMAIL;
  const from = process.env.DEMO_SENDER_EMAIL ?? "BäderCockpit <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("[demo] Versand nicht konfiguriert: RESEND_API_KEY oder DEMO_RECIPIENT_EMAIL fehlt.");
    return { ok: false, reason: "not_configured" };
  }

  const pool = poolTypes.find((p) => p.id === lead.poolType)?.label ?? lead.poolType;
  const role = formRoles.find((r) => r.id === lead.role)?.label ?? lead.role;
  const name = [lead.firstName, lead.lastName].filter(Boolean).join(" ");

  const rows: [string, string][] = [
    ["Name", name],
    ["Bad / Organisation", lead.organization],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone || "–"],
    ["Bad-Typ", pool],
    ["Rolle", role],
    ["Interesse", lead.interests.join(", ")],
    ["Wunschzeitraum", lead.timeframe || "–"],
  ];

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  const html = `<div style="font-family:Lato,Arial,sans-serif;color:#0B3A5B">
    <h2 style="margin:0 0 16px">Neue Demo-Anfrage</h2>
    <table style="border-collapse:collapse">${rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 16px 6px 0;color:#4A6478">${esc(k)}</td><td style="padding:6px 0;font-weight:700">${esc(v)}</td></tr>`,
      )
      .join("")}</table></div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: lead.email,
      subject: `Demo-Anfrage: ${lead.organization} (${pool})`,
      html,
      text,
    });
    if (error) {
      console.error("[demo] Resend-Fehler", error);
      return { ok: false, reason: "send_failed" };
    }
    return { ok: true };
  } catch (e) {
    console.error("[demo] Versand fehlgeschlagen", e);
    return { ok: false, reason: "send_failed" };
  }
}

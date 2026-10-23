import { z } from "zod";
import { poolTypes } from "@/content/hero";
import { interests } from "@/content/modules";
import { formRoles } from "@/content/roles";

const poolIds = poolTypes.map((p) => p.id) as [string, ...string[]];
const roleIds = formRoles.map((r) => r.id) as [string, ...string[]];

export const contactSchema = z.object({
  firstName: z.string().trim().max(80).optional().or(z.literal("")),
  lastName: z.string().trim().min(1, "Bitte geben Sie Ihren Nachnamen an.").max(80),
  organization: z.string().trim().min(1, "Bitte geben Sie Ihr Bad oder Ihre Organisation an.").max(160),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  timeframe: z.string().trim().max(200).optional().or(z.literal("")),
  privacy: z.literal(true, { error: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." }),
});

export const leadSchema = contactSchema.extend({
  poolType: z.enum(poolIds),
  role: z.enum(roleIds),
  interests: z.array(z.enum(interests)).min(1),
  /** Honeypot – muss leer bleiben */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Zeitpunkt des Formularstarts (ms) – gegen Bots */
  startedAt: z.number(),
});

export type ContactValues = z.input<typeof contactSchema>;
export type Lead = z.output<typeof leadSchema>;

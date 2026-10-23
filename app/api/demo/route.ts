import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { deliverLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  // Spam-Schutz: Honeypot gefüllt oder zu schnell abgeschickt → still verwerfen
  const tooFast = typeof raw.startedAt === "number" && Date.now() - raw.startedAt < 3000;
  if ((typeof raw.website === "string" && raw.website.length > 0) || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation", issues: parsed.error.issues.map((i) => i.path.join(".")) }, { status: 422 });
  }

  const result = await deliverLead(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}

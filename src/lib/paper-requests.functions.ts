import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  name: z.string().trim().max(120).optional().nullable(),
  company: z.string().trim().max(160).optional().nullable(),
});

export const submitPaperRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const email = data.email.toLowerCase();
    const since = new Date(Date.now() - 5 * 60 * 1000).toISOString();

    // Basic abuse control: at most 3 requests per email in a 5 minute window.
    const { count, error: countError } = await supabaseAdmin
      .from("paper_requests")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", since);

    if (countError) throw new Error("Could not process the request right now.");
    if ((count ?? 0) >= 3) throw new Error("Too many requests. Please try again in a few minutes.");

    const { error } = await supabaseAdmin.from("paper_requests").insert({
      email,
      name: data.name?.trim() ? data.name.trim() : null,
      company: data.company?.trim() ? data.company.trim() : null,
    });

    if (error) throw new Error("Could not save the request. Please try again.");
    return { ok: true as const };
  });

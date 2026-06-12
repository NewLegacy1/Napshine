"use server";

import { Resend } from "resend";
import { z } from "zod";
import { siteConfig, serviceTypeLabels, type ServiceType } from "@/config/site";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email().optional().or(z.literal("")),
  serviceType: z.enum([
    "residential",
    "deep-clean",
    "move-in-out",
    "commercial",
    "post-construction",
    "other",
  ] as const),
  details: z.string().optional(),
  contactMethod: z.enum(["call", "text", "email"]),
});

export type QuoteFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitQuote(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const parsed = quoteSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email") || "",
    serviceType: formData.get("serviceType"),
    details: formData.get("details") || "",
    contactMethod: formData.get("contactMethod"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data;
  const serviceLabel =
    serviceTypeLabels[data.serviceType as ServiceType] ?? data.serviceType;

  const emailBody = `
New quote request for ${siteConfig.name}

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Service: ${serviceLabel}
Preferred contact: ${data.contactMethod}
Details: ${data.details || "None"}

Submitted at: ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })}
`.trim();

  const ownerEmail = process.env.OWNER_EMAIL ?? siteConfig.email;
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const resend = new Resend(resendKey);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "Napshine Quotes <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      replyTo: data.email || undefined,
      subject: `New Quote Request — ${serviceLabel} — ${data.name}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Something went wrong sending your request. Please call us directly.",
      };
    }
  } else {
    console.log("[Quote form submission — RESEND_API_KEY not set]\n", emailBody);
  }

  return {
    success: true,
    message: `Thanks, ${data.name}! We'll respond within ${siteConfig.responseTime}.`,
  };
}

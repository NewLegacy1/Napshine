import { siteConfig } from "@/config/site";
import { chatbotSystemPrompt } from "@/lib/chatbot-prompt";
import { openai } from "@ai-sdk/openai";
import { generateText, type UIMessage } from "ai";

function getFallbackReply(message: string): string {
  const lower = message.toLowerCase();

  if (/price|cost|how much|rate|quote|pricing/.test(lower)) {
    return `Residential standard cleans typically start around $${siteConfig.pricing.residentialFrom}/visit in the GTA, and deep cleans from $${siteConfig.pricing.deepCleanFrom}. Commercial pricing is custom based on your space. Exact pricing depends on size and condition — the fastest way to get your number is our free quote form below, or call ${siteConfig.phoneDisplay}.`;
  }

  if (/area|serve|location|city|gta|toronto|mississauga|brampton/.test(lower)) {
    return `We serve the full GTA including ${siteConfig.serviceAreas.slice(0, 6).join(", ")}, and more. Not sure about your address? Request a quote and we'll confirm availability right away.`;
  }

  if (/commercial|office|business|retail|clinic/.test(lower)) {
    return "Yes! We offer commercial and office cleaning with flexible scheduling — daily, weekly, or custom. You'll get a dedicated contact and a quote based on your square footage. Want me to point you to the quote form?";
  }

  if (/deep|move|move-in|move-out|construction/.test(lower)) {
    return "We offer deep cleaning, move-in/move-out, and post-construction cleaning. Deep cleans cover baseboards, buildup, and detail work standard cleans skip. Fill out the quote form with your timeline and we'll send options fast.";
  }

  if (/supply|product|eco|green|pet/.test(lower)) {
    return "We bring professional-grade supplies on every visit. Eco-friendly, non-toxic products are available on request — great for families and pets.";
  }

  if (/insur|background|trust|safe|vet/.test(lower)) {
    return "Every team member is background-checked and vetted. We're fully insured so your property is protected on every visit.";
  }

  if (/book|schedule|appointment|call|contact|owner|talk|reach/.test(lower)) {
    return `You can reach us at ${siteConfig.phoneDisplay} or ${siteConfig.email}. For the fastest response, fill out our quote form — the owner typically replies within ${siteConfig.responseTime}.`;
  }

  if (/service|offer|what do you|include|standard/.test(lower)) {
    return "We offer residential cleaning, deep cleaning, move-in/out, commercial/office cleaning, plus add-ons like post-construction, carpet, windows, and Airbnb turnover. What type of space are you looking to clean?";
  }

  return `I'm here to help with services, pricing, and booking for ${siteConfig.name}. Ask about our services, pricing, service area, or say "get a quote" and I'll point you to the form. You can also call ${siteConfig.phoneDisplay}.`;
}

function getLastUserText(messages: UIMessage[]): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  return (
    lastUser?.parts
      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join(" ") ?? ""
  );
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const lastText = getLastUserText(messages);

  if (!lastText.trim()) {
    return Response.json({
      reply: getFallbackReply("hello"),
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ reply: getFallbackReply(lastText) });
  }

  try {
    const conversation = messages
      .map((m) => {
        const text =
          m.parts
            ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => p.text)
            .join(" ") ?? "";
        return { role: m.role as "user" | "assistant", content: text };
      })
      .filter((m) => m.content.length > 0);

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      system: chatbotSystemPrompt,
      messages: conversation,
      maxOutputTokens: 300,
    });

    return Response.json({ reply: text });
  } catch (error) {
    console.error("Chat AI error:", error);
    return Response.json({ reply: getFallbackReply(lastText) });
  }
}

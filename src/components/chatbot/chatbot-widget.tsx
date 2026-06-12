"use client";

import { FormEvent, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const quickReplies = [
  "Services & Pricing",
  "Service Area",
  "Get a Quote",
  "Talk to Owner",
];

const GREETING = `Hi! I'm Napshine's assistant. I can help with services, pricing, and booking a quote. What can I help you with?`;

function mapQuickReply(text: string): string {
  switch (text) {
    case "Services & Pricing":
      return "What services do you offer and how much does cleaning cost?";
    case "Service Area":
      return "What areas in the GTA do you serve?";
    case "Get a Quote":
      return "I'd like to get a quote";
    case "Talk to Owner":
      return "I'd like to talk to the owner";
    default:
      return text;
  }
}

function shouldScrollToQuote(text: string): boolean {
  return /quote|book|schedule|get a quote/i.test(text);
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "greeting", role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    scrollToBottom();

    if (shouldScrollToQuote(text)) {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    }

    try {
      const uiMessages = [...messages, userMessage].map((m) => ({
        id: m.id,
        role: m.role,
        parts: [{ type: "text" as const, text: m.content }],
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: uiMessages }),
      });

      const data = (await res.json()) as { reply?: string };
      const assistantText =
        data.reply ??
        "Thanks for your question! Fill out our quote form or call us directly.";

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: assistantText,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Please call ${siteConfig.phoneDisplay} or fill out the quote form and we'll get back to you within ${siteConfig.responseTime}.`,
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-brand-950 shadow-lg shadow-brand-900/30 transition-transform hover:scale-105 md:bottom-6",
          open && "scale-0 opacity-0",
        )}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {open && (
        <div className="chat-panel fixed inset-x-4 bottom-20 z-50 flex max-h-[min(80vh,560px)] flex-col overflow-hidden rounded-2xl border shadow-2xl md:inset-x-auto md:bottom-6 md:right-4 md:w-96">
          <div className="flex items-center justify-between hero-gradient px-4 py-3 text-white">
            <div>
              <p className="font-semibold">Napshine Assistant</p>
              <p className="text-xs text-on-hero-muted">Ask about services & pricing</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[90%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto btn-primary-themed"
                    : "bg-brand-100 text-heading border border-brand-200",
                )}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[90%] rounded-2xl bg-brand-50 px-4 py-2 text-sm text-muted">
                Typing...
              </div>
            )}
          </div>

          <div className="border-t border-brand-100 p-3">
            <div className="mb-2 flex flex-wrap gap-1">
              {quickReplies.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => void sendMessage(mapQuickReply(chip))}
                  className="rounded-full border border-brand-200 px-2 py-1 text-xs font-medium text-brand-800 hover:bg-brand-50"
                >
                  {chip}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-full border border-brand-200 px-4 py-2 text-sm outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <a
              href="#quote"
              className="mt-2 block text-center text-xs font-semibold text-brand-700 hover:underline"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote →
            </a>
          </div>
        </div>
      )}
    </>
  );
}

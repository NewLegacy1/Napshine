"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatbotWidget = dynamic(
  () =>
    import("@/components/chatbot/chatbot-widget").then((mod) => mod.ChatbotWidget),
  { ssr: false },
);

export function LazyChatbot() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);

    const onScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return null;
  return <ChatbotWidget />;
}

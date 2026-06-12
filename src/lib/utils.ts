import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToQuote(serviceType?: string) {
  if (typeof window === "undefined") return;
  const params = serviceType ? `?service=${serviceType}` : "";
  window.location.hash = "quote";
  if (params) {
    window.history.replaceState(null, "", `#quote${params.replace("?", "&").replace("&", "?")}`);
  }
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function MobileBar() {
  return (
    <div className="mobile-bar-themed fixed inset-x-0 bottom-0 z-40 border-t p-3 md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="mobile-bar-call flex flex-1 items-center justify-center gap-2 rounded-[var(--btn-radius)] border border-brand-600/40 py-3 text-sm font-semibold text-accent-500"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Button className="flex-1" size="sm">
          <a href="#quote" className="w-full">
            Get Quote
          </a>
        </Button>
      </div>
    </div>
  );
}

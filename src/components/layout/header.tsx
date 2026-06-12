"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#quote", label: "Quote" },
];

export function Header() {
  return (
    <header className="header-bar sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-sm font-bold leading-tight text-heading sm:text-base">
            Napshine
          </span>
          <span className="hidden text-xs font-medium text-accent-500 sm:block">
            Cleaning Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-brand-600/40 text-accent-500 transition-colors hover:bg-brand-50",
              "md:hidden",
            )}
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 text-sm font-semibold text-accent-500 md:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a href="#quote" className="hidden sm:inline-flex">
            <Button size="sm" type="button">
              Get a Quote
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

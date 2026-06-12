"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { themeLabels, type SiteTheme } from "@/config/themes";
import { cn } from "@/lib/utils";

function getThemeFromDocument(): SiteTheme {
  const theme = document.documentElement.dataset.theme;
  return theme === "gold" ? "gold" : "turquoise";
}

export function ThemePreviewSwitcher() {
  const [theme, setTheme] = useState<SiteTheme>("turquoise");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(getThemeFromDocument());
  }, []);

  const switchTheme = (next: SiteTheme) => {
    document.cookie = `napshine-theme=${next}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
    document.documentElement.dataset.theme = next;
    setTheme(next);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-24 left-4 z-[60] md:bottom-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="preview-panel flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg"
        aria-expanded={open}
        aria-label="Preview color themes"
      >
        <Palette className="h-4 w-4" />
        A/B Preview
      </button>

      {open && (
        <div className="preview-panel mt-2 w-56 rounded-2xl border p-2 shadow-xl">
          <p className="px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-muted">
            Color variants
          </p>
          {(["turquoise", "gold"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => switchTheme(option)}
              className={cn(
                "mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                theme === option
                  ? "bg-brand-100 text-heading"
                  : "text-body hover:bg-brand-50",
              )}
            >
              {themeLabels[option]}
              {theme === option && (
                <span className="text-xs text-accent-500">Active</span>
              )}
            </button>
          ))}
          <p className="mt-2 px-2 text-[10px] leading-relaxed text-muted">
            New visitors are split 50/50 automatically. Use this to preview both.
          </p>
        </div>
      )}
    </div>
  );
}

export const THEME_COOKIE = "napshine-theme";

export type SiteTheme = "turquoise" | "gold";

export const themeLabels: Record<SiteTheme, string> = {
  turquoise: "Turquoise & Yellow",
  gold: "Black & Gold",
};

export function isSiteTheme(value: string | undefined | null): value is SiteTheme {
  return value === "turquoise" || value === "gold";
}

export function pickAbTheme(): SiteTheme {
  return Math.random() < 0.5 ? "turquoise" : "gold";
}

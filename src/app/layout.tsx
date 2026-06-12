import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Syne } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site";
import { isSiteTheme, type SiteTheme } from "@/config/themes";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBar } from "@/components/layout/mobile-bar";
import { LazyChatbot } from "@/components/chatbot/lazy-chatbot";
import { ThemePreviewSwitcher } from "@/components/theme/theme-preview-switcher";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Residential & Commercial Cleaning GTA`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cleaning services Toronto",
    "house cleaning GTA",
    "commercial cleaning Mississauga",
    "deep cleaning Toronto",
    "move out cleaning GTA",
    "office cleaning Toronto",
    "Napshine Cleaning Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("napshine-theme")?.value;
  const theme: SiteTheme = isSiteTheme(cookieTheme) ? cookieTheme : "turquoise";

  return (
    <html lang="en-CA" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${syne.variable} antialiased pb-20 md:pb-0`}
      >
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <LazyChatbot />
        <ThemePreviewSwitcher />
        <Analytics />
      </body>
    </html>
  );
}

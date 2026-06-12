import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer-themed border-t text-body">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Residential and commercial cleaning across the Greater Toronto
              Area.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent-400"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent-400"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-accent-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-divider mt-10 border-t pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

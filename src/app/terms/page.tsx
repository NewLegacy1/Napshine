import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-heading">Terms of Service</h1>
      <p className="mt-4 text-body">
        Quotes provided by {siteConfig.name} are estimates based on information
        you supply. Final pricing is confirmed before service begins.
        Cancellations require 24-hour notice where possible.
      </p>
      <p className="mt-4 text-body">
        Contact us at{" "}
        <a href={`tel:${siteConfig.phone}`} className="text-brand-700 underline">
          {siteConfig.phoneDisplay}
        </a>{" "}
        with any questions.
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-700 font-semibold hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}

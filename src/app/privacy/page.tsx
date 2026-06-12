import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-heading">Privacy Policy</h1>
      <p className="mt-4 text-body">
        {siteConfig.name} respects your privacy. Information submitted through
        our quote form is used only to respond to your cleaning service request.
        We do not sell your personal information.
      </p>
      <p className="mt-4 text-body">
        For questions, contact{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline">
          {siteConfig.email}
        </a>
        .
      </p>
      <Link href="/" className="mt-8 inline-block text-brand-700 font-semibold hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}

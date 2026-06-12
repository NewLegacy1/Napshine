import { siteConfig } from "@/config/site";

export function ValueSection() {
  return (
    <section className="section-base py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-heading sm:text-4xl">
              Your Space Deserves More Than a Quick Wipe
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Dust, grime, and daily wear add up fast — especially in busy GTA
              homes and high-traffic offices. A surface-level clean doesn&apos;t
              protect your health, your deposit, or your professional image.
            </p>
            <p className="mt-4 text-body">
              Trusted by homeowners and businesses across the GTA.
            </p>
          </div>
          <blockquote className="rounded-3xl card-themed border p-8 shadow-lg shadow-brand-900/5">
            <p className="text-lg italic leading-relaxed text-body">
              &ldquo;We treat every home and workspace like it&apos;s our own —
              no shortcuts, no missed corners, and no surprises on pricing.&rdquo;
            </p>
            <footer className="mt-6 font-semibold text-accent-500">
              — {siteConfig.ownerName}, {siteConfig.name}
            </footer>
            <p className="mt-2 text-sm font-semibold text-accent-600">
              The Napshine Standard
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

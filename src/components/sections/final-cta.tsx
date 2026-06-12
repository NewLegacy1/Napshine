import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="hero-gradient py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready for a Cleaner Home or Office?
        </h2>
        <p className="mt-4 text-lg text-on-hero-muted">
          Join GTA homeowners and businesses who trust Napshine for reliable,
          spotless results.
        </p>
        <p className="mt-4 text-sm font-semibold text-accent-400">
          Residential cleaning from ${siteConfig.pricing.residentialFrom} · Deep
          cleans from ${siteConfig.pricing.deepCleanFrom} · Commercial quotes
          custom
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#quote">
            <Button size="lg">Get a Free Quote</Button>
          </a>
          <a href={`tel:${siteConfig.phone}`}>
            <Button variant="secondary" size="lg">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

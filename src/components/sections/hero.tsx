import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const stats = [
  { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
  { value: siteConfig.stats.spacesCleaned, label: "Spaces Cleaned" },
  { value: siteConfig.stats.satisfactionFocus, label: "Satisfaction Focus" },
  { value: siteConfig.stats.googleRating, label: "Google Reviews" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden text-white md:items-center">
      <Image
        src="/images/hero-mobile.png"
        alt=""
        fill
        priority
        className="hero-bg-image hero-bg-image-mobile md:hidden"
        sizes="100vw"
        aria-hidden
      />
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="hero-bg-image hidden md:block"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-[var(--btn-radius)] border border-accent-400/40 bg-black/30 px-4 py-1.5 text-sm font-medium text-accent-300 backdrop-blur-md">
            GTA Residential & Commercial Cleaning
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-hero-muted">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#quote">
              <Button size="lg">Get a Free Quote</Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="secondary" size="lg">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-black/25 px-3 py-4 text-center backdrop-blur-md"
              >
                <dt className="text-2xl font-bold text-accent-400">{stat.value}</dt>
                <dd className="mt-1 text-xs text-on-hero-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

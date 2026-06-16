import Image from "next/image";
import { Phone, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const trustStats = [
  { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
  { value: siteConfig.stats.spacesCleaned, label: "Spaces Cleaned" },
  { value: siteConfig.stats.satisfactionFocus, label: "Satisfaction Focus" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden text-white">
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

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 sm:text-sm">
          GTA Residential &amp; Commercial Cleaning
        </p>

        <h1 className="mt-5">
          <span className="block text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
            SPOTLESS
          </span>
          <span className="mt-2 block text-4xl font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl">
            SPACES DELIVERED
          </span>
        </h1>

        <dl className="hero-trust-stats mt-10 flex w-full max-w-lg justify-between gap-3 sm:max-w-xl sm:gap-6">
          {trustStats.map((stat) => (
            <div key={stat.label} className="min-w-0 flex-1">
              <dt className="hero-trust-value text-xl font-bold sm:text-2xl">{stat.value}</dt>
              <dd className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-wide text-on-hero-muted sm:text-xs">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-accent-400 text-accent-400 sm:h-5 sm:w-5"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-on-hero-muted sm:text-base">
            {siteConfig.stats.googleReviewCount} 5-Star Google Reviews
          </p>
        </div>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a href="#quote" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Get a Free Quote
            </Button>
          </a>
          <a href={`tel:${siteConfig.phone}`} className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

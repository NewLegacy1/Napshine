import Image from "next/image";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ServiceAreaSection() {
  return (
    <section id="areas" className="footer-themed py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <MapPin className="mx-auto h-10 w-10 text-accent-400" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Proudly Serving the GTA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Not sure if we cover your area? Request a quote — we&apos;ll confirm
            availability fast.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-accent-400/25 shadow-2xl shadow-black/40">
          <Image
            src="/images/gta-map.png"
            alt="Map of the Greater Toronto Area showing Napshine service coverage from Oakville to Oshawa"
            width={768}
            height={768}
            className="h-auto w-full"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <p className="text-sm font-semibold text-accent-300">
              Toronto · Peel · York · Durham · Halton
            </p>
            <p className="mt-1 text-xs text-on-hero-muted">
              Residential & commercial cleaning across the full GTA
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {siteConfig.serviceAreas.map((city) => (
            <span
              key={city}
              className="rounded-[var(--btn-radius)] border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:text-sm"
            >
              {city}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-on-hero-muted">
          Map data ©{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-2 hover:text-accent-300"
          >
            OpenStreetMap
          </a>{" "}
          contributors
        </p>
      </div>
    </section>
  );
}

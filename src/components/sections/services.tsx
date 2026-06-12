import { addOns, services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section id="services" className="section-base py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="accent-bar" />
            <h2 className="text-2xl font-bold text-heading sm:text-3xl">
              Cleaning That Fits Your Space
            </h2>
          </div>
          <p className="max-w-md text-sm text-body sm:text-right">
            Residential and commercial packages — custom quotes for every job.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative flex flex-col rounded-2xl card-themed border p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {service.popular && (
                <span className="absolute -top-2.5 right-4 rounded-[var(--btn-radius)] bg-accent-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-950">
                  Popular
                </span>
              )}

              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none" aria-hidden>
                  {service.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-700">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <ul className="mt-3 space-y-1 border-t border-brand-100 pt-3 text-xs text-body">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex gap-1.5">
                    <span className="shrink-0 font-bold text-accent-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-brand-100 pt-3">
                <p className="text-xs font-semibold text-brand-800">
                  {service.priceLabel}
                </p>
                <a href={`#quote?service=${service.id}`} className="shrink-0">
                  <Button size="sm" className="px-4 py-2 text-xs">
                    Quote
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-t border-brand-100 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Add-ons:
          </span>
          {addOns.map((addon) => (
            <span
              key={addon}
              className="chip-themed rounded-[var(--btn-radius)] border px-2 py-0.5 text-xs font-medium"
            >
              {addon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

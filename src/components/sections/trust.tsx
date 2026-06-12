import { CheckCircle2, Leaf, Shield, Star } from "lucide-react";
import { trustPillars } from "@/lib/data";

const icons = {
  shield: Shield,
  leaf: Leaf,
  check: CheckCircle2,
  star: Star,
};

export function TrustSection() {
  return (
    <section className="section-base py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading sm:text-4xl">
          Why Choose Napshine
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <article
                key={pillar.title}
                className="card-themed rounded-2xl border p-6 text-center shadow-sm"
              >
                <div className="icon-circle-themed mx-auto flex h-14 w-14 items-center justify-center rounded-full">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-bold text-heading">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

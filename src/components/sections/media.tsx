import { Play } from "lucide-react";

export function MediaSection() {
  return (
    <section className="footer-themed py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">See Napshine in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Real teams. Real results. Homes and offices across the GTA.
          </p>
        </div>
        <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-3xl border-2 border-accent-400/25 bg-gradient-to-br from-brand-900 to-brand-950">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent-400/40 bg-accent-400/15 backdrop-blur-sm">
              <Play className="h-10 w-10 fill-accent-400 text-accent-400" />
            </div>
            <p className="text-sm text-on-hero-muted">
              Team video coming soon — owner photos can replace this placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

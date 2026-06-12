"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="reviews" className="section-tinted py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="accent-bar mx-auto" />
          <div className="flex justify-center gap-1 text-accent-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="mt-2 text-3xl font-bold text-brand-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative mt-10 rounded-3xl card-themed border p-8 shadow-lg shadow-brand-900/5 sm:p-10">
          <blockquote className="text-lg leading-relaxed text-body">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <footer className="mt-6 flex items-center gap-4">
            <div className="avatar-themed flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
              {current.initial}
            </div>
            <div>
              <p className="font-semibold text-heading">{current.name}</p>
              <p className="text-sm text-muted">{current.location}</p>
            </div>
          </footer>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent-500" : "w-2 bg-brand-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() =>
                  setIndex(
                    (current) =>
                      (current - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="rounded-full border border-brand-200 p-2 text-brand-700 hover:bg-brand-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() =>
                  setIndex((current) => (current + 1) % testimonials.length)
                }
                className="rounded-full border border-brand-200 p-2 text-brand-700 hover:bg-brand-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

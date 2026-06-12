"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { beforeAfterProjects } from "@/lib/data";

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
}: {
  beforeImage: string;
  afterImage: string;
  alt: string;
}) {
  const [position, setPosition] = useState(50);

  const handleMove = useCallback((clientX: number, rect: DOMRect) => {
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-2xl border border-brand-200 bg-brand-100"
      onPointerDown={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
      }}
    >
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`${alt} — after cleaning`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-800">
            After
          </span>
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} — before cleaning`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
            Before
          </span>
        </div>
      </div>
      <div
        className="absolute inset-y-0 z-10 w-1 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-800 shadow-md">
          ↔
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="section-tinted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
            See The Transformation
          </h2>
          <p className="mt-4 text-body">
            Drag the line to reveal before & after — real Napshine results.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
          {beforeAfterProjects.map((project) => (
            <article key={project.title}>
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                alt={project.title}
              />
              <h3 className="mt-4 font-bold text-brand-900">{project.title}</h3>
              <p className="text-sm text-body">{project.caption}</p>
              <p className="mt-1 text-sm font-semibold text-brand-700">
                {project.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

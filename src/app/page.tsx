import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ServicesSection } from "@/components/sections/services";
import { MediaSection } from "@/components/sections/media";
import { ValueSection } from "@/components/sections/value";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { TrustSection } from "@/components/sections/trust";
import { ServiceAreaSection } from "@/components/sections/service-area";
import { QuoteFormSection } from "@/components/sections/quote-form";
import { FaqSection } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <MediaSection />
      <ValueSection />
      <TrustSection />
      <ServiceAreaSection />
      <Suspense fallback={null}>
        <QuoteFormSection />
      </Suspense>
      <FaqSection />
    </>
  );
}

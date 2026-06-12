import { siteConfig } from "@/config/site";

export const testimonials = [
  {
    quote:
      "Napshine transformed our home before we listed it for sale. Every corner was spotless — bathrooms, baseboards, even inside the oven. They showed up on time, were respectful of our space, and the price was exactly what they quoted.",
    name: "Sarah M.",
    location: "Mississauga",
    initial: "S",
  },
  {
    quote:
      "We use Napshine for our office every week. Reliable, professional, and our team always comments on how fresh the space feels. Having one dedicated contact makes scheduling easy.",
    name: "James T.",
    location: "Toronto",
    initial: "J",
  },
  {
    quote:
      "Move-out cleaning was stress-free. They handled everything our landlord checklist required and we got our full deposit back. Highly recommend for anyone moving in the GTA.",
    name: "Priya K.",
    location: "Brampton",
    initial: "P",
  },
] as const;

export const services = [
  {
    id: "residential",
    icon: "🏠",
    title: "Residential Cleaning",
    subtitle: "Everyday & recurring home care",
    popular: true,
    description:
      "Keep your home fresh with regular maintenance or a one-time reset. Perfect for houses, condos, and apartments.",
    features: [
      "Dusting, vacuuming, and mopping",
      "Kitchen and bathroom sanitization",
      "Surface wipe-downs and tidying",
      "Eco-friendly products available",
    ],
    priceLabel: `Starting from $${siteConfig.pricing.residentialFrom}/visit`,
  },
  {
    id: "deep-clean",
    icon: "✨",
    title: "Deep Cleaning",
    subtitle: "Top-to-bottom reset",
    popular: false,
    description:
      "For first visits, seasonal refreshes, or homes that need extra attention.",
    features: [
      "Baseboards, fixtures, and detail work",
      "Inside appliances (upon request)",
      "Grout, buildup, and high-touch areas",
      "Move-in / move-out available",
    ],
    priceLabel: `Starting from $${siteConfig.pricing.deepCleanFrom}`,
  },
  {
    id: "commercial",
    icon: "🏢",
    title: "Commercial & Office Cleaning",
    subtitle: "Professional spaces, inspection-ready",
    popular: false,
    description:
      "Offices, retail, clinics, and property management — scheduled around your business hours.",
    features: [
      "Daily, weekly, or custom schedules",
      "Restrooms, break rooms, and common areas",
      "Touch-point disinfection",
      "Dedicated account contact",
    ],
    priceLabel: "Custom quote based on square footage",
  },
] as const;

export const addOns = [
  "Move-In/Out",
  "Post-Construction",
  "Carpet & Upholstery",
  "Window Cleaning",
  "Airbnb Turnover",
] as const;

export const beforeAfterProjects = [
  {
    title: "Condo move-out",
    caption: "Kitchen and bathroom deep clean",
    price: `from $${siteConfig.pricing.moveOutFrom}`,
    beforeImage: "/images/before-condo.png",
    afterImage: "/images/after-condo.png",
  },
  {
    title: "Office refresh",
    caption: "Reception + workstations",
    price: "Custom quote",
    beforeImage: "/images/before-office.png",
    afterImage: "/images/after-office.png",
  },
] as const;

export const trustPillars = [
  {
    title: "Vetted Professionals",
    description:
      "Background-checked, trained cleaners who respect your home and privacy.",
    icon: "shield",
  },
  {
    title: "Eco-Friendly Options",
    description:
      "Safe, non-toxic products available on request — great for families and pets.",
    icon: "leaf",
  },
  {
    title: "Fully Insured",
    description:
      "Your property is protected. Peace of mind on every visit.",
    icon: "check",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with a specific area? Tell us within 24 hours and we'll make it right.",
    icon: "star",
  },
] as const;

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the full GTA including Toronto, Mississauga, Brampton, Vaughan, Markham, and surrounding communities. Request a quote to confirm your location.",
  },
  {
    question: "What's included in a standard clean vs. a deep clean?",
    answer:
      "Standard covers maintenance tasks (dusting, vacuuming, mopping, kitchen/bath). Deep clean adds detail work like baseboards, buildup removal, and optional inside-appliance cleaning.",
  },
  {
    question: "How much does cleaning cost?",
    answer: `Pricing depends on home size, condition, and service type. Residential standard cleans typically start around $${siteConfig.pricing.residentialFrom} in the GTA; deep cleans from $${siteConfig.pricing.deepCleanFrom}. We provide a custom quote before any work begins.`,
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. We bring professional-grade supplies. Eco-friendly products are available on request.",
  },
  {
    question: "Are your cleaners background-checked and insured?",
    answer:
      "Yes. Every team member is vetted and we carry insurance for your protection.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill out the form on this page, call us, or use the chat assistant. We'll respond with options and pricing.",
  },
  {
    question: "Do you offer commercial and office cleaning?",
    answer:
      "Yes. We serve offices, retail, clinics, and property management with flexible scheduling.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice is requested for reschedules.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes. Contact us within 24 hours if anything isn't right and we'll re-clean the area at no extra charge.",
  },
] as const;

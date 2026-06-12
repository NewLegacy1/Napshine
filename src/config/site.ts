export const siteConfig = {
  name: "Napshine Cleaning Solutions",
  tagline: "Spotless Spaces. Delivered.",
  description:
    "Professional residential and commercial cleaning across the GTA — eco-friendly products, vetted teams, and results you can see.",
  url: "https://napshine.ca",
  phone: "+14165550100",
  phoneDisplay: "(416) 555-0100",
  email: "hello@napshine.ca",
  ownerName: "Napshine Team",
  responseTime: "1 business hour",
  stats: {
    yearsExperience: "5+",
    spacesCleaned: "500+",
    satisfactionFocus: "100%",
    googleRating: "5-Star",
  },
  pricing: {
    residentialFrom: 150,
    deepCleanFrom: 250,
    moveOutFrom: 360,
    homeDeepFrom: 450,
  },
  serviceAreas: [
    "Toronto",
    "North York",
    "Scarborough",
    "Etobicoke",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Pickering",
    "Ajax",
    "Whitby",
    "Oshawa",
    "Burlington",
  ],
  social: {
    googleReviewsUrl: "#reviews",
  },
} as const;

export type ServiceType =
  | "residential"
  | "deep-clean"
  | "move-in-out"
  | "commercial"
  | "post-construction"
  | "other";

export const serviceTypeLabels: Record<ServiceType, string> = {
  residential: "Residential Cleaning",
  "deep-clean": "Deep Clean",
  "move-in-out": "Move-In/Out",
  commercial: "Commercial/Office",
  "post-construction": "Post-Construction",
  other: "Other",
};

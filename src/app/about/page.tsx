import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Bagheera Cafe & Lounge — Hudson Lane's jungle-luxe escape. Born from a passion for bold flavors, live music, and unforgettable experiences in GTB Nagar, Delhi.",
  openGraph: {
    title: "About Us | Bagheera Cafe & Lounge",
    description:
      "The legend of Bagheera — where the wild meets the sophisticated in North Delhi's premier jungle-themed lounge.",
    url: `https://${BUSINESS_CONFIG.domain}/about`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

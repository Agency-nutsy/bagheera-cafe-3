import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Bagheera Delhi | Hudson Lane, Delhi",
  description:
    "Bagheera Delhi — North Delhi's premier jungle-themed restaurant and lounge on Hudson Lane, GTB Nagar. Experience signature cocktails, multicuisine dishes, and live DJ nights.",
  openGraph: {
    title: "Bagheera Delhi | Hudson Lane, Delhi",
    description:
      "Step into the wild side of luxury. Signature flavors, exotic cocktails, and an electric lounge experience at Hudson Lane.",
    url: `https://${BUSINESS_CONFIG.domain}`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}`,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

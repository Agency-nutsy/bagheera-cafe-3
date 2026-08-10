import type { Metadata } from "next";
import SheeshaPageClient from "@/app/sheesha/SheeshaPageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Sheesha Menu",
  description:
    "Explore Bagheera's full Sheesha & Hookah menu — fruity, minty, signature fusion flavours and hookah series starting at ₹1,499. Premium hookah experience at Hudson Lane, GTB Nagar, Delhi.",
  openGraph: {
    title: "Sheesha Menu | Bagheera Delhi",
    description:
      "From Double Apple to our signature Midnight Magic blend — premium sheesha with ice, fruit and cocktail base upgrades at Hudson Lane, GTB Nagar.",
    url: `https://${BUSINESS_CONFIG.domain}/sheesha`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}/sheesha`,
  },
};

export default function SheeshaPage() {
  return <SheeshaPageClient />;
}

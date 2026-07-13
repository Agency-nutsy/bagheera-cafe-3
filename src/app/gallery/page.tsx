import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Go inside Bagheera Cafe & Lounge — browse our photo gallery of signature food, exotic cocktails, forest-inspired decor, and electric DJ nights at Hudson Lane, Delhi.",
  openGraph: {
    title: "Gallery | Bagheera Cafe & Lounge",
    description:
      "Exquisite flavors, untamed vibes, and unforgettable nights — inside the jungle at Hudson Lane.",
    url: `https://${BUSINESS_CONFIG.domain}/gallery`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}/gallery`,
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}

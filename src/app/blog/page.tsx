import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Blog | Tales from the Jungle",
  description:
    "Stories, flavors, and the wild side of Hudson Lane. Read insider guides on signature dishes, jungle-luxe interior design, DJ nights, and food culture at Bagheera Delhi.",
  openGraph: {
    title: "Blog | Bagheera Delhi",
    description:
      "Tales from the Jungle — explore signature recipes, cocktail secrets, and nightlife stories from GTB Nagar's premier jungle-themed lounge.",
    url: `https://${BUSINESS_CONFIG.domain}/blog`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}/blog`,
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}

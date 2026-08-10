import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const dynamic = "force-static";

import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bagheera Delhi, Hudson Lane. Call or WhatsApp to book your table, inquire about private events, or get directions to our GTB Nagar location in New Delhi.",
  openGraph: {
    title: "Contact Us | Bagheera Delhi",
    description:
      "Ready to step into the jungle? Book a table, WhatsApp us, or visit us at 2529, Hudson Lane, GTB Nagar, New Delhi.",
    url: `https://${BUSINESS_CONFIG.domain}/contact`,
  },
  alternates: {
    canonical: `https://${BUSINESS_CONFIG.domain}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

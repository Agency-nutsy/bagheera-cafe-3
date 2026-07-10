import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bagheera Cafe & Lounge | Hudson Lane, Delhi",
  description:
    "Bagheera Cafe & Lounge — North Delhi's premier jungle-themed restaurant and lounge on Hudson Lane, GTB Nagar. Experience signature cocktails, multicuisine dishes, and live DJ nights.",
  openGraph: {
    title: "Bagheera Cafe & Lounge | Hudson Lane, Delhi",
    description:
      "Step into the wild side of luxury. Signature flavors, exotic cocktails, and an electric lounge experience at Hudson Lane.",
    url: "https://bagheeracafeandlounge.in",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

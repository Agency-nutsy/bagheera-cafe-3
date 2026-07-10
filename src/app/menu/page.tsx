import type { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore Bagheera's full Food & Bar menu — from tandoori starters and main course to signature cocktails, beers, wines, and mocktails. Something for every mood at Hudson Lane.",
  openGraph: {
    title: "Our Menu | Bagheera Cafe & Lounge",
    description:
      "Browse our complete food menu and bar menu. From Momos to Single Malts, Biryani to Bagheera Cocktails — all at Hudson Lane, GTB Nagar.",
    url: "https://bagheeracafeandlounge.in/menu",
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}

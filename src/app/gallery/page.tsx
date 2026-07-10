import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Go inside Bagheera Cafe & Lounge — browse our photo gallery of signature food, exotic cocktails, forest-inspired decor, and electric DJ nights at Hudson Lane, Delhi.",
  openGraph: {
    title: "Gallery | Bagheera Cafe & Lounge",
    description:
      "Exquisite flavors, untamed vibes, and unforgettable nights — inside the jungle at Hudson Lane.",
    url: "https://bagheeracafeandlounge.in/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}

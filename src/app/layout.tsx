import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import AppShell from "@/components/AppShell";
import bagheeraLogo from "@/assets/bagheera logo.png";
import "./globals.css";

// ── GOOGLE FONTS via next/font (no layout shift, self-hosted) ──
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

// ── SITE-WIDE SEO DEFAULTS ──
export const metadata: Metadata = {
  metadataBase: new URL("https://bagheeracafeandlounge.in"),
  title: {
    default: "Bagheera Cafe & Lounge | Hudson Lane, Delhi",
    template: "%s | Bagheera Cafe & Lounge",
  },
  description:
    "Experience the wild side of luxury at Bagheera Cafe & Lounge — North Delhi's premier jungle-themed restaurant and lounge on Hudson Lane, GTB Nagar. Signature cocktails, multicuisine menu, live DJ.",
  keywords: [
    "Bagheera Cafe",
    "Hudson Lane",
    "best cafe Delhi",
    "GTB Nagar lounge",
    "multicuisine menu Delhi",
    "North Delhi restaurant",
    "jungle themed cafe",
    "live DJ Delhi",
    "Bagheera Cafe and Lounge",
  ],
  authors: [{ name: "Bagheera Cafe & Lounge" }],
  creator: "Bagheera Cafe & Lounge",
  publisher: "Bagheera Cafe & Lounge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bagheeracafeandlounge.in",
    siteName: "Bagheera Cafe & Lounge",
    title: "Bagheera Cafe & Lounge | Hudson Lane, Delhi",
    description:
      "Step into the jungle. Authentic flavors and signature cocktails at Hudson Lane, GTB Nagar, New Delhi.",
    images: [
      {
        url: bagheeraLogo.src,
        width: 1200,
        height: 630,
        alt: "Bagheera Cafe & Lounge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagheera Cafe & Lounge",
    description: "Step into the jungle. Authentic flavors and signature cocktails at Hudson Lane.",
    images: [bagheeraLogo.src],
  },
  icons: {
    icon: bagheeraLogo.src,
    shortcut: bagheeraLogo.src,
    apple: bagheeraLogo.src,
  },
};

// ── VIEWPORT (must be exported separately in Next.js 15) ──
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F0D",
};

// ── JSON-LD RESTAURANT SCHEMA ──
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bagheera Cafe & Lounge",
  image: "https://bagheeracafeandlounge.in/bagheera-logo.png",
  url: "https://bagheeracafeandlounge.in",
  servesCuisine: ["Multicuisine", "North Indian", "Chinese", "Italian"],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2529, 2nd Floor, Hudson Lane, GTB Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110009",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6946494,
    longitude: 77.2042514,
  },
  telephone: "+91-09910192252",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "11:00",
      closes: "01:00",
    },
  ],
  hasMenu: "https://bagheeracafeandlounge.in/menu",
  sameAs: [
    "https://www.instagram.com/bagheeracafelounge",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <AppShell>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </AppShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

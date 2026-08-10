import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import AppShell from "@/components/AppShell";
import { BUSINESS_CONFIG } from "@/config/business";
import bagheeraLogo from "@/assets/bagheera logo.png";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS_CONFIG.domain}`),
  title: {
    default: "Bagheera Delhi | Hudson Lane, Delhi",
    template: "%s | Bagheera Delhi",
  },
  description:
    "Experience the wild side of luxury at Bagheera Delhi — North Delhi's premier jungle-themed restaurant and lounge on Hudson Lane, GTB Nagar. Signature cocktails, multicuisine menu, live DJ.",
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
  authors: [{ name: "Bagheera Delhi" }],
  creator: "Bagheera Delhi",
  publisher: "Bagheera Delhi",
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
    url: `https://${BUSINESS_CONFIG.domain}`,
    siteName: BUSINESS_CONFIG.name,
    title: `${BUSINESS_CONFIG.name} | Hudson Lane, Delhi`,
    description: BUSINESS_CONFIG.description,
    // og:image is auto-injected by src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_CONFIG.name,
    description: BUSINESS_CONFIG.description,
    // twitter:image is auto-injected by src/app/twitter-image.tsx
  },
  // TODO: Replace this with the actual client's GSC token before going live
  verification: {
    google: "xtBtDujpJR1-SPp3PlmIlGlZ2ytEvc3_f27JP2Cr_Go",
  },
  icons: {
    icon: encodeURI(bagheeraLogo.src),
    shortcut: encodeURI(bagheeraLogo.src),
    apple: encodeURI(bagheeraLogo.src),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F0D",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS_CONFIG.name,
  image: `https://${BUSINESS_CONFIG.domain}/bagheera-logo.png`,
  url: `https://${BUSINESS_CONFIG.domain}`,
  servesCuisine: BUSINESS_CONFIG.seo.cuisine,
  priceRange: BUSINESS_CONFIG.seo.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_CONFIG.address.street,
    addressLocality: BUSINESS_CONFIG.address.city,
    addressRegion: BUSINESS_CONFIG.address.state,
    postalCode: BUSINESS_CONFIG.address.zip,
    addressCountry: BUSINESS_CONFIG.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_CONFIG.coordinates.latitude,
    longitude: BUSINESS_CONFIG.coordinates.longitude,
  },
  telephone: BUSINESS_CONFIG.contact.phoneDisplay,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_CONFIG.hours.days,
      opens: BUSINESS_CONFIG.hours.open,
      closes: BUSINESS_CONFIG.hours.close,
    },
  ],
  hasMenu: `https://${BUSINESS_CONFIG.domain}/menu`,
  sameAs: [
    BUSINESS_CONFIG.social.instagram,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground" suppressHydrationWarning>
        <AppShell>
          <div className="flex flex-col min-h-screen overflow-x-hidden relative w-full">
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
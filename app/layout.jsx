import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krbi-website.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manufacturing Business Intelligence Consulting | Kettle River BI",
    template: "%s | Kettle River BI",
  },
  description:
    "Kettle River BI aligns Finance, Operations, and IT around one set of numbers. Data governance, Power BI dashboards, and accountability structures for manufacturers.",
  keywords: [
    "manufacturing business intelligence",
    "data governance manufacturing",
    "Power BI consulting",
    "KPI dashboards",
    "food manufacturing analytics",
    "loss and waste reduction",
  ],
  openGraph: {
    type: "website",
    siteName: "Kettle River BI",
    title: "Manufacturing Business Intelligence Consulting | Kettle River BI",
    description:
      "Finance, Operations, and IT finally agree. Kettle River BI aligns manufacturers around one truth and drives measurable outcomes.",
    images: [{ url: "/images/01-homepage-hero.png", width: 1376, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/krbi-logo.png",
    apple: "/krbi-logo.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kettle River Business Intelligence",
  alternateName: "Kettle River BI",
  url: siteUrl,
  logo: `${siteUrl}/krbi-logo.png`,
  email: "mitch@kettleriverbi.com",
  telephone: "+1-503-523-9777",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kettle Falls",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: "United States",
  description:
    "Fractional BI analyst and project manager for manufacturers. Data governance, KPI dashboards, and organizational alignment.",
  slogan: "business mastery through business intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

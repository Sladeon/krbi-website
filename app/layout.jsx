import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

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
  alternates: { canonical: "/" },
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
    images: [{ url: "/images/hero-home.jpg", width: 1920, height: 1080 }],
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
  email: "info@kettleriverbi.com",
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
  founder: {
    "@type": "Person",
    name: "Mitch Cauthron",
    jobTitle: "Founder & Principal",
    description:
      "Accountant by training with 15+ years across healthcare, food manufacturing (Tillamook, Oregon Ice Cream), and heavy civil construction. Power BI and SQL practitioner working the seam between Finance, Operations, and IT.",
    alumniOf: "Accounting and Business Administration, 2010",
    knowsAbout: [
      "Power BI",
      "SQL",
      "manufacturing cost accounting",
      "data governance",
      "budgeting and forecasting automation",
      "inventory cycle counting",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CursorGlow />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

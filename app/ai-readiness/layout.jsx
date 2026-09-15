export const metadata = {
  title: "AI Readiness for Manufacturers",
  description:
    "You can't put an AI on numbers your own departments don't agree on. What AI-ready operations data looks like, a free ten-question readiness checklist, and the field description standard KRBI applies to every Power BI model.",
  alternates: { canonical: "/ai-readiness" },
  openGraph: {
    title: "AI Readiness for Manufacturers | Kettle River BI",
    description:
      "Before you connect Copilot, Claude, or an AI agent to your operations data, the data has to agree with itself. Here is what ready looks like.",
    images: [{ url: "/images/hero-insights.jpg" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Readiness Assessment for Manufacturers",
  serviceType: "Data readiness assessment for AI and analytics",
  provider: {
    "@type": "ProfessionalService",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  areaServed: "United States",
  audience: { "@type": "Audience", audienceType: "Manufacturing executives" },
  description:
    "A two-week, fixed-price assessment that scores a manufacturer's operations data on the four things an AI assistant depends on: agreed metric definitions, one source per metric, documented field descriptions, and governed access. Delivered with a prioritized fix list.",
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "USD",
    description: "AI Readiness Assessment, two weeks, fixed price, credited against a Foundation Build signed within 90 days.",
  },
};

export default function AiReadinessLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}

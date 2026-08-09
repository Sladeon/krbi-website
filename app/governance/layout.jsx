export const metadata = {
  title: "Data Governance for Manufacturers",
  description:
    "Data does not fail. Definitions do. KRBI aligns Finance, Operations, and IT on metric definitions, sources of truth, and ownership before anything gets built.",
  alternates: { canonical: "/governance" },
  openGraph: {
    title: "Data Governance for Manufacturers | Kettle River BI",
    description:
      "Align Finance, Operations, and IT on metric definitions, sources of truth, and ownership.",
    images: [{ url: "/images/hero-governance.jpg" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Governance for Manufacturers",
  serviceType: "Data governance consulting",
  provider: {
    "@type": "ProfessionalService",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  areaServed: "United States",
  audience: { "@type": "Audience", audienceType: "Manufacturing executives" },
  description:
    "Three-part data governance framework for manufacturers: alignment on metric definitions, quantification against a single source of truth, and named ownership with a review cadence.",
};

export default function GovernanceLayout({ children }) {
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

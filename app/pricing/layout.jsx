export const metadata = {
  title: "Pricing: What Fractional BI Costs",
  description:
    "Fixed-price business intelligence for manufacturers. A $5,000 two-week data health assessment, a $35K-$55K foundation build priced from its findings, and managed intelligence at $3,500 a month. No hourly billing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing: What Fractional BI Costs | Kettle River BI",
    description:
      "A $5,000 assessment, a $35K-$55K foundation build, and $3,500/mo managed intelligence. Fixed price, fixed timeline, no hourly billing.",
    images: [{ url: "/images/hero-pricing.jpg" }],
  },
};

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional Business Intelligence for Manufacturers",
  serviceType: "Fractional BI analyst and data governance consulting",
  provider: {
    "@type": "ProfessionalService",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  areaServed: "United States",
  audience: { "@type": "Audience", audienceType: "Manufacturing executives" },
  description:
    "Fixed-price business intelligence delivered in three stages: a two-week data health assessment, a 30 to 45 day foundation build of a governed data layer and standard dashboard set, and an ongoing managed intelligence retainer. Kettle River BI does not bill hourly.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kettle River BI engagement ladder",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Data Health Assessment",
        description:
          "A two-week fixed-fee diagnostic of your data, systems, definitions, and reporting estate. Produces a findings report, a scored rubric, and a recommendation. The fee is credited against a foundation build signed within 90 days.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: 5000,
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
        itemOffered: {
          "@type": "Service",
          name: "Data Health Assessment",
          serviceType: "Data and reporting assessment",
        },
      },
      {
        "@type": "Offer",
        name: "Foundation Build",
        description:
          "A 30 to 45 day fixed-price build of a governed data layer plus a standard dashboard set. The price is set from the assessment findings rather than estimated in advance.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 35000,
          maxPrice: 55000,
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
        itemOffered: {
          "@type": "Service",
          name: "Foundation Build",
          serviceType: "Business intelligence implementation",
        },
      },
      {
        "@type": "Offer",
        name: "Managed Intelligence",
        description:
          "An ongoing monthly retainer covering data quality monitoring, model and report maintenance, and a monthly operations review call with the leadership team.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 3500,
          priceCurrency: "USD",
          unitCode: "MON",
          billingIncrement: 1,
          valueAddedTaxIncluded: false,
        },
        itemOffered: {
          "@type": "Service",
          name: "Managed Intelligence",
          serviceType: "Managed business intelligence",
        },
      },
    ],
  },
};

export default function PricingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      {children}
    </>
  );
}

export const metadata = {
  title: "Organizational Alignment & Actionable Insights",
  description:
    "Organizations act when they agree on the truth. KRBI surfaces the disagreements hiding in your data and turns them into shared definitions your leadership team acts on.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Organizational Alignment & Actionable Insights | Kettle River BI",
    description:
      "We surface the disagreements hiding in your data and turn them into shared definitions.",
    images: [{ url: "/images/hero-insights.jpg" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Organizational Alignment & Actionable Insights",
  serviceType: "Organizational data alignment consulting",
  provider: {
    "@type": "ProfessionalService",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  areaServed: "United States",
  audience: { "@type": "Audience", audienceType: "Manufacturing executives" },
  description:
    "Surfacing the disagreements hiding in manufacturing data and turning them into shared metric definitions with named ownership and a governance rhythm.",
};

export default function InsightsLayout({ children }) {
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

export const metadata = {
  title: "Power BI KPI Dashboards for Manufacturing",
  description:
    "Dashboards connected to accountability. KRBI builds Power BI KPI reporting where every metric has an owner, a cadence, and a decision it exists to force.",
  alternates: { canonical: "/dashboards" },
  openGraph: {
    title: "Power BI KPI Dashboards for Manufacturing | Kettle River BI",
    description:
      "KPI reporting where every metric has an owner, a cadence, and a decision it exists to force.",
    images: [{ url: "/images/hero-dashboards.jpg" }],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Power BI KPI Dashboards for Manufacturing",
  serviceType: "Business intelligence dashboard development",
  provider: {
    "@type": "ProfessionalService",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  areaServed: "United States",
  audience: { "@type": "Audience", audienceType: "Manufacturing executives" },
  description:
    "Power BI KPI reporting connected to accountability: start with the decision, work backward to the metric, and give every metric a named owner and review cadence.",
};

export default function DashboardsLayout({ children }) {
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

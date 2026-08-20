export const metadata = {
  title: "Case Study: 37.7% Less Loss and Waste at a Food Manufacturer",
  description:
    "How Kettle River BI aligned Finance, Operations, Sales, and Warehouse at Smith Brothers around one definition of loss and waste, driving a normalized 37.7% year-over-year reduction.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study: 37.7% Less Loss and Waste at a Food Manufacturer | Kettle River BI",
    description:
      "A normalized 37.7% year-over-year reduction in loss and waste. From siloed spreadsheets to one shared number.",
    images: [{ url: "/images/hero-case-study.jpg" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Siloed Spreadsheets to 37.7% Less Loss and Waste",
  description:
    "How Kettle River BI aligned Finance, Operations, Sales, and Warehouse at Smith Brothers, a packaged food manufacturer, around one definition of loss and waste. Result: a normalized 37.7% year-over-year reduction, measured like for like with commodity movement and a one-time acquisition write-off excluded.",
  author: {
    "@type": "Organization",
    name: "Kettle River Business Intelligence",
    url: "https://krbi-website.vercel.app",
  },
  about: [
    "manufacturing loss and waste reduction",
    "data governance",
    "inventory cycle counting",
    "Power BI reporting",
  ],
  image: "https://krbi-website.vercel.app/images/hero-case-study.jpg",
};

export default function CaseStudyLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {children}
    </>
  );
}

export const metadata = {
  title: "Case Study: $2M in Savings at a Food Manufacturer",
  description:
    "How Kettle River BI aligned Finance, Operations, Sales, and Warehouse at Smith Brothers around one definition of loss and waste, driving 30% YoY improvement in six months.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study: $2M in Savings at a Food Manufacturer | Kettle River BI",
    description:
      "30% YoY loss and waste improvement in six months. From siloed spreadsheets to one shared number.",
    images: [{ url: "/images/hero-case-study.jpg" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Siloed Spreadsheets to $2M in Measurable Savings",
  description:
    "How Kettle River BI aligned Finance, Operations, Sales, and Warehouse at Smith Brothers, a $50M packaged food manufacturer, around one definition of loss and waste: 30% YoY improvement and roughly $2M in annual savings in six months.",
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

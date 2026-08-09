export const metadata = {
  title: "Data Governance for Manufacturers",
  description:
    "Data does not fail. Definitions do. KRBI aligns Finance, Operations, and IT on metric definitions, sources of truth, and ownership before anything gets built.",
  alternates: { canonical: "/governance" },
  openGraph: {
    title: "Data Governance for Manufacturers | Kettle River BI",
    description:
      "Align Finance, Operations, and IT on metric definitions, sources of truth, and ownership.",
    images: [{ url: "/images/02-problem-visual.png" }],
  },
};

export default function GovernanceLayout({ children }) {
  return children;
}

export const metadata = {
  title: "Power BI KPI Dashboards for Manufacturing",
  description:
    "Dashboards connected to accountability. KRBI builds Power BI KPI reporting where every metric has an owner, a cadence, and a decision it exists to force.",
  alternates: { canonical: "/dashboards" },
  openGraph: {
    title: "Power BI KPI Dashboards for Manufacturing | Kettle River BI",
    description:
      "KPI reporting where every metric has an owner, a cadence, and a decision it exists to force.",
    images: [{ url: "/images/04-case-study-dashboard.png" }],
  },
};

export default function DashboardsLayout({ children }) {
  return children;
}

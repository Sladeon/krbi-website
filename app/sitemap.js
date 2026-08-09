const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krbi-website.vercel.app";

export default function sitemap() {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/governance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dashboards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/insights`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/case-study`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}

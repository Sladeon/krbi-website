import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /insights was a duplicate of the homepage method; it became the AI readiness page.
      { source: "/insights", destination: "/ai-readiness", permanent: true },
      // Legacy Webflow paths (kettleriverbi.com), live once the domain cuts over.
      { source: "/what-is-bi", destination: "/ai-readiness", permanent: true },
      { source: "/blog", destination: "/ai-readiness", permanent: true },
      { source: "/blog/:slug", destination: "/ai-readiness", permanent: true },
    ];
  },
};

export default nextConfig;

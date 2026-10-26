import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a static site into `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages serves the site under /airline-ops; the deploy workflow sets this.
  basePath: process.env.PAGES_BASE_PATH ?? "",
  // The default image optimizer needs a server, which static export doesn't have.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

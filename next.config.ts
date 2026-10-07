import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Old links to /resume go straight to the PDF.
  async redirects() {
    return [{ source: "/resume", destination: "/resume.pdf", permanent: false }];
  },
};

export default nextConfig;

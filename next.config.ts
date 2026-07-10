import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images are all local in /public — no remote patterns needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

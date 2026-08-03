import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.antaranews.com" },
      { protocol: "https", hostname: "img.antaranews.com" },
      { protocol: "https", hostname: "itdp-indonesia.org" },
    ],
  },
};

export default nextConfig;

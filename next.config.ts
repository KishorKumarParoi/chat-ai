import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1523458-5863992.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;

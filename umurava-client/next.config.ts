import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic optimization for deployment
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;

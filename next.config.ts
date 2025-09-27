import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Αγνόησε τα ESLint errors στο build (CI/production)
    ignoreDuringBuilds: true,
  },
  // Προαιρετικά: αγνόησε TypeScript errors στο build
  typescript: { ignoreBuildErrors: true },Ï
};

export default nextConfig;

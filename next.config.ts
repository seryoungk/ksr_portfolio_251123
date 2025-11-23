import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ksr_portfolio_251123",
  assetPrefix: "/ksr_portfolio_251123/",
};

export default nextConfig;

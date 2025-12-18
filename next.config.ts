import type { NextConfig } from "next";
import packageJson from "./package.json";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:8080";
const API_VERSION = process.env.API_VERSION || "v1";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE}/:path*`,
        destination: `${SERVER_URL}/api/${API_VERSION}/:path*`,
      },
    ];
  },
};

export default nextConfig;

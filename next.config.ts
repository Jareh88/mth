import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "place-hold.it",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // TODO: remove. Temporarily skip checks
  },
  typescript: {
    ignoreBuildErrors: true, // TODO: remove. Temporarily skip checks
  },
};

export default withPayload(nextConfig);

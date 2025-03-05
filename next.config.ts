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
    ],
  },
};

export default withPayload(nextConfig);

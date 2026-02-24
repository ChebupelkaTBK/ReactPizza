import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',

    images: {
        unoptimized: true,
    },
    basePath: '/ReactPizza',
};
module.exports = nextConfig;

export default nextConfig;

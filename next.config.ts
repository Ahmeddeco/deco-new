import type { NextConfig } from "next"

const nextConfig: NextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'aegundl4yp.ufs.sh',
      },
    ],
  },
}

export default nextConfig

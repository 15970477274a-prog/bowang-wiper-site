/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allows loading images from Cloudflare R2 default domains and your custom subdomain
    unoptimized: true, // Set to true to allow easy hosting and export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.lelionautopart.com",
      },
      {
        protocol: "https",
        hostname: "pub-*.r2.dev", // Cloudflare R2 public dev bucket pattern
      },
    ],
  },
};

module.exports = nextConfig;

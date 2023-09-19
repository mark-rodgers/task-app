/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["via.placeholder.com", "avatars.githubusercontent.com"] },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow loading external images if needed
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
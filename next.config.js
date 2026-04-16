/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  // Strict mode for better React 19 compat
  reactStrictMode: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com'],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
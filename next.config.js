/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Supprimer la section experimental qui n'est plus nécessaire
}

module.exports = nextConfig
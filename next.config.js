/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: false,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

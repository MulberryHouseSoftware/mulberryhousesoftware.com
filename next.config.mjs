/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig

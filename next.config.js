/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SWE_portfolio_website',
  assetPrefix: '/SWE_portfolio_website/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SiteNEU',
  images: {
    domains: ['placeholder.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

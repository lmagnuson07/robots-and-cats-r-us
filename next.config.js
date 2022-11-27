/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['robohash.org', 'external-preview.redd.it'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        pathname: '//robohash.org/**'
      },
    ],
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

module.exports = nextConfig

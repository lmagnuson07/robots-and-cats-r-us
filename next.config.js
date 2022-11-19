/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['robohash.org', 'external-preview.redd.it'],
  }
}

module.exports = nextConfig

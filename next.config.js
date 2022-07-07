/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = withPWA({
  pwa: {
    dist: 'public',
    disable: !isProduction
  }
})

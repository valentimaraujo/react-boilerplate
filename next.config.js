/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  optimization: {
    mergeDuplicateChunks: true,
  },
}

module.exports = nextConfig
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction,
  }
})

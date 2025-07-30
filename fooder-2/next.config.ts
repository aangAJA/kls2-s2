/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8800',
        pathname: '/menu_picture/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8800',
        pathname: '/profile_picture/**',
      },
    ],
  },
}

module.exports = nextConfig
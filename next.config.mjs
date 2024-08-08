// const { hostname } = require('os')

import hostname from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        port: '',
        pathname: '**',
      },
    ],
  },
}

// module.exports = nextConfig

export default nextConfig

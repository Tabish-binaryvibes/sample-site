/** @type {import('next').NextConfig} */

const webpack = require('webpack');

module.exports = {
  images: {
    domains: ['stores-logo-for-crazzycoupon.s3.us-east-2.amazonaws.com', "cdn.admitad.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/us',
        permanent: false,
      },
      {
        source: '/404',
        destination: '/us',
        permanent: false,
      },
    ]
  },
  trailingSlash: true,
  reactStrictMode: false,
  output: 'standalone',
};

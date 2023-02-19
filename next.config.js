/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, { isServer }) {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true,
    };
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
          fs: false,
      }
  }
    return config;
  },
  env: {
    Pinata_Bearer_JWT: process.env.Pinata_Bearer_JWT,
    paymentWalletAddress: process.env.paymentWalletAddress,
  },
};
module.exports = nextConfig;
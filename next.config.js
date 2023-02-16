/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
  env: {
    Pinata_Bearer_JWT: process.env.Pinata_Bearer_JWT,
  }
};
module.exports = nextConfig;
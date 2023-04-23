/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

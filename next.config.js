/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@tremor/react"],
  images: {
    domains: ["www.weatherbit.io"],
  },
};

module.exports = nextConfig

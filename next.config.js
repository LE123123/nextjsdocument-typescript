const path = require("path");
const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "scss-styles")],
  },
  webpack: (config) => {
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;

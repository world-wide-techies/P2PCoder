const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(new MonacoWebpackPlugin());
    return config;
  },

  plugins: [new MonacoWebpackPlugin()],
};

module.exports = nextConfig;

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.plugins.push(new MonacoWebpackPlugin());
    }

    config.externals = {
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    };

    return config;
  },
};

module.exports = nextConfig;

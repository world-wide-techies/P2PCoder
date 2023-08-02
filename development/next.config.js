const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
 
  
  webpack: (config, { dev, isServer }) => {
    if (!options.isServer){


    
    }
    
    config.plugins.push(new MonacoWebpackPlugin());
    return config;
  },
};

module.exports = nextConfig;

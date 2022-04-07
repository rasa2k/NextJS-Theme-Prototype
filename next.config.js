/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@dhi/icons"]);

nextConfig = {
  webpack: (config) => {
    config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx"];
    config.plugins.push(
      new webpack.ProgressPlugin((percentage, message, ...args) => {
        //console.info(percentage, message, ...args);
      })
    );
    return config;
  },
};

module.exports = withPlugins([withTM], nextConfig);

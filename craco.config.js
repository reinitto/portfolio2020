const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,

  babel: {
    presets: ["@babel/preset-env"],
    plugins: [],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
  },
  webpack: {
    entry: "./src/index.js",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "build"),
    },
    alias: {},
    plugins: [
      new HtmlWebpackPlugin(),
      new InjectManifest({
        swSrc: "./src/sw.js",
        swDest: "sw.js",
      }),
    ],
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
      optimization: {
        runtimeChunk: "single",
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
        },
      },
    },
  },
};

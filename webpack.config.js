const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://locahost:3000",
    "./src/index.js",
  ], // 打包入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  }, // 打包输出文件
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello",
      template: './src/index.html'
    }),
  ],
};

module.exports = config;

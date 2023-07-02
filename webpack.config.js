const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "assets" }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]
};
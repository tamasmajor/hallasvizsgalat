const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devServer: {
    static: {
      directory: path.join(__dirname, ".'/dist"),
    },
    hot: true,
    port: 8080,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      chunks: [
        "http://localhost:35729/livereload.js"
      ]
    }),
    new LiveReloadPlugin()
  ]
};
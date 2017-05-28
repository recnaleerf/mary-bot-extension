var resolve = require("path").resolve;

module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    background: "./src/background.js",
    contentscript: "./src/contentscript.js"
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "app/scripts")
  },
  module: {
    rules: [
      {test: /\.js$/, use: "babel-loader"}
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, "node_modules"),
      resolve(__dirname, "src")
    ]
  }
};

const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  watch: false,
};
const path = require("path");
module.exports = {
  context: __dirname,
  entry: "./public/javascript/index.js",
  output: {
    path: path.resolve(__dirname, "public/javascript"),
    filename: "main.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};

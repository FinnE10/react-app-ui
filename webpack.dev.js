const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 1337
  },
});
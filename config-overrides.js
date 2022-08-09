const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.optimization.runtimeChunk = false;
    config.output = {
      filename: "PROD_FILE.js",
      path: path.resolve(__dirname, "build"),
      publicPath: "./",
    };
    return config;
  },
};

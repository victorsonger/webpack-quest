const TerserPlugin = require('terser-webpack-plugin')

module.exports = [false, true].map((usedExports) => ({
  mode: "none",
  output: {
    filename: `${usedExports}.js`,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
    ],
    // sideEffects,
    usedExports
  },
}));

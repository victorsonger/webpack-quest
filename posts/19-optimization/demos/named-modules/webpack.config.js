module.exports = [true, false].map((namedModules) => ({
  entry: {
    what: './src/index.js' // 默认的Chunk Name是main  我们这里改成what可以看下效果
  },
  mode: "none",
  output: {
    filename: `${namedModules}.js`,
  },
  optimization: {
    namedModules,
  },
}));

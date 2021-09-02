module.exports = [false, true].map((namedChunks) => ({
  mode: "none",
  entry: {
    what: './src/index.js' // 默认的Chunk Name是main  我们这里改成what可以看下效果
  },
  output: {
    filename: `[name]~[chunkhash]~${namedChunks}.js`,
  },
  optimization: {
    namedChunks,
  },
}));

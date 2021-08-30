module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js'
  },
  output: {
    filename: "bundle.[name].js"
    // filename: "bundle.js" // 配置多個 entry 的時候，會產生多個 Chunk ，也意味著會有多個檔案的輸出。這時如果還是使用靜態的輸出配置，會造成錯誤：

  },
};

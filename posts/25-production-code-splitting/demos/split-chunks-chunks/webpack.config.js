const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var entry = {
  a: './src/a.js',
  b: './src/b.js'
}

var output = {
  filename: "[name].bundle.js"
}

var optimization = {
  splitChunks: {
    cacheGroups: {
     node_vendors: {
      test: /[\\/]node_modules[\\/]/,
      /* chunks : ‘async’ tells webpack that,
“Hey, webpack ! I only care about optimization of modules imported dynamically. You can just leave non-dynamic modules as they are.” 
      简单来说，就是async只会把被动态引入的部分抽离出去，如果是被共同动态引入的依赖，则放进一个chunk里
      只被一处动态引入的依赖，也会单独抽到一个chunk去
*/
      // chunks: 'async', // - 默认值 对异步模块的优化



      /**
       * initial 被共同动态引入的包还是会被抽到一个单独的chunk
       * 而只要是被非动态引入，且符合test和priority规则的包，都会被抽到一个node_vendors~a.bundle.js 包
       */
      // chunks: 'initial', // - 同步模块优化


      // 不关心是否动态或静态引入，只要是被共同引入的包都会抽到一个单独的chunk
      // 区别只是被共同动态引入的 chunk最终的形式是 x.bundles.js
      // 被共同非动态引入的，chunk的最终形式会是 node_vendors~a~b.bundle.js

      // 注意  经过实际验证，all对于那种在一处被动态引入，在另一处被非动态引入的包，处理方式和README中那片文章有所不同：被非动态引入的那一处会留在a.bundle.js中；
      // 被动态引入的那一处则会被抽出到4.bundle.js然后单独被b.bundle.js引入
      chunks: 'all', // - 优化异步和同步模块
       priority: 1
     }
    },
  },
}

module.exports = {
  entry,
  output,
  optimization,
  plugins: [
    new BundleAnalyzerPlugin()
  ],
};

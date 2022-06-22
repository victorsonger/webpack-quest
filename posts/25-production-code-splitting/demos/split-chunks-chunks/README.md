# 详细解释 webpack 配置 optimize.spiltChunks.chunks 的三个配置项：async、all 和 initial

## 参考： https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0

## 文档记录： https://www.notion.so/oopsvictor/webpack-optimization-Code-Splitting-splitChunks-runtimeChunk-063da3c77e464874a552f2790dcfd9cd

（注意此文章中 all 的结果与本项目 "webpack": "^4.44.2"实际实践的结果有所出入
具体参见 webpack.config.js 中的注释
）

# 本 demo 中的三个依赖在 a.js 和 b.js 中的引入方式总览

Imported dynamically in one entry and imported non-dynamically - React
Imported dynamically in both entries - lodash
Imported non-dynamically in both entries - jquery

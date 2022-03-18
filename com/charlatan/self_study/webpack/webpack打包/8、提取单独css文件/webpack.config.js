/**
 * Time:2022/3/18 20:30 32
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/8、提取单独css文件
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


let { resolve } = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js', output: {
    filename: 'js/build.js', path: resolve(__dirname, 'build'),
  }, module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 指定创建 style 标签
          // 'style-loader',
          // 这个loader的作用是取代 style-loader 。作用：提取 css 成单文件组件
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        // 指定文件的输出路径
        // outputPath: 'css',
      }],
  }, plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      // 对文件进行重命名
      filename: 'build.css',
    }),
  ],
  mode: 'development',
}

/**
 * Time:2022/3/18 19:29 55
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/7、开发资源配置
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let { resolve } = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', output: {
    filename: 'build.js', path: resolve(__dirname, 'build'),
  }, module: {
    rules: [
      {
        test: /\.css$/, use: [
          'style-loader', 'css-loader'], // 指定文件的输出路径
        outputPath: 'css',
      }, {
        test: /\.less$/, use: [
          'style-loader', 'css-loader', 'less-loader'], outputPath: 'css',
      }, {
        test: /\.(img|png|gif)$/, loader: 'file-loader', options: {
          limit: 8 * 1024, name: '[hash:10].[ext]',
        }, outputPath: 'img',
      }, {
        test: /\.html$/, loader: 'html-loader',
      }, {
        exclude: /\.(css|js|html|less|img|png|gif)$/, loader: 'file-loader', outputPath: 'file',
      }],
  }, plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })], mode: 'development', devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'), // 启动gzip压缩
    compress: true, // 端口号
    port: 3000, // 自动打开浏览器
    open: true,
  },
}

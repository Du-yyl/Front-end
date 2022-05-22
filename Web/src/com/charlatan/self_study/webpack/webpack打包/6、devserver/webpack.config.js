/**
 * Time:2022/3/18 11:38 18
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/6、devserver
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let { resolve } = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    mode: 'development',
//  开发服务器 devServer ：用来自动化（自动编译，自动打开浏览器，自动刷新）
//  特点：只会在内容中编译打包，不会有任何输出`

//  启动devServer指令： npx npm  webpack-dev-server
//   devServer: {
//     // 运行项目的目录
//     contentBase: resolve(__dirname, 'build'),
//     // 启动gzip压缩，速度更快
//     compress: true,
//     // 设置端口号
//     port: 3000,
//     lintOnSave: false
//   }
    
    devServer: {
        // 项目构建后路径
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
    },
}

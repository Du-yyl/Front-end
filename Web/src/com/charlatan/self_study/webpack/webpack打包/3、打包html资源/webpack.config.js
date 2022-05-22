/**
 * Time:2022/3/17 21:21 33
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/3、打包html资源
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/**
 * loader ： 1. 下载 2. 使用
 * plugins ： 1. 下载 2. 引入 3. 使用
 */
let { resolve } = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
// 入口
    entry: './src/index.js',
// 输出内容和路径
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
    },
// loader
    module: {
        rules: [],
    },
// plugins
    plugins: [
        //  使用的插件是 html-webpack-plugin ,这个是一个对象通过new的方式进行调用
        //  功能：默认创建一个空的 HTML 文件，引入打包输出的所有资源（JS/CSS）
        //  如果需要有结构的HTML，需要借助一个配置项：template 属性进行配置实现
        new HtmlWebpackPlugin({
            // 创建一个 HTML 文件，文件的结构就是引入的文件，并自动打包输出这个配置
            template: './src/index.html',
        }),
    ],
// mode
    mode: 'development',
}

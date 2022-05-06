/**
 * Time:2022/3/30 19:24 50
 * Name:webpack.config.js
 * Path:
 * ProjectName:2、webpack编译TS
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const path = require('path')
// 创建一个HTML，并引入对应资源
let HWP = require('html-webpack-plugin')
// 新文件编译时，先清空原来文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    entry: './src/index.ts',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // 配置 Babel
                    {
                        //   指定加载器
                        loader: 'babel-loader',
                        //   设置babel
                        options: {
                            //   设置预置环境
                            presets: [
                                [
                                    //环境插件
                                    '@babel/preset-env',
                                    //  配置信息
                                    {
                                        targets: {
                                            'chrome': '18',
                                            'ie': 6,
                                        },
                                        'corejs': '3',
                                        // 按需加载
                                        'useBuiltIns': 'usage',
                                        
                                    },
                                ],
                            ],
                        },
                    },
                    'ts-loader',
                ],
                exclude: /node-modules/,
            },
        ],
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HWP({
            template: './src/index.html',
        }),
    ],
    
    // 设置模块
    resolve: {
        extensions: ['.ts', '.js'],
    },
}

/**
 * Time:2022/3/18 10:04 49
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/4、打包图片资源
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let { resolve } = require ('path')
let HtmlWebpackConfig = require ('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'built.js',
		path: resolve (__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			}
			,
			{
				/**
				 * 这种配置只能解决CSS中引入图片的问题，如果使用html的一些标签进行引入，那么他会直接保存这句话，而不是进行编译
				 */
				//  处理图片资源
				test: /\.(img|png|gif)$/,
				//  这里使用使用一个loader【这里需要下载 url-loader file-loader （url-loader是依赖 file-loader
				loader: 'url-loader',
				//  loader配置
				options: {
					// 图片小于8kb就会进行base64处理
					limit: 8 * 1024,
					//  这里可能会出现：因为url-loader使用的是es6模块化解析的，而html-loader引入图片是通过commonjs进行引入的
					//  解析可能出现问题：【object Module】
					//  解决：关闭url-loader的es6模块化，使用commonJS模块
					esModule: false,
					
					//  通过这种方式生成的文件名是通过hash值进行生成的，如果太长了可以进行限制
					// [hash:10]  标识去哈希值前10位
					// [ext]  表示出现文件原来使用什么文件名，现在依然使用什么文件名
					name: '[hash:5].[ext]',
				},
			},
			{
				test: /\.html$/,
				// 处理 html 文件中的img图片（负责引入img，从而能被url-loader进行处理
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackConfig ({
			template: './src/index.html',
		}),
	],
	mode: 'development',
}

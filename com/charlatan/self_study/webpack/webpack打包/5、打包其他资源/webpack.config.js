/**
 * Time:2022/3/18 11:14 17
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/5、打包其他资源
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let { resolve } = require ('path')
let HtmlWebpackPlugin = require ('html-webpack-plugin')
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
			},
			{
				//  打包其他资源（除了html/js/css资源以外的资源
				// exclude可以指定不查找这个资源
				exclude: /\.(css|js|html)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin ({
			template: './src/index.html',
		}),
	],
	mode: 'development',
}


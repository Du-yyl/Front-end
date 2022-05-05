/**
 * Time:2022/3/17 20:17 59
 * Name:webpack.config.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack打包/2、打包样式资源
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * webpack.config.js
 *  这个文件是webpack的配置文件，
 *  作用：
 *    指示webpack运行某些内容，运行webpack指令时，会加载里面的配置
 *
 *  左右的构建工具都是基于node的，默认采用commonjs
 */

let { resolve } = require ('path')

module.exports = {
//  webpack 配置

//  入口起点
	entry: './src/index.js',
//  输出
	output: {
		// 输出文件名
		filename: 'built.js',
		// 输出路径
		// __dirname nodejs 的变量，代表当前文件的目录的绝对路径
		path: resolve (__dirname, 'build'),
	},
//  loader的配置
	module: {
		rules: [
			//  详细的 loader 配置【所有的配置都是一个个对象
			{
				// 匹配哪些文件
				test: /\.css$/,
				// 匹配指定文件，并使用use配置如何处理【使用哪些loader进行处理】
				use: [
					// use中loader执行顺序：从左到右，从下到上
					// 创建style标签，将js中的样式资源插入进行，添加到head中生效
					'style-loader',
					// 将css文件变成commonjs模块加载js中，里面内容是样式字符串
					'css-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
		],
	},
//   plugins 配置
	plugins: [
		//  详细的plugins配置
	],
//  模式【分为两种，一种是开发模式，一种是生产模式】
	mode: 'development',
	// mode: 'production',
}

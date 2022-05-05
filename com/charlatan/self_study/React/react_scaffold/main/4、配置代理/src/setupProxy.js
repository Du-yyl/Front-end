/**
 * Time:2022/3/25 20:28 14
 * Name:setupProxy.js
 * Path:src
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const proxy = require ('http-proxy-middleware')

module.exports = function (app) {
	app.use (
			proxy ('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
				target: 'http://localhost:5000', //请求转发给谁
				changeOrigin: true,//控制服务器收到的请求头中Host的值
				pathRewrite: { '^/api1': '' }, //重写请求路径(必须)
			}),
			proxy ('/api2', {
				target: 'http://localhost:5001',
				changeOrigin: true,
				pathRewrite: { '^/api2': '' },
			}),
	)
}

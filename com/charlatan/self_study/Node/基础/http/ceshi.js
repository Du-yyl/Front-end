/**
 * Date:2022/1/9 12:31 24
 * Name:ceshi.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let http = require('http')
let server = http.createServer()
server.on('request', function (request, response) {
	if (request.url === 'login') {
		console.log("登录成功");
	} else if (request.url === 'go') {
		console.log("go");
	} else
		console.log("没有指定路径");
})
server.listen('8300', function () {
	console.log("8300端口启动");
})
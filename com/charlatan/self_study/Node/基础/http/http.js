/**
 * Date:2022/1/3 15:04 04
 * Name:http.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
* 可以使用node中提供的http搭建服务器
* */
// 加载模块
let http = require('http')

// 创建服务器，返回的是一个server实例
let server = http.createServer()

// 提供数据服务
// 接收请求
server.on("request", function (message, response) {
	console.log("收到请求");
})

// 绑定端口号
server.listen(8100, function () {
	console.log("服务器启动");
})

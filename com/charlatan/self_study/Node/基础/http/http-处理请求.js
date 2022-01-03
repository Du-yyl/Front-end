/**
 * Date:2022/1/3 15:29 35
 * Name:http-处理请求.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let http = require('http')
let server = http.createServer()

/*
	request 请求函数需要事件处理，需要接收两个参数
		Request     请求对象
			请求对象可以获取客户端的一些请求信息，例如路径
		Response    响应对象
			响应对象可以用来给客户端发送响应对象
* */
server.on('request', function (request, response) {
	console.log("收到请求，请求路径是：" + request.url);
	
	if (request.url === '/login') {
		response.write("login")
		response.end()
	} else if (request.url === '/haha') {
		response.write("哈哈哈")
		response.end()
	} else {
		//	response 有一个方法是write，可以用来给用户发送响应数据，可以发送多个响应数据，但必须使用end进行结尾
		response.write('你好，这是测试')
		response.write('hello this is test')
		// 结束响应，只有结束响应才能将数据成功发送过去
		response.end()
	}
})


server.listen(8200, function () {
	console.log("8200端口启动");
})
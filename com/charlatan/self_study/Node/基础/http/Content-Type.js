/**
 * Date:2022/1/11 14:12 21
 * Name:Content-Type.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


let http = require ('http')
let server = http.createServer ()
server.on ('request', function (request, response) {
	/*
	 * 服务器向浏览器发送的数据是 utf8 编码形式的，浏览器解析时会按照计算机本地的语言环境进行解析
	 * 因为编码不统一造成乱码
	 *
	 * 解决方式，告诉浏览器的解码形式
	 *   Content-Type 用来指定发送来的编码类型 将默认的 GBK 改成 utf-8
	 *   text/html   ：   HTML格式
	 text/plain  ：   纯文本格式
	 text/xml    ：   XML格式
	 image/gif   ：   gif图片格式
	 image/jpeg  ：   jpg图片格式
	 image/png   ：   png图片格式
	 * */
	
	if ( request.url === '/plain' ) {
		response.setHeader ('Content-Type', 'text/plain ; charset=utf-8')
		response.end ('我是普通文本1')
	} else if ( request.url === '/html' ) {
		response.setHeader ('Content-type', 'text/html;charset=utf-8')
		response.end ('<p style="color: #f50b0b;">我是设置为html文本输出的内容</p>')
	}
})
server.listen ('8300', function () {
	console.log ('8300端口启动')
	
})
let num = [1, 2, 3, 4, 5]

function add (num1, num2) {
}

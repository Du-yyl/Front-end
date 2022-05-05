/**
 * Date:2021/12/25 13:25 04
 * Name:server_data.js
 * Path:Web代码/src/com/charlatan/self_study/AJAX
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */



//1. 引入express
const express = require ('express')

//2. 创建应用对象
const app = express ()

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

//  /server  当客户端向服务端发送请求，请求行的第二段的路径是 /server 的话，就会执行这个回调函数，由response做出响应
app.get ('/server', (request, response) => {
	//设置响应头  设置允许跨域
	// response.setHeader('我是响应头名字', "我是响应头的值")
	// response.setHeader('123', '321');
	response.setHeader ('Access-Control-Allow-Origin', '*')
	//设置响应体
	response.send ('hello ajax')
})

//all可以接受所有请求
// app.post('/server', (request, response) => {
app.all ('/server', (request, response) => {
	//设置响应头  设置允许跨域
	response.setHeader ('Access-Control-Allow-Origin', '*')
	
	//设置响应头可自定义属性
	// response.setHeader('Access-Control-Allow-Headers', '*')
	response.setHeader ('Access-Control-Allow-Headers', '*')
	
	//设置响应体
	response.send ('我是post访问')
})

//  /server  当客户端向服务端发送请求，请求行的第二段的路径是 /server 的话，就会执行这个回调函数，由response做出响应
app.get ('/json-server', (request, response) => {
	//设置响应头  设置允许跨域
	response.setHeader ('Access-Control-Allow-Origin', '*')
	//设置一个响应数据
	let data = {
		name: '张三',
		age: 12,
	}
	//将对象转换为JSON
	let data_json = JSON.stringify (data)
	//设置响应体
	//send的发送的数据只能是字符串类型
	response.send (data_json)
})

//  解决某些浏览器一直读缓存的问题（IE）
app.get ('/ie', (request, response) => {
	//设置响应头  设置允许跨域
	response.setHeader ('Access-Control-Allow-Origin', '*')
	//设置响应体
	response.send ('这是IE输出')
})

//  延时响应
app.get ('/delay', (request, response) => {
	//设置响应头  设置允许跨域
	response.setHeader ('Access-Control-Allow-Origin', '*')
	//设置响应体
	
	setTimeout (function () {
		response.send ('延时响应')
	}, 3000)
	
})

//jQuery服务
app.all ('/jquery-server', (request, response) => {
	//设置响应头  设置允许跨域
	response.setHeader ('Access-Control-Allow-Origin', '*')
	response.setHeader ('Access-Control-Allow-Headers', '*')
	//设置响应体
	let json = { name: '张三' }
	response.send (JSON.stringify (json))
})

//4. 监听端口启动服务
app.listen (8000, () => {
	console.log ('8000端口启动')
})

/**
 * Date:2021/12/25 13:25 04
 * Name:express的基本使用.js
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
app.get ('/', (request, response) => {
	response.send ('hello express')
})

//4. 监听端口启动服务
app.listen (8000, () => {
	console.log ('8000端口启动')
})

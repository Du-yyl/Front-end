/**
 * Date:2022/1/2 17:38 31
 * Name:fs-流式文件读取.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 * 流式文件读取
 *   流的读取必须绑定data事件才能进行读取和关闭
 *
 * */
let fs = require ('fs')

// 可读流
let rs = fs.createReadStream ('test.txt')
// 可写流
let ws = fs.createWriteStream ('test.txt')

rs.once ('open', function () {
	console.log ('读取流打开')
})
rs.once ('close', function () {
	console.log ('读取流关闭')
	//	 数据读取完毕，关闭可写流
	ws.end ()
})

ws.once ('open', function () {
	console.log ('可写流打开')
})
ws.once ('close', function () {
	console.log ('可写流关闭')
})

rs.on ('data', function (string) {
	console.log (string)
	console.log (string.toString ())
	ws.write (data)
})

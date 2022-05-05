/**
 * Date:2022/1/2 17:51 51
 * Name:fs-流式文件简单方式.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let fs = require ('fs')

let ws = fs.createWriteStream ('test.txt')
let rs = fs.createReadStream ('ttest.txt')

rs.once ('open', function () {
	console.log ('可读流打开')
})
rs.once ('close', function () {
	console.log ('可读流关闭')
})

ws.once ('open', function () {
	console.log ('可写流打开')
})
ws.once ('close', function () {
	console.log ('可写流关闭')
})

// 通过一个管道连接
rs.pipe (ws)

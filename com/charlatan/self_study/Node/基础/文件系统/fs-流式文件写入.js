/**
 * Date:2022/1/2 17:01 18
 * Name:fs-流式文件写入.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
* 同步、异步、简单文件写入都不适合大文件
*   性能差；
*   容易导致内存溢出
* */

let fs = require('fs')
// 创建可写流
/*
filehandle.createWriteStream([options])

	options <Object>
		encoding <string>   默认值: 'utf8'
		autoClose <boolean> 默认值: true
		emitClose <boolean> 默认值: true
		start <integer>
	返回: <fs.WriteStream>

	可以通过open和clone事件来监听流的打开和关闭
	
	流的关闭：
	    end()   是从文件的输出方进行调用的，当输送完就能关闭
	    close() 是从文件的接收方进行调用的，接收完关闭
	        二者是可以不同步的，因为一些文件在输送的过程中，只要不close，文件还是能继续传递的
* */

let ws = fs.createWriteStream('test.txt')
// once 是一次性事件，使用一次就废了，和JQ中的one方法一样
// 使用on绑定的事件是永久的，而once就是一次性的
ws.once('open', function () {
  console.log('流打开')
})
ws.once('close', function () {
  console.log('流关闭了')
})
// 通过ws进行文件写入
ws.write('这是通过可写流写入的内容1111')
ws.write('这是通过可写流写入的内容2222')
ws.write('这是通过可写流写入的内容3333')
ws.write('这是通过可写流写入的内容4444')
ws.write('这是通过可写流写入的内容5555')
ws.write('这是通过可写流写入的内容6666')

ws.end()

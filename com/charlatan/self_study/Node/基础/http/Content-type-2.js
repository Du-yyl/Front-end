/**
 * Date:2022/1/11 15:29 47
 * Name:Content-type-2.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 使用 Content-type 处理更多数据
let http = require ('http')
let fs = require ('fs')
let server = http.createServer ()
server.on ('request', function (request, response) {
	if ( request.url === '/html' ) {
		response.setHeader ('Content-type', 'text/html ;charset=utf-8')
		fs.readFile ('./test-file/index.html', function (err, data) {
			if ( !err ) {
				response.end (data.toString ())
			} else {
				response.end (`	<p style="
												position: absolute;
												left:  0;
												right: 0;
												text-align: center;
												font:700 80px '';
												user-select: none">
											404 Not Found
										</p>`)
			}
		})
	} else if ( request.url === '/img' ) {
		response.setHeader ('Content-type', 'image/jpeg')
		fs.readFile ('./test-file/img.jpg', function (err, data) {
			if ( !err ) {
				response.end (data)
			} else {
				response.end (`	<p style="
												position: absolute;
												left:  0;
												right: 0;
												text-align: center;
												font:700 80px '';
												user-select: none">
											404 Not Found
										</p>`)
			}
		})
	} else if ( request.url === '/gif' ) {
		response.setHeader ('Content-type', 'image/gif')
		fs.readFile ('./test-file/gif.gif', function (err, data) {
			if ( !err ) {
				response.end (data)
			} else {
				response.end (`	<p style="
												position: absolute;
												left:  0;
												right: 0;
												text-align: center;
												font:700 80px '';
												user-select: none">
											404 Not Found
										</p>`)
			}
		})
	}
	
})

server.listen ('3000', function () {
	console.log ('3000端口监听中...')
})

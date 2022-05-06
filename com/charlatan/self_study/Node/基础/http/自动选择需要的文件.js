/**
 * Date:2022/1/12 11:26 07
 * Name:自动选择需要的文件.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de
 *  l'aimer.
 */

let http = require('http')
let server = http.createServer()
let fs = require('fs')

let paths = 'test-file'

server.on('request', function (request, response) {
    let path = paths + request.url
    
    if (/\b.txt\b/.test(path)) {
        response.setHeader('Content-type', 'text/plain ;charset=utf-8')
        text(path, response)
        console.log('text')
    } else if (/\b.html\b/.test(path)) {
        response.setHeader('Content-type', 'text/html ;charset=utf-8')
        text(path, response)
        console.log('--html')
    }
    
    if (/\b.jpg\b/.test(path)) {
        response.setHeader('Content-type', 'image/jpeg')
        img(path, response)
        console.log('ipg')
    } else if (/\b.gif\b/.test(path)) {
        response.setHeader('Content-type', 'image/gif')
        img(path, response)
        
        console.log('gif')
    } else if (/\b.png\b/.test(path)) {
        response.setHeader('Content-type', 'image/png')
        img(path, response)
        
        console.log('png')
    }
    
    console.log(path)
})

function text (path, response) {
    fs.readFile(path, function (err, data) {
        if (!err) {
            response.end(data.toString())
        } else {
            response.end(`	<p style="
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

function img (path, response) {
    fs.readFile(path, function (err, data) {
        if (!err) {
            response.end(data)
        } else {
            response.end(`	<p style="
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

server.listen('3000', function () {
    console.log('3000端口监听中')
})

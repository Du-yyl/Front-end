/**
 * Time:2022/1/29 16:49 16
 * Name:server_http.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require('express')

let server = express()

server.use('/file/', express.static('./file/'))

server.get('/', function (request, response) {
  console.log(request.url)
  response.send('这是资源测试的例子')
})

server.listen('3000', function () {
  console.log('3000端口启动')
})

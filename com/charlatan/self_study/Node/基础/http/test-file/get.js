/**
 * Time:2022/1/14 19:44 40
 * Name:get.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http/test-file
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let http = require('http')

let server = http.createServer(function (request, response) {
    response.end('request')
})

server.listen(3000, function () {
    console.log('port 3000 is listening ... ')
})


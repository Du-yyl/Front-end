/**
 * Time:2022/1/14 20:46 42
 * Name:server.js
 * Path:Web代码/src/com/charlatan/self_study/Node/Express/RMVP
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require('express')
let server = express()

let router = require('./router')

server.use('/', router)

server.listen(3000, function () {
    console.log('3000 ... ')
})

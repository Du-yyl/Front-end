/**
 * Time:2022/2/9 10:06 07
 * Name:server.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 网络连接
let express = require('express')
let mongoose = require('mongoose')

let server = express()

server.get('/', function (request, response) {
  console.log(request.url)
  response.send('这是测试内容')
})

server.listen('3000', function () {
  console.log('3000 is listening')
})

// 数据库服务

mongoose.connect('mongodb://location:/message_data').then()

mongoose.connection.once('open', function () {
  console.log('数据库启动')
})
mongoose.connection.once('close', function () {
  console.log('数据库关闭')
})

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  address: {
    type: String,
    default: null,
  },
})

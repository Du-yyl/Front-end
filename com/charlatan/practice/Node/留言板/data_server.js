/**
 * Time:2022/1/29 16:31 50
 * Name:data_server.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let fs = require('fs')
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:/message_data').then()

mongoose.connection.once('open', function () {
  console.log('连接数据库成功')
})

mongoose.connection.once('close', function () {
  console.log('数据库断开')
})

let Schema = mongoose.Schema

let user_register = new Schema({
  name: String,
  age: Number,
  sex: String,
  address: String,
  mail: String,
  phone: {
    type: Number,
    default: null,
  },
})

let UserRegister = mongoose.model('user_register', user_register)



/**
 * Time:2022/2/11 14:32 06
 * Name:data.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:/test_1').then()
mongoose.connection.once('open', function () {
  console.log('用户数据库连接')
  
})

mongoose.connection.once('close', function () {
  console.log('用户数据库断开')
})

let Schema = mongoose.Schema

/**
 * 创建 用户 数据模式
 */
let userSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  address: String,
  index: Number,
  isDelete: Boolean,
  uid: Number,
})

let UserModel = mongoose.model('user_1', userSchema)

/**
 * 找到最后的那个元素的 ID
 */

function findID () {
  return UserModel.find()
}

/**
 * 创建 访问记录 数据模式
 */
let recordSchema = new Schema({
  x_forwarded_for: String,
  ip: String,
  time: String,
  url: String,
  hostname: String,
  type: String,
  isDelete: Boolean,
})

let RecordModel = mongoose.model('record_1', recordSchema)

module.exports = {
  RecordModel,
  UserModel,
  findID,
}

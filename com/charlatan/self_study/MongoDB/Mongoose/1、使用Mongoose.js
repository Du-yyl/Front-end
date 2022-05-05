/**
 * Time:2022/1/20 16:10 08
 * Name:1、使用Mongoose.js
 * Path:Web代码/src/com/charlatan/self_study/MongoDB/Mongoose
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入 Mongoose
let mongoose = require ('mongoose')
// 连接MongoDB
// 如果端口号是默认端口号：297017 则不用写，反之端口号要进行指定【指定要访问test数据库】
mongoose.connect ('mongodb://localhost:/test')

// 监听MongDB数据库的连接状态
// 在 mongoose 中有一个对象 connection 这个对象可以监听数据库的连接和断开 open / close
mongoose.connection.once ('open', function () {
	console.log ('mongoose is listening ... ')
})

mongoose.connection.once ('close', function () {
	console.log ('数据库断开')
})

// 断开数据库连接
// mongoose.disconnect()

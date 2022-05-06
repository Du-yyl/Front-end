/**
 * Time:2022/1/20 16:43 53
 * Name:2、Mongoose操作数据库.js
 * Path:Web代码/src/com/charlatan/self_study/MongoDB/Mongoose
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:/test')
mongoose.connection.once('open', function () {
    console.log('数据库连接')
})

// 创建 Schema（模式）对象【不是必须】
let Schema = mongoose.Schema

/*
 * 在创建的对象中可以通过对象来指定对象的一些属性，和直接通过冒号指定的作用与效果一样，没有区别
 * 使用冒号更方便，使用对象可以指定更多的东西
 *  */
let studentSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        // 类型为 String 类型
        type: String,
        // 默认值是女
        default: 'female',
    },
    address: String,
})

// 创建 Model
// 创建的这个映射，mongoose会自动把名字变成复数，如果单词本来就是复数，就不变化
let StuModel = mongoose.model('student', studentSchema)

// 创建插入文档 第一个参数是 doc ，第二个参数是 func（err）
StuModel.create({
    name: '张三',
    age: 12,
    sex: '男',
    address: '北京市大兴区',
}, function (error) {
    if (error) {
        console.log('插入失败啊')
    } else {
        console.log('插入成功')
    }
})

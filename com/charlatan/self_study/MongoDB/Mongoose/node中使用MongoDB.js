/**
 * Date:2022/1/13 18:11 43
 * Name:node中使用MongoDB.js
 * Path:Web代码/src/com/charlatan/self_study/MongoDB
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const mongoose = require('mongoose')

// 链接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/icon').then()

// 设计一个模型，就是设计数据库，MongoDB是动态的，在代码中设计就好了，Mongoose这个包可以让过程更简明
const Cat = mongoose.model('Cat', { name: String })

// 实例化对象进行添加操作
const kitty = new Cat({ name: 'Jillian' })

// 持续化保存kitty实例
kitty.save().then(() => console.log('meow'))

for (let i = 0, len = 20; i < len; i++) {
    const kitty = new Cat({ name: '第' + i + '只🐱' })
    kitty.save().then(() => console.log('meow'))
}

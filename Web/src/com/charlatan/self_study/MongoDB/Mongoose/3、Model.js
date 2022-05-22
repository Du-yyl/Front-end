/**
 * Time:2022/1/20 17:02 32
 * Name:3、Model.js
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

let Schema = mongoose.Schema

let studentSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: 'female',
    },
    address: String,
})

let StuModel = mongoose.model('student', studentSchema)

/*
 * Model方法：
 *   增：
 *   Model.create(doc(s), [callback <error, jellybean【插入的文档】> ])
 *     创建一个doc向文档中添加，第一个参数是doc，第二个参数是回调
 *
 *   查：【返回结果通过回调函数返回】
 *   Model.find(条件, [投影], [查询选项]（skip，limit）, [callback])
 *     查询所有符合条件的文档【返回的一定是一个数组，无论查到的数据有几个，有没有查到】
 *   Model.findById(ID, [投影], [查询选项]（skip，limit）, [callback])
 *     通过ID查询文档
 *   Model.findOne([条件], [投影], [查询选项]（skip，limit）, [callback])
 *     查询符合条件的第一个文档
 *  */

// StuModel.create([
//   {
//     name: '李四',
//     age: 20,
//     address: '天津',
//   }, {
//     name: '王五',
//     age: 30,
//     address: '河北',
//   }], function (err, jellybean) {
//   console.log(err)
//   console.log(jellybean)
// })

// StuModel.find({ name: '张三' }, { name: 1, _id: 0, address: 1 }, function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data[0].name)
//     console.log(data)
//   }
// })

/*
 * 第一个参数是查询的条件
 * 第二个参数是要显示的内容，
 *   可以通过原始方式指定： { name: 1, _id: 0, address: 1 }
 *   也可以通过 ”name address -_id“ 字符串指定，不显示的字段前面使用负号
 * 第三个参数是一些选项，常用的是指定 skip 和 limit
 *  */
// StuModel.find({}, 'name address -_id', { skip: 2, limit: 2 }, function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data[0].name)
//     console.log(data)
//   }
// })

/*
 * 返回的是一个对象
 *  */
// StuModel.findOne({},function (err, doc) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(doc)
//     console.log(doc.name)
//   }
// })

/*
 * 返回的同样是对象
 *  */
// StuModel.findById('61e9247d8ff764b715197ec7', function (err, doc) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(doc)
//     console.log(doc.name)
//   }
// })

/*
 * 改：
 *   Model.update(查询条件，修改后的对象，[选项]，[callback])
 *   Model.updateOne(查询条件，修改后的对象，[选项]，[callback])
 *   Model.updateMany(查询条件，修改后的对象，[选项]，[callback])
 *  */

// StuModel.updateOne({ name: '张三' }, { age: 50 }, function (err, data) {
//   if (!err) {
//     console.log('修改成功')
//   }
//   console.log(data)
// })

/*
 * 删除：
 *   Model.remove(条件，[callback])
 *   Model.deleteOne(条件，[callback])
 *   Model.deleteMany(条件，[callback])
 *  */

// StuModel.remove({name:"张三"},function (err,data) {
//   if (!err) {
//     console.log(data);
//   }
// })

/*
 * Model.count(条件，[callback])
 *   相对于 length 性能更好，length 是把指定的内容找到后统计个数的，性能较差，而count是指定调用，性能更好
 * */

StuModel.count({ name: '李四' }, function (err, num) {
    console.log(arguments)
})

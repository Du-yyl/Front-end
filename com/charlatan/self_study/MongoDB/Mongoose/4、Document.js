/**
 * Time:2022/1/20 17:54 32
 * Name:4、Document.js
 * Path:Web代码/src/com/charlatan/self_study/MongoDB/Mongoose
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
* Document 和 文档 是一一对应的
* 通过 Model 查询到的都是 Document
*  */

// 创建一个 doc
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

let stu = new StuModel({
  name: '张三',
  age: 20,
  address: '河南',
})
// 这里创建的doc并没有被插入到集合中，但是ID已经有了，是_id调用new Object 产生的
console.log(stu)

/*
* document方法：
*   Model#save([options], [func])
*  */
// stu.save(function (err,data) {
//     console.log(arguments);
// })

StuModel.findOne({}, function (err, doc) {
  if (!err) {
    /*
    * Document 方法：
    *   update(update, [options], [callback])
    *   remove([callback])
    *     第一个参数err，第二个参数data是删除的元素
    *  */
    // doc.update({ age: 0 }, function (err, data) {
    //   if (!err){
    //     console.log(data);
    //   }
    // })
    
    // doc.remove(function (err,data) {
    //     console.log("删除成功");
    //     console.log(err);
    //     console.log(data);
    // })
    
    /*
    * get (name)
    *   获取文档的指定属性值
    * set (name, value)
    *   设置指定的属性值
    * delete 对象的属性
    *   暂时把一个属性删除，不会影响数据库
    * 这两个属性不会改变数据库中的数据
    * equals(doc)
    *   比较两个文档是不是同一个
    * toJSON()
    *   转换为JSON字符串
    * toObject()
    *   转换成对象【转换后，所有的Document属性和方法都不能使用了】
    *  */
    // console.log(doc.get("age"));
    // console.log(doc.set('name', '名字'))
    // console.log(doc.toJSON());
    // console.log(doc.toObject());
    
    let obj = doc.toObject()
    delete obj.address
    console.log(obj)
    
  }
})

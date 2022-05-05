/**
 * Time:2022/1/20 19:16 17
 * Name:5、mongoose的模块化.js
 * Path:Web代码/src/com/charlatan/self_study/MongoDB/Mongoose
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 * 在一个项目中，可以使用模块化将重复代码提取到一个模块中，
 *
 *  */
/**
 * Mongoose方法的方法头的封装
 * @param schema 要进行创建的模式（约束）
 * @param collection 要操作的集合名称
 * @param url 要操作的数据库的路径，默认为：localhost
 * @param databases 要操作的数据库，默认为：data
 * @returns {Model<DocType>} 将内容进行封装，并将映射返回，提供外部操作
 */
function conn_mongo (schema, collection, databases = 'data', url = 'localhost') {
	let mongoose = require ('mongoose')
	mongoose.connect ('mongodb://' + url + ':/' + databases).then ()
	mongoose.connection.once ('open', (err) => {
		console.log ('数据库连接成功')
	})
	let Schema = new mongoose.Schema (schema)
	return mongoose.model (collection, Schema)
}

let obj = {
	name: String,
	age: Number,
	address: String,
}

let model = conn_mongo (obj, 'students', 'test')

model.find ({}, function (err, data) {
	if ( !err ) {
		console.log (data)
	}
})

// model.create({
//   name: 'jack',
//   age: 12,
// }, function (err, data) {
//   if (!err) {
//     console.log(data)
//   }
// })


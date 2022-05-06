/**
 * Time:2022/1/20 20:11 44
 * Name:mongoose方法的数据引入的封装.js
 * Path:Web代码/src/com/charlatan/MyTools
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * Mongoose方法的方法头的封装
 * @param schema 要进行创建的模式（约束）
 * @param collection 要操作的集合名称
 * @param databases 要操作的数据库，默认为：data
 * @param url 要操作的数据库的路径，默认为：localhost
 * @returns {Model<DocType>} 将内容进行封装，并将映射返回，提供外部操作
 */
function conn_mongo (schema, collection, databases = 'data', url = 'localhost') {
    let mongoose = require('mongoose')
    mongoose.connect('mongodb://' + url + ':/' + databases).then()
    mongoose.connection.once('open', (err) => {
        console.log('数据库连接成功')
    })
    let Schema = new mongoose.Schema(schema)
    return mongoose.model(collection, Schema)
}

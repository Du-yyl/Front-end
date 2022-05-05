/**
 * Time:2022/1/14 20:55 52
 * Name:router.js
 * Path:Web代码/src/com/charlatan/self_study/Node/Express/RMVP
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require ('express')

// 路由中间件
let router = express.Router ()
// 这里讲router进行打印，可以得知router是一个函数
// console.log(router);

router.get ('/', function (request, response, next) {
	response.send ('我是根目录中的内容')
})

router.get ('/index', function (request, response, next) {
	response.send ('我是测试内容')
})

module.exports = router

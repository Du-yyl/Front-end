/**
 * Time:2022/2/21 16:39 43
 * Name:app.js
 * Path:Web代码/src/com/charlatan/self_study/JavaScript/JsBase/跨域/server
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require ('express')

let app = express ()

app.get ('/', function (req, res) {
	//设置允许跨域的域名，*代表允许任意域名跨域
	res.setHeader ('Access-Control-Allow-Origin', '*')
	// 这里写你的代码，上面这句话不要动
	
	//允许的header类型
	req.setHeader ('Access-Control-Allow-Headers', 'content-type')
	// //跨域允许的请求方式
	// req.setHeader("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
	//
	// res.write("我是测试")
	res.send ('测试')
})

app.listen ('4000', function () {
	console.log ('3000...')
})


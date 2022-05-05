/**
 * Date:2022/1/8 11:06 32
 * Name:Promise读取文件.js
 * Path:Web代码/src/com/charlatan/self_study/JavaScript/ES6-ES11/ES6/promise
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let fs = require ('fs')

// fs.readFile('test.txt', ((err, data) => {
// 		if (!err){
// 			console.log(data.toString());
// 		}else {
// 			console.log(err);
// 		}
// 	}
// ))

// 使用Promise
let pro = new Promise ((resolve, reject) => {
	fs.readFile ('test.txt', ((err, data) => {
		if ( !err )
			resolve (data.toString ())
		else
			reject (err)
	}))
})
pro.then ((value => {
	console.log (value)
}), (reason => {
	console.log (reason)
}))

/**
 * Time:2022/2/28 16:11 24
 * Name:封装promise的fs.js
 * Path:Web代码/src/com/charlatan/self_study/promise/基本使用
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 封装fs
 * @param path 访问路径
 * @returns {Promise<unknown>} 返回一个promise对象
 */
function promiseFs (path) {
	const fs = require ('fs')
	return new Promise ((resolve, reject) => {
		fs.readFile (path, function (err, data) {
			if ( err )
				reject (err)
			else
				resolve (data)
			
		})
	})
}

promiseFs ('./test/test.txt').then ((value) => {
	console.log (value.toString ())
}, (reason) => {
	console.log (reason)
})

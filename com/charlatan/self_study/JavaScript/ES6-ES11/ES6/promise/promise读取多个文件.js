/**
 * Date:2022/1/8 14:38 02
 * Name:promise读取多个文件.js
 * Path:Web代码/src/com/charlatan/self_study/JavaScript/ES6-ES11/ES6/promise
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let fs = require ('fs')
fs.readFile ('test.txt', ((err, data) => {
	if ( !err ) {
		console.log ('-->' + data.toString ())
		fs.readFile ('test-1.txt', ((err, data) => {
			if ( !err ) {
				console.log ('-->' + data.toString ())
				fs.readFile ('test-2.txt', ((err, data) => {
					if ( !err ) {
						console.log ('-->' + data.toString ())
					} else
						console.log (err)
				}))
			} else
				console.log (err)
		}))
	} else
		console.log (err)
}))
// 使用promise
let pro = new Promise (((resolve, reject) => {
	fs.readFile ('test.txt', (err, data) => {
		if ( !err )
			resolve ('++>' + data.toString ())
		else
			reject (err)
	})
}))

pro.then (value => {
	console.log (value)
	return new Promise ((resolve, reject) => {
		fs.readFile ('test-1.txt', (err, data) => {
			resolve ('++>' + data.toString ())
		})
	})
}).then (value => {
	console.log (value)
	return new Promise ((resolve, reject) => {
		fs.readFile ('test-1.txt', (err, data) => {
			resolve ('++>' + data.toString ())
		})
	})
}).then (value => {
	console.log (value)
})

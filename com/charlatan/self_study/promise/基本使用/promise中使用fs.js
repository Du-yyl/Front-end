/**
 * Time:2022/2/28 16:02 00
 * Name:promise中使用fs.js
 * Path:Web代码/src/com/charlatan/self_study/promise/基本使用
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


let fs = require ('fs')
fs.readFile ('./test/test.txt', function (err, data) {
	if ( err ) {
		console.log (err)
	} else {
		console.log (data.toString ())
	}
})

console.log ('---------------')

let pro = new Promise ((resolve, reject) => {
	fs.readFile ('./test/test.txt', function (err, data) {
		if ( err ) {
			reject (err)
		} else {
			resolve (data)
		}
	})
})

pro.then ((value) => {
	console.log (value.toString ())
	
}, (value) => {
	console.log (value)
})

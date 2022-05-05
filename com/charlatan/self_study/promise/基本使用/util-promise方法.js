/**
 * Time:2022/2/28 16:18 03
 * Name:util-promise方法.js
 * Path:Web代码/src/com/charlatan/self_study/promise/基本使用
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let utilPromise = require ('util')
let fs = require ('fs')

let minePromise = utilPromise.promisify (fs.readFile)

minePromise ('./test/test.txt').then ((value) => {
	console.log (value.toString ())
})

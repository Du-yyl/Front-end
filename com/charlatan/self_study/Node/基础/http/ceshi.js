/**
 * Date:2022/1/12 11:46 53
 * Name:ceshi.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/http
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de
 *  l'aimer.
 */
let str1 = 'gif.gif'
let Exg = new RegExp('\\b.gif\\b')
console.log(Exg.test(str1))
console.log(/\b.gif\b/.test('gif.gif'))

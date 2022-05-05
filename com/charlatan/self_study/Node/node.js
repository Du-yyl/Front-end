/**
 * Date:2022/1/1 16:26 38
 * Name:node.js
 * Path:Web代码/src/com/charlatan/self_study/Node
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
console.log ('你好，node')
let num1 = 200
let num2 = 345
console.log (num1 + num2)

console.log ('当引入模块成功时，被引入的模块代码会执行')
// 暴漏指定变量
exports.num1 = '我是被node.js扔出去的num1属性'
exports.num2 = '我是被node.js扔出去的num2属性'

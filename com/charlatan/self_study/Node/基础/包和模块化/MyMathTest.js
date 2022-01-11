/**
 * Date:2022/1/1 17:44 59
 * Name:MyMathTest.js
 * Path:Web代码/src/com/charlatan/self_study/Node
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
* Node 模块的分裂：
*   内部模块
*       由 Node 引擎提供，直接由名字进行引入
*   文件模块
*       由用户进行定义
*
* */

let Maths = require('./MyMath')
console.log(Maths.add(1, 2))
console.log(Maths.mul(1, 2))
console.log(Maths.mul(6, 2))

// Node中提供的模块
let fs = require('fs')
console.log(fs)

/**
 * Date:2022/1/1 17:18 13
 * Name:模块化.js
 * Path:Web代码/src/com/charlatan/self_study/Node
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/*
* 模块化：
*   降低耦合度
*
* 在node中，
*   一个JS文件就是一个模块
*   可以将一个模块化的JS理解为运行在独立的函数中，这个函数（JS）中的所有变量都是局部的，
*       并不是全局的，不能被其他的调用模块者直接访问
*
*   【所以为了让一个变量和内容进行暴漏，可以使用 exports 属性，将属性进行暴漏】
*
*
* 如何引入模块
*   通过require()进行指定
*   参数为字符串，使用相对路径要使用 . 或 .. 开始 ，后缀名可以省略
*
*   当使用 require 引入模块后，会返回一个对象
* */

let num = require('../../node.js')
console.log(num)
console.log(num.num1)

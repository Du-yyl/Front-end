/**
 * Date:2022/1/1 17:54 53
 * Name:模块化2.js
 * Path:Web代码/src/com/charlatan/self_study/Node
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

num1 = 200
/*
 * 在 Node 中没有window等全局属性
 *   但是由一个类型功能的属性 —— global
 *       全局中创建的属性会作为 global 的属性进行保存
 *       全剧中创建的函数都是作为global的属性进行保存
 * */

// console.log(global);
// console.log("----------------------");
// console.log(global.num1);

// 验证创建的属性和方法是不是运行在一个函数中的
// 运行在函数中的特性： 拥有 this ； 拥有arguments

// console.log(global.arguments);
// console.log(arguments);

/*
 arguments 中有一个属性 —— callee
 这个callee中保存了当前正在执行的函数对象
 
 * 当将Node代码写完并执行后，虽然写的是一个样子的，但是执行的时候，Node会在程序最顶部添加：
 *   function (exports, require, module, __filename, __dirname) {
 * 在最后添加
 *   }
 *   将整个书写的代码整合到一个方法中
 *
 *   当创建一个程序时，最外部添加的函数会自动添加5个属性，exports, require, module, __filename, __dirname
 *   所以访问时也是访问的这些属性
 *
 * */
// console.log(arguments.callee);
// console.log(arguments.callee.toString());

/*
 * Node 中的5个属性
 *
 *   exports
 *       将属性或函数暴漏出去
 *   require
 *       引入外部模块
 *   module
 *       代表当前模块本身
 *       exports 就是module的属性
 *
 *   __filename
 *       当前模块的文件夹路径
 *   __dirname
 *       当前模块的完整路径
 * */

console.log(exports)
console.log(module.exports)
console.log(exports === module.exports)
// console.log(module);
console.log(__dirname)
console.log(__filename)

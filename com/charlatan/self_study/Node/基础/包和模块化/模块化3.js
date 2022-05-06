/**
 * Date:2022/1/1 18:22 03
 * Name:模块化3.js
 * Path:Web代码/src/com/charlatan/self_study/Node
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/*
 exports.name = "张三"
 module.exports.age = 29;
 exports.sayName = function () {
 console.log("张三输出");
 }
 */

// 将多个属性更加简介输出

/*
 module.exports = {
 name:"李四",
 age:40,
 sayName:function () {
 console.log("李四输出");
 }
 }
 */

exports = {
    name: '王五',
    age: 10,
    sayName: function () {
        console.log('王五输出')
    },
}

/*
 * 一行部分代码：
 *   同样都是将属性进行简化的，但是 module 调用的能正常进行更改，但是不带有 module 的会报错
 *       因为和JS中的内容相同，　module 进行调用修改的是指定的属性，而不通过module会直接将这个exports进行重新赋值
 *       结果是module中的exports中的属性不发生改变，而是将exports中的属性重新命名，并切断了原来的引用地址，所以报错
 *
 * exports 和 module exports本质是相同的
 *   module exports 不仅能通过直接扔的形式，还能通过修改赋值的形式进行修改，功能更加强大
 * */

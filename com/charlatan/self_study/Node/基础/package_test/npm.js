/**
 * Date:2022/1/2 13:53 30
 * Name:npm.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let math = require('math')
console.log(math.add(12, 122));
/*
* 在 node 中，引入一个模块，会先在当前目录中的 node——module中寻找，
*   没有的去上一级寻找，如果有直接用；
*   如果还没有，会继续到上一级中寻找，有的话直接使用；
*   直到找到根目录，如果都没有，报错
* */


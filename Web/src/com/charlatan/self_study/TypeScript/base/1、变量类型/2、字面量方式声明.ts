/**
 * Time:2022/3/30 15:27 44
 * Name:2、字面量方式声明.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 如果这么声明，那么这个值只能是 10 不能进行更新，类似 const
let num: 10
// 修改时报错
// a = 20

// 定义三个，指定内容，只能是这三个中的其中一个【可以类似一个选项，在多个中选中指定元素】
let str: 'hello' | 'world' | '!'
str = 'hello'
str = 'world'
// 改为其他值时会报错
// str = '123'

// 指定内容，可以是两个类型
let c1: boolean | string
c1 = '123'
// 类型错误直接报错
// c = 123

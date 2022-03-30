/**
 * Time:2022/3/30 16:42 20
 * Name:5、object 和 array.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/*
表示一个对象
 */
let a: object
a = {}
a = function () {}

// 因为 普通对象，函数，数组 都是对象，所以限制性太低了
// 指定对象中可以包含什么类型，使用 ？ 表示这个属性是可选的，可有可无
let b: { name: string, age?: number }

// 不赋值直接报错，内容不对也报错
// b={}

b = { name: '测试' }

// 定义一个数组，并指定变量名，指定数据类型，使用 any 进行限制，可以不指定传入内容数量
// [变量名:变量类型]:any
// 键的名称是字符串类型，值的类型是任意类型
let c: { name: string, age?: number, [propName: string]: any }
c = { name: '测试数据', a: 1, c: 2, d: true }

// 指定一个函数，第一个变量是数字类型，第二个是数字类型，返回值是数字类型
let d: (a: number, b: number) => number

d = function (a, b): number {
  return 123
}

// 数组
// 因为开发中数组中一般存储一种类型数据，所以，使用 类型[] 的形式，指定声明什么类型的数组
let e: string[]
e = ['12', '12', '12']

let f: number[] | string[]
f = [1, 2, 3]

// 数字类型的数组
let g: Array<number | string>
g = [1, 2, 3, 4, '123']


/**
 * Time:2022/3/30 14:27 29
 * Name:1、基本类型.ts
 * Path:base
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
TS　中可以通过指定类型来确保指定的变量一定是指定的类型
  可以使用　JS　原本提供的全部类型，并且对于　JS　，TS　也有所增加，如：枚举类型
  number string boolean object array 都数据基本数据类型
 */

// 指定变量，并指定为 number 类型
let aa: number
aa = 2

let bb: string
let cc: boolean

let flag = true
// 变量在声明时，类型的指定和赋值是同时进行的，TS能自动进行类型检测
// flag = 123

/**
 * 通过类型的指定，指定传入内容的类型
 * @param a
 * @param b
 */
function sum1 (a: number, b: number): number {
  return a + b
}

console.log(sum1(1, 2))

// let num = 10
// let num: number = 10

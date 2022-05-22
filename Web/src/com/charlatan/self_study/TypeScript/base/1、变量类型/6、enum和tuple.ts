/*!*
 * Time:2022/3/30 17:56 14
 * Name:6、enum和tuple.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// tuple【元组：固定长度的数组】 多了不行，少了也不行，顺序错了也不行
let h: [string, number]
h = ['hello', 123]

// enum 【枚举：将可能的情况全部列出来
enum Gender {
  Male,
  Female
}

let i: { name: string, gender: Gender }
i = {
  name: '张三',
  // gender:1
  // 这里虽然使用的是 Gender.Male ，但是枚举类型原本的值已经在创建时存入，所以直接使用，保存的时候依然按照指定的数字进行保存的
  gender: Gender.Male,
}

console.log(i)

// 类型别名【通过 type 定义别名，如果指定的类型很长，并且多次使用，可以这么用
type MyType1 = string
type MyType2 = 1 | 6 | 8 | 3 | 4 | 5
let k: MyType2
let l: MyType2

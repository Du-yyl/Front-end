/**
 * Time:2022/3/30 15:35 16
 * Name:3、any和unknown类型.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


let c2: string

/*
any 可以代表任何类型，和原本的 JS　一样
如果定义变量时，不赋值，不指定类型，那么这个变量类型也是 any（隐式 any）
 */
let d2: any
d2 = true
d2 = 123
// 定义的时不对类型进行声明，并且不赋值，这个变量会默认为 any
let f2

// 因为 d 的类型是 any ，如果使用 any 类型向指定类型的变量赋值，那么也能成功赋值，并且被赋值的变量变为 any
c = d2

/*
unknown 也是指定类型为任意，表示未知
 */
let e2: unknown
e2 = 123
e2 = '123'
// 虽然 unknown 和 any 都能接收任意内容赋值，但是 unknown 变量不能为其他类型赋值，即使定义的参数类型相同，如果一定要进行赋值，先进行判断就行了
// c = e
if (typeof e2 === 'string') {
  c2 = e2
}

// 类型断言，可以告诉解析器指定变量的实际类型，下面两个语句效果相同
c2 = e2 as string
c2 = <string>e2

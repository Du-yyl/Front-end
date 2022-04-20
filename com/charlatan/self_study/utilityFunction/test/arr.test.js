/**
 * Time:2022/4/18 17:39 37
 * Name:arr.test.js
 * Path:test
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0, 1, 3, 5, 7, 9]

// Map
// require('../src/数组相关/map')
// console.log(arr.map((item, index, array) => {
//   return item * 2
//   // return { item, index, array }
// }))
//
// Reduce
// require('../src/数组相关/reduce')
// let ans = arr.reduce((res, value) => {
//   return res + value
// },20)
// console.log(ans);
//
// filter
// require('../src/数组相关/filter')
// let ans = arr.filter((item,index) => {
//   return item > 2
// })
// console.log(ans);
//
// find
// require('../src/数组相关/find')
// let ans = arr.find((item,index) => {
//   return item > 999
// })
// console.log(ans);
//
// find
// require('../src/数组相关/findIndex')
// let ans = arr.findIndex((item,index) => {
//   return item > 999
// })
// console.log(ans);
//
// every
// require('../src/数组相关/every')
// let ans = arr.every((item,index) => {
//   return item > -1
// })
// console.log(ans);
//
// every
// require('../src/数组相关/some')
// let ans = arr.some((item,index) => {
//   return item > 1
// })
// console.log(ans);
//
// 数组去重
// require('../src/数组相关/ArrayDeduplication')
// let ans = arr.ArrayDeduplication()
// console.log(ans);
//
// 数组合并
// require('../src/数组相关/concat')
// let ans = arr.concat([1,2,3],2,3,4)
// console.log(ans);
//
// 数组切片
// require('../src/数组相关/slice')
// let ans = arr.slice(4,5)
// console.log(ans);
//
// 数组扁平化
// let arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 0]]]]]
// require('../src/数组相关/flatten')
// let ans = arr1.flatten()
// console.log(ans)
//
// 数组分块
// require('../src/数组相关/chunk')
// let ans = arr.chunk(2)
// console.log(ans)
//
// 数组差集
// require('../src/数组相关/difference')
// let ans = arr.difference([1,2,3,4,34])
// console.log(ans)
//
// // 删除数组元素
// require('../src/数组相关/pull')
// let ans = arr.pull(1, 2, 3)
// console.log(ans)
// console.log(arr)

// 得到数组元素
require('../src/数组相关/drop')
let ans = arr.drop(9)
console.log(ans)

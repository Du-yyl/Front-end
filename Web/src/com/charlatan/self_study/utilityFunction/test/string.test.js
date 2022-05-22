/**
 * Time:2022/4/19 18:08 26
 * Name:string.test.js
 * Path:test
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

require('../src/字符串相关/reverseString')
require('../src/字符串相关/palindrome')

let str1 = '字符串反转测试'
let str2 = '是否是回文文回是否是'

console.log(str1.reverseString(str1))
console.log(str1.palindrome(str2))
console.log(str1.palindrome(str1))

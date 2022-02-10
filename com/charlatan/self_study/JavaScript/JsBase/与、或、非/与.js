/**
 * Time:2022/2/10 14:12 29
 * Name:与.js
 * Path:Web代码/src/com/charlatan/self_study/JavaScript/JsBase/与、或、非
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


let num1 = 10
let num2 = 11
let num3 = 100
let num4 = 0

// 两个数与的结果去与其中一个数，其结果还是两个数与的结果
console.log(num1 & num2)
console.log((num1 & num2) & num1)
console.log((num1 & num2) & num2)

/**
 * 通过与的结果来判断是否是偶数，因为一个数和 x 进行求与，如果结果是 1 ，那么这个数就是奇数，如果是 0 这个数就是偶数
 * @constructor
 */
function judgingEvenNumbers () {
  for (let i = 0, len = 10; i < len; i++) {
    if (!(i & 1)) {
      console.log(i)
    }
  }
}

new judgingEvenNumbers()


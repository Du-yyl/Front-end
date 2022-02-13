/**
 * Time:2022/2/12 14:45 39
 * Name:algorithm.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const { findID } = require('./data')

let lastID

/**
 * 将 ID 在方法中进行保存，并在下一次访问时进行更新
 * @returns {number}
 */
// function findUserId () {
// async function find () {
//   return findID()
// }
//
// find().then(value => {
//   return value[value.length - 1].uid
// })

findID().then(value => {
  // console.log(value[value.length - 1].uid)
  return value[value.length - 1].uid
}).then(function (value) {
  console.log(value)
  console.log('获取到上一个用户的 uid 开始用户的创建')
})

// }
//
// findUserId()

module.exports = {
  // findUserId,
}

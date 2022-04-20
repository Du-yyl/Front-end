/**
 * Time:2022/4/19 18:10 46
 * Name:reverseString.js
 * Path:src/字符串相关
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 字符串反转
 * @param str
 * @return {string}
 */
function reverseString (str) {
  let result = []
  for (let i = 0, len = str.length; i < len; i++) {
    result.push(str[len - 1 - i])
  }
  return result.join('')
}

String.prototype.reverseString = reverseString

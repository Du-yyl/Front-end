/**
 * Time:2022/4/19 18:15 16
 * Name:palindrome.js
 * Path:src/字符串相关
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 测试是否是回文
 * @param str
 */
function palindrome (str) {
  for (let i = 0, len = Math.floor(str.length); i < len; i++)
    if (str[i] !== str[str.length - 1 - i]) return false
  return true
}

String.prototype.palindrome = palindrome

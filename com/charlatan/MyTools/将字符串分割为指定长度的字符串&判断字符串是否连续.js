/**
 * Date:2022/1/10 13:34 28
 * Name:将字符串分割为指定长度的字符串&判断字符串是否连续.js
 * Path:Web代码/src/com/charlatan/homework/1月/9号【周日】
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let num = 'abcdefghijklmn'

/**
 * 将指定的字符串分割为指定指定长度的字符串数组，指定长度为一个
 * @param arr 要分割的字符串
 * @param arrLen 分割后每个字符串的长度
 * @returns {*[]|*} 将分割结果进行返回，当字符串总长度小于分割的长度时，将原字符串返回
 */
function cut(arr, arrLen) {
	let lens = arr.length
	if (lens <= arrLen) {
		return arr
	} else {
		let array = []
		for (let i = 0, len = lens - arrLen + 1; i < len; i++) {
			array.push(arr.slice(i, i + arrLen))
		}
		return array
	}
}


/**
 * 判断指定的字符串中是否含有连续的字符串
 * @param arr 要判断的字符串
 * @param lens 指定要判断的长度【默认为5】
 * @returns {boolean} 结果以布尔值形式进行返回
 */
function ditto(arr, lens = 5) {
	if (arr.length <= 0) {
		return false
	} else if (arr.length <= 2) {
		return true
	} else if (arr.length <= lens) {
		let flag = true
		let num = arr.charCodeAt(1) - arr.charCodeAt(0)
		for (let i = 2; i < arr.length; i++) {
			if (!(num === arr.charCodeAt(i) - arr.charCodeAt(i - 1))) {
				flag = false
				break
			}
		}
		return flag;
	} else {
		let flag = false
		cut(arr, lens).forEach((item, index, self) => {
			if (flag) {
				return flag
			}
			flag = ditto(item)
		})
		return flag
	}
}

// console.log(cut(num,6));
console.log(ditto(num));

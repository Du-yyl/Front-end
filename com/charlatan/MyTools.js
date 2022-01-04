/**
 * Date:2022/1/4 17:53 42
 * Name:MyTools.js
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let person = {
	name: '张三',
	age: 12,
	tab: [11, 22, 33, 44, 55, 66, 77, 88, 99, 0],
	
	/**
	 * 自定义迭代器，将对象中的数据进行遍历
	 * @param index 定义 index 下标，使语法更简洁，并可以设置
	 * @returns {{next: ((function(): ({value: number, done: boolean}|{value: undefined, done: boolean}))|*)}} 将迭代器使用闭包形式返回
	 */
	[Symbol.iterator](index = 0) {
		return {
			/**
			 * 迭代器核心函数
			 * @returns {{value: number, done: boolean}|{value: undefined, done: boolean}} 每一次迭代对下标进行判断，如果超过指定长度，那么就实现相应逻辑
			 */
			next: () => {
				return index < this.tab.length ? {value: this.tab[index++], done: false} : { value: undefined, done: true };
			}
		}
	}
}
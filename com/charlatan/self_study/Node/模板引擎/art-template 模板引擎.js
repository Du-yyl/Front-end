/**
 * Date:2022/1/12 22:26 35
 * Name:art-template 模板引擎.js
 * Path:Web代码/src/com/charlatan/self_study/Node/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 * 模板中的所有数据都是封装到对象中的，无论数据有多少，有几层，一定是在对象中
 * 使用时将这个对象传进去，在 source 中直接可以指定访问对象中的数据
 *  */

/*
 标准语法：
 
 {{value}}
 {{data.key}}
 {{data['key']}}
 {{a ? b : c}}
 {{a || b}}
 {{a + b}}
 */

let template = require ('art-template')

let value = {
	value: 'value',
}

let data = {
	data: {
		key: '数据中的.key',
	},
}

let base = {
	a: 0,
	b: 1,
	c: 2,
}

console.log (template.render ('value:{{ value }}', value))
console.log (template.render ('data.key:{{ data.key }}', data))
console.log (template.render ('a ? b : c: {{ a ? b : c }}', base))
console.log (template.render ('a || b: {{ a || b }}', base))
console.log (template.render ('a && b: {{ a && b }}', base))
console.log (template.render ('a + b: {{ a + b }}', base))

/*
 注意：<% %>与<%= %>的区别在于，<% %>里面是 Js 语句，<%= %>里面是表达式。
 
 <%= value %>
 <%= data.key %>
 <%= data['key'] %>
 <%= a ? b : c %>
 <%= a || b %>
 <%= a + b %>
 */

console.log (template.render ('value:<%= 1+1 %>', value))
console.log (template.render ('value:<% value %>', value))

/**
 * Date:2022/1/13 12:06 24
 * Name:art-template模板引擎-3.js
 * Path:Web代码/src/com/charlatan/self_study/Node/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let template = require ('art-template');
let fs = require ('fs');

let tools = {
	name: 'Lily',
	// user: {
	// 	name: '张三',
	// 	age: 20,
	// },
	person: {
		name: '李四',
		age: 30,
	},
};
/*
自定义变量

		//标准语法
		{{set name="Lily"}}
		{{set temp = data.sub.content}}

		//原始语法
		<%= var name="Lily" %>
		<% var temp = data.sub.content; %>
*/

// 标准语法
console.log (template.render ('name : name {{ name }} {{ set name = \'Tom\' }} {{ name }}', tools));
console.log (template.render ('name:{{set name=\'Lily\'}} {{ name }}', tools));

fs.readFile ('./index.html', function (err, data) {
	if (!err) {
		console.log (template.render (data.toString (), tools));
	} else {
		console.log (err);
	}
});

/*
	{{if value}} ... {{/if}}
	{{if v1}} ... {{else if v2}} ... {{/if}}
		
		<!--标准语法-->
		{{if age >= 20}}
		<p>年龄大于等于20</p>
		{{else if age < 15}}
		<p>年龄小于15</p>
		{{else}}
		<h1>年龄不符合要求</h1>
		{{/if}}
		
		原始语法

		<% if (value) { %> ... <% } %>
		<% if (v1) { %> ... <% } else if (v2) { %> ... <% } %>
		
		<!--原始语法-->
		<% if(age >= 20) { %>
		<p>年龄大于等于20</p>
		<% } else if(age < 15) { %>
		<p>年龄小于15</p>
		<% } else {%>
		<h1>年龄不符合要求</h1>
		<% } %>
*/

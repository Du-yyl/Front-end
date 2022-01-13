/**
 * Date:2022/1/12 23:25 25
 * Name:art-template模板引擎-2.js
 * Path:Web代码/src/com/charlatan/self_study/Node/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let template = require ('art-template');

let tools = {
	data: ['第一个数据', '第二个数据', '第三个数据', '第四个数据', '第五个数据', '第六个数据', '第七个数据', '第八个数据'],
	user: 'aaa',
	test1: 'test1111111111',
	test2: 'test2222222222',
};

/*
条件输出
	
	//标准语法
	{{if user==="aaa"}}
			<h2>{{user.name}}</h2>
	{{else if user==="bbb"}}
			<h2>{{user.title}}</h2>
	{{/if}}
	
	//原始语法
		<% if (user==="aaa") { %>
			<h2><%= user.name %></h2>
		<% else if (user==="bbb"){ %>
			<h2><%= user.title %></h2>
		% } %>
*/

console.log (template.render (' {{if user==="aaa"}}' +
		'   <h2>{{test1}}</h2>' +
		' {{else if user==="bbb"}}' +
		'   <h2>{{test2}}</h2>' +
		' {{/if}}', tools));

/*
循环输出

	当target 为数组时，$index 为数组的下标，$value 为下标对应的值；
	当target 为对象时，$index 为key，$value 为对应的value值；
	target 的默认值为 $data，也就是传入模板的原始数据对象；
	$index 和 $value，可以自定义：{{each data val key}};
	
		//标准语法
			{{each target}}
				{{$index}} {{$value}}
			{{/each}}
		//自定义键值名称，下面写法的结果和上面的一样
			{{each target item prop}}
				{{prop}} {{item}}
			{{/each}}
		
		//原始语法，data 支持 array 与 object 的迭代，其默认值为 $data
				<% for(var i = 0; i < data.length; i++){ %>
					<%= i %> <%= data[i] %>
				<% } %>
	*/

// 标准语法
console.log (template.render ('多种数据：{{ each data }} {{$index}} --> {{$value}} {{ /each }}', tools));
console.log ('-----------------------');
// 自定义键值名称
console.log (template.render ('自定义的键值：{{ each data i item }} {{item}} -> {{i}} {{ /each }}', tools));
console.log ('----------');

// 原始语法
console.log (template.render ('原始语法：' +
		'<% for (var i = 0 ; i < data.length ; i++ ) { %>' +
		'<%= i %> <%= data[i] %>' +
		'<% } %>', tools));

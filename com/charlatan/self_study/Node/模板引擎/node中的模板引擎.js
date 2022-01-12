/**
 * Date:2022/1/12 18:57 16
 * Name:node中的模板引擎.js
 * Path:Web代码/src/com/charlatan/self_study/Node/Express/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// art-template 模板引擎
let template = require ('art-template');
let fs = require ('fs');

fs.readFile ('node中的模板引擎-test.html', function (err, data) {
	
	if (!err) {
		
		/*
		* 这里使用读取到的 html 文件数据来进行数据内容的交换，因为读取文件的方法是异步的，所以要在方法内进行数据的使用，方法外访问不到
		*  */
		console.log (template.render (data.toString (), tools));
	} else {
		console.log (err);
	}
});

let tools = {
	name: 'Tom', data1: '数据1', data2: '数据2', data3: '数据3', data: ['我是', '多个', '数据', '的', '展示'],
};


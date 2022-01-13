/**
 * Date:2022/1/13 13:32 41
 * Name:模板引擎完成四级联动.js
 * Path:Web代码/src/com/charlatan/practice/JavaScript/模板引擎完成四级联动
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let area = require ('../data/area');
let template = require ('art-template');
let fs = require ('fs');

let o1 = [];
let o2 = [];
let o3 = [];
let o4;

for (let areaKey in area) {
	o1.push (areaKey);
}

for (let areaKeyKey in area.河南省[0]) {
	o2.push (areaKeyKey);
}

area.河南省[0].郑州市.forEach (function (item) {
	for (let itemKey in item) {
		o3.push (itemKey);
	}
});

o4 = item (area.河南省[0].郑州市[0].中原区);

/**
 * 去除空格并按照 、 进行分割为数组
 * @param string 传入指定的字符串
 * @returns {*[]} 将数组返回
 */
function item (string) {
	let str = [];
	let pom = [];
	for (const stringElement of string) {
		if (stringElement === ' ') {
			break;
		} else {
			str.push (stringElement);
		}
	}
	
	for (let sElement of str.join ('').split ('、')) {
		pom.push (sElement);
	}
	return pom;
}

let tools = {
	o1: o1,
	o2: o2,
	o3: o3,
	o4: o4,
};

fs.readFile ('模板引擎完成四级联动.html', function (err, data) {
	if (!err) {
		let str = template.render (data.toString (), tools);
		fs.writeFile ('test.html', str, function (err) {
			if (!err) {
				console.log ('写入成功。。。');
			} else {
				console.log (err);
			}
		});
	} else {
		console.log (err);
	}
});

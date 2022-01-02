/**
 * Date:2022/1/2 16:35 56
 * Name:fs-练习.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let fs = require('fs')

fs.open('test.txt', 'w', function (error, fd) {
	if (!error) {
		console.log(fd);
		fs.write(fd, "我是测试写入的字符串~~~~~~", function (error, written, string) {
			if (!error) {
				console.log("写入成功，写入了" + written + "个字符，写入的内容是：" + string);
			} else {
				console.log("程序写入失败");
			}
			fs.close(fd, function (error) {
				if (!error) {
					console.log("成功关闭");
					
				} else {
					console.log("程序关闭出错");
				}
			})
		})
	} else {
		console.log("程序打开出错");
	}
})
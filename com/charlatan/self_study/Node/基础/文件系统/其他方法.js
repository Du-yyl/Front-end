/**
 * Date:2022/1/2 18:00 13
 * Name:其他方法.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/*
	fs.existsSync(path)
		检查一个文件是否存在
*/

let fs = require('fs')
let isExist_1 = fs.existsSync('test.txt')
let isExist_2 = fs.existsSync('test.tst')
console.log(isExist_1)
console.log(isExist_2)

/*
	fs.statSync (path,callback)
	fs.stat (path,callback)
		获取文件状态
* */
fs.stat('test.txt', function (err, stats) {
  if (!err) {
    console.log(stats)
  } else {
    console.log('程序出错')
  }
})

/*
	fs.unlink (path,callback)
	fs.unlinkSync (path)
		删除文件
* */
// fs.unlinkSync('test.txt')

/*
	fs.readdir(path[,options],callback)
	fs,readdirSync ( path[,options])
		读取一个文件的目录,文件夹中的内容
		返回的是一个数组，一个元素就是文件夹或文件名
* */

console.log(fs.readdirSync('file_test'))

/*
	fs.truncate(path,len,callback)
	fs.truncateSync(path,len)
		将文件修改到指定大小
 */
// fs.truncateSync('test.txt', 30)

/*建立目录
– fs.mkdir(path[, mode], callback)
– fs.mkdirSync(path[, mode])

*/
// fs.mkdirSync('hello')

/*其他操作
• 删除目录
– fs.rmdir(path, callback)
– fs.rmdirSync(path)*/

// fs.rmdirSync('hello')

/*• 重命名文件和目录
– fs.rename(oldPath, newPath, callback)
– fs.renameSync(oldPath, newPath)*/

// fs.renameSync('test.txt','tttt.txt')

/*
• 监视文件更改写入
– fs.watchFile(filename[, options], listener)
	filename    监视的文件
	options     配置选项
	listener    回调函数，文件更改，回调执行

*/
// fs.watch('tttt.txt',{},function (even,string) {
// 	/*
// 	* even  更改的方式
// 	* string    谁发生的
// 	* */
//     console.log(even);
//     console.log(string);
//     console.log("我运行了");
// })

// 这个方法因为是间隔一段进行执行的，有时间隔时间很长，interval可以更改间隔时间
fs.watchFile('tttt.txt', { interval: 1 }, function (stat, end) {
  console.log('修改前大小：' + stat.size)
  console.log('修改后大小：' + end.size)
})

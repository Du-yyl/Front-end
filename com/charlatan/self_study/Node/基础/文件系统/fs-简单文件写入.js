/**
 * Date:2022/1/2 16:43 37
 * Name:fs-简单文件写入.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
*   简单文件写入
*       fs.writeFile(file, data[, options], callback)
*       fs.writeFileSync (file, data[, options], callback)
*           file    要操作的文件
*           data    要写入的数据
*           options 选项，写入设置【对象】
*               encoding    编码       默认是 utf8
*               mode        权限       默认是 0o666
*               flag        打开方式    默认是 w
*                   r   读
*                   w   写
*                   a   追加
*           callback写入完成执行
*   这种方式只是对异步方法的封装
* */

let fs = require('fs')
fs.writeFile('test.txt', '我是简单文件写入', { flag: 'a' }, function (err) {
  // if (!err){
  // 	console.log("写入成功");
  // }else {
  // 	console.log("写入失败");
  // }
  
  let str = err ? '写入失败' : '写入成功'
  console.log(str)
})

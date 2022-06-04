/**
 * Date:2022/1/2 15:42 50
 * Name:fs-同步文件.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 * 文件系统
 *   文件系统就是node来操作系统中的文件
 *
 * fs模块
 *   fs的方法是成对存在的分为同步和异步
 *   同步会阻塞程序的执行
 *   异步不会阻塞程序的执行，操作完成立马返回结果
 *
 * */

let fs = require('fs')
// console.log(fs);

/*
 打开文件：
 fs.openSync(path, flags[, mode])
 
 path    路径
 flags   打开文件要操作的类型
 r   只读
 w   可写的
 mode    设置文件操作权限，一般不写
 返回: 返回一个文件描述符作为结果，可以使用这个返回值进行各种操作
 
 如果指定的目录下没有要操作的文件，那么就创建一个文件出来
 
 */
let fd1 = fs.openSync('./file_test/test.txt', 'w')
let fd2 = fs.openSync('test.txt', 'w')
console.log(fd1)
console.log(fd2)
/*
 向文件中写入内容：
 fs.writeSync(fd, string[, position[, encoding]])
 
 fd      文件描述符
 string  写入内容
 position 写入起始位置（一般不写）
 encoding 写入内容的编码（一般不写）
 返回: <number> 写入的字节数。
 如果 string 是普通的对象，则它必须具有自有的（不是继承的）toString 函数属性。
 */
fs.writeSync(fd1, '这是第一个写入测试例子-1')
fs.writeSync(fd2, '这是第一个写入测试例子-2')

/*
 文件关闭：
 fs.closeSync(fd)
 fd ：要关闭的文件名
 */

fs.closeSync(fd1)
fs.closeSync(fd2)

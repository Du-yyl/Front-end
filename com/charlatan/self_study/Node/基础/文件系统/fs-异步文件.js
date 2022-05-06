/**
 * Date:2022/1/2 16:10 21
 * Name:fs-异步文件.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let fs = require('fs')
/*
 * 打开文件
 *   fs.open(path[, flags[, mode]], callback)
 *
 * 异步方法因为直接运行的，不存在等待返回，所以也不存在返回值
 *   异步方法都是由回调函数的参数返回的
 *
 * 回调函数的两个参数：
 *   error：  错误对象，如果没有错误返回null
 *   fd：     文件的描述符
 * node的设计思想都是遵循错误优先的，如果有错误，那个直接返回错误，反之继续执行
 *
 * 	写入：
 fs.write(fd, string[, position[, encoding]] , callback)
 
 关闭：
 *   fs.close(fd[, callback])
 
 fd <integer>
 callback <Function>
 err <Error>
 关闭文件描述符。 除了可能的异常之外，没有为完成回调提供任何参数。
 
 通过任何其他 fs 操作对当前正在使用的任何文件描述符 (fd) 调用 fs.close()，则可能会导致未定义的行为。
 * */

// 这里的 f 虽然是进行定义赋值了，但是因为同步的回调函数的函数一开始就叫给线程池中执行，所以当输出 f 时，因为异步先执行，所以时undefined
let f
fs.open('test.txt', 'w', function (err, fd) {
    if (!err) {
        console.log(fd)
        f = fd
        // 如果没有出错，开始写入操作
        fs.write(fd, '我时异步写入操作', function (error, written, string) {
            if (!error) {
                console.log('写入成功，写入了' + written + '个字符，写入了：' + string)
            } else {
                console.log('出错了')
            }
            fs.close(fd, function (error) {
                if (!error) {
                    console.log('关闭成功')
                } else {
                    console.log('关闭失败，请重试')
                }
            })
        })
    } else {
        console.log(err)
    }
})
// console.log(f);
console.log('程序从上往下执行')

let exg = /^(13[0-9]|14 |15 [0-3,5-9]|16 |17 |18 [0-9]|19)d {8}$/

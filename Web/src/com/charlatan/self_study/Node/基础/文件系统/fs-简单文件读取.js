/**
 * Date:2022/1/2 17:21 23
 * Name:fs-简单文件读取.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 * 简单文件读取：
 *   fs.readFile(path[, options], callback)
 *   fs.readFileSync (path[, options])
 *       path    路径
 *       options 读取选项
 *       callback回调，将读取内容返回
 *           err 错误
 *           data读取内容
 * */
let fs = require('fs')
fs.readFile('test.txt', function (err, data) {
    if (!err) {
        console.log(data.toString())
        fs.writeFile('ttest.txt', data, function (err) {
            if (!err) {
                console.log('文件写入成功')
            }
        })
    } else {
        console.log('文件读取错误')
    }
    
})

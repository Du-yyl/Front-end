/**
 * Date:2022/1/2 17:51 51
 * Name:fs-流式文件简单方式.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let fs = require('fs')

let ws = fs.createWriteStream("test.txt")
let rs = fs.createReadStream("ttest.txt")
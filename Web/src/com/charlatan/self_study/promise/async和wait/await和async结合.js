/**
 * Time:2022/3/1 10:10 36
 * Name:await和async结合.js
 * Path:Web代码/src/com/charlatan/self_study/promise/async和wait
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let fs = require('fs')
let util = require('util')
let mineReadFile = util.promisify(fs.readFile)

async function main () {
    let file1 = await mineReadFile('./test/h1.html')
    let file2 = await mineReadFile('./test/h2.html')
    let file3 = await mineReadFile('./test/h3.html')
    
    console.log(file1.toString())
    console.log(file2.toString())
    console.log(file3.toString())
}

main()

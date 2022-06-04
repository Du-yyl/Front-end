/**
 * Time:2022/1/14 14:20 04
 * Name:npm_test.js
 * Path:Web代码/src/com/charlatan/self_study/Node/npm
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

console.log('我是用于npm脚本测试使用的文件')

/*
 * 这句话必须在脚本的环境中访问，当都执行不会访问到这个变量
 * process.env.npm_package 这句话代表访问package中的内容
 *  */
console.log(process.env.npm_package_config_env)

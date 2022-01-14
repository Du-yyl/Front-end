/**
 *
 * Time:2022/1/14 15:21 43
 * Name:1、url.js
 * Path:Web代码/src/com/charlatan/self_study/Node/url
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let url = require('url')
let log4js = require('log4js')

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'cheese.log',
    },
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error',
    },
  },
})
let logger = log4js.getLogger('cheese')
logger.level = 'debug'

let urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

/*
* parse()
*   对指定的url进行解析
*  */
// console.log(url.parse(urlString))
// logger.debug(url.parse(urlString))

let urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3',
}

/*
* format
*   实现和parse相反的操作，将指定的对象组合成url
*  */
// logger.debug(url.format(urlObj))

/*
* resolve
*   可以实现路径的切换，第二个参数是要切换的路径地址
*  */
// logger.debug(url.resolve('https://www.hao123.com/a',"../"))
logger.debug(url.resolve('https://www.hao123.com/a', '/b'))

/*
*
*  */

let urlParams = new URLSearchParams(url.parse(urlString).search)
// logger.debug(urlParams)
logger.debug((urlParams.get('id')))






/**
 * Date:2022/1/13 12:43 42
 * Name:art-template模板引擎-4.js
 * Path:Web代码/src/com/charlatan/self_study/Node/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let template = require('art-template')

/*
 子模板
 使用子模板可以将网站公共区块(头部、底部)抽离到单独的文件中。
 
 标准语法
 
 {{include './header.art'}}
 {{include './header.art' data}}
 1
 2
 原始语法
 
 <% include('./header.art') %>
 <% include('./header.art', data) %>
 */
template.render()

/*
 标准语法
 
 {{extend './layout.art'}}
 {{block 'head'}} ... {{/block}}
 原始语法
 
 <% extend('./layout.art') %>
 <% block('head', function(){ %> ... <% }) %>
 */

console.log('{{extend \'./layout.art\'}}')

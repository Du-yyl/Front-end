/**
 * Time:2022/3/17 19:34 37
 * Name:index.js
 * Path:Web/src/com/charlatan/self_study/webpack/webpack体验/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 这个 index 文件是整个项目的入口文件，项目的打包由此开始
 
 1.
 开发环境：  webpack ./src/index.js -o ./build/built.js --mode=development
 webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
 整体打包环境是开发环境
 
 2.
 生产环境： webpack ./src/index.js -o ./build/builts.js --mode=production
 整体和开发环境相似，不过这个模式是生产环境
 
 3. 当将指定的内容进行打包后，会指定的目录下生成新的文件，并且这个生成的文件可以在node环境下直接运行
 
 4. 测试中，JS中引入css会导致出错，不能处理css/img等其他资源
 5. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
 */
// 引入JSON文件
import data from './data.json'
// 引入CSS文件

console.log(data)

function add (x, y) {
    return x + y
}

console.log(add(1, 2))

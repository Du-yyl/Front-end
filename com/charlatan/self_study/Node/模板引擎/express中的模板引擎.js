/**
 * Date:2022/1/13 15:26 09
 * Name:express中的模板引擎.js
 * Path:Web代码/src/com/charlatan/self_study/Node/模板引擎
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

let express = require('express')
let server = express()

let tools = {
  data1: '我是定义在模板字符串',
}

// 配置使用 srt-template 模板引擎
// 第一个参数表示当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎进行渲染
// express-art-template 中专门用来在express中把 art-template 进行分整合，但是还要安装依赖

// 这里写 art 只是推荐，也可以不写，更改 art 的名字即可
server.engine('html', require('express-art-template'))

// 所有的文件都要存放到 file 中的目录下，这个是默认承认的规范，如果需要更改可以使用以下
server.set('views', 'file')
server.use('/file/', express.static('../模板引擎/'))

server.get('/', function (request, response) {
  response.render('index.html', tools)
})

server.listen(3000, function () {
  console.log('3000 is listening ... ')
})


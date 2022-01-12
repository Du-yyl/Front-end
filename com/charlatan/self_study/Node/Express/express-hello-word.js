/**
 * Date:2022/1/12 15:28 26
 * Name:express-hello-word.js
 * Path:Web代码/src/com/charlatan/self_study/Node/Express
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入express
let express = require ('express');

// 创建服务器
let server = express ();

// 公开指定文件夹
// 公开后可以直接通过 ./文件夹名称/ xxx 的形式进行访问
// 语法：
//   server.user('/文件夹名称/',express.static('./文件夹名称/'))
server.use ('/file-test/', express.static ('./file-test/'));

// 收到的请求形式和 url
server.get ('/', function (request, response) {
  console.log (request.url);
  response.send ('hello world');
});

// 开启监听
server.listen ('3000', function () {
  console.log ('3000 is listening ... ');
});

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 指定main的路径和名字
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    // 是否进行语法检查
    lintOnSave: false,

//  第一种方式
//  开启代理服务器
//   devServer: {
//     proxy: 'http://localhost:5000',
//   },

//  第二种方式
//   devServer: {
//     proxy: {
//       // 请求前缀【如果
//       带有请求前缀，那么就会向指定网址发送请求（不检测自身有没有）】
//       '/ask': {
//         target: 'http://localhost:5000',
//         // 通过正则匹配，把发送过来的路径经过重写，将请求前缀干掉，Vue自己默认不会
//         pathRewrite: { '^/ask': '' },
//         // 用于支持websocket
//         ws: true,
//         // 用于控制请求中的host字段，如是是true，那么访问的服务器是多少端口，访问的host就是多少端口
//         // 如果是false，那么就会保存真实的值（8080）
//         changeOrigin: true,
//       },
//
//       // 第二个代理
//       '/ask1': {
//         target: 'http://localhost:5000',
//         pathRewrite: { '^/ask1': '' },
//         ws: true,
//         changeOrigin: true,
//       },
//     },
//   },
})

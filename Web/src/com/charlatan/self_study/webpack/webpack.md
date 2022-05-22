# webpack

## ·什么是webpack

webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。

在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。

## ·webpack的五个概念

1. Entry

   入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. Output

   输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. Loader

   Loader 让 webpack 能够去处理那些非 JavaScript 文件(webpack 自身只理解JavaScript)

4. Plugins

   插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. Mode

   模式(Mode)指示 webpack 使用相应模式的配置。

| 选项                    | 描述                                                         | 特点                       |
| ----------------------- | ------------------------------------------------------------ | -------------------------- |
| development（开发环境） | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和NamedModulesPlugin。 | 能让代码本地调试运行的环境 |
| production（生产环境）  | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin,SideEffectsFlagPlugin 和 TerserPlugin。 | 能让代码优化上线运行的环境 |

## webpack打包资源

1. webpack默认可以打包JS和JSON文件

    1. 这个 index 文件是整个项目的入口文件，项目的打包由此开始，通过指令指定要开始打包的文件和打包后的文件的保存位置

    2. 开发环境：

       ```shell
       webpack ./src/index.js -o ./build/built.js --mode=development
       ```

       webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境是开发环境

    3. 生产环境：

       ```shell
       webpack ./src/index.js -o ./build/builts.js --mode=production
       ```

       整体和开发环境相似，不过这个模式是生产环境

    4. 当将指定的内容进行打包后，会指定的目录下生成新的文件，并且这个生成的文件可以在node环境下直接运行

       测试中，JS中引入css会导致出错，不能处理css/img等其他资源

       生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化

2. 打包css样式文件【配置webpack配置】

   ```js
   
   /**
    * webpack.config.js
    *  这个文件是webpack的配置文件，
    *  作用：
    *    指示webpack运行某些内容，运行webpack指令时，会加载里面的配置
    *
    *  左右的构建工具都是基于node的，默认采用commonjs
    */
   
   let { resolve } = require('path')
   
   module.exports = {
   //  webpack 配置
   
   //  入口起点
     entry: './src/index.js',
   //  输出
     output: {
       // 输出文件名
       filename: 'built.js',
       // 输出路径
         // 这里的路径建议使用绝对路径，使用node中提供的API进行解决
       // __dirname nodejs 的变量，代表当前文件的目录的绝对路径
       path: resolve(__dirname, 'build'),
     },
   //  loader的配置
     module: {
       rules: [
         //  详细的 loader 配置【所有的配置都是一个个对象
         {
           // 匹配哪些文件
           test: /\.css$/,
           // 匹配指定文件，并使用use配置如何处理【使用哪些loader进行处理】
           use: [
             // use中loader执行顺序：从左到右，从下到上
             // 创建style标签，将js中的样式资源插入进行，添加到head中生效
             'style-loader',
             // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
             'css-loader',
           ],
         },
           //这里配置了less的选项，如果匹配到less，先通过less-loader进行编译，先转换为css，使用css处理进行处理，然后将其添加到头部
         {
           test: 	/\.less$/,
           use: [
             'style-loader',
             'css-loader',
             'less-loader',
           ],
         },
       ],
     },
   //   plugins 配置
     plugins: [
       //  详细的plugins配置
     ],
   //  模式【分为两种，一种是开发模式，一种是生产模式】
     mode: 'development',
     // mode: 'production',
   }
   
   ```

   配置好webpack的配置文件后，直接运行指令```webpack```就行了，需要注意的是webpack的配置文件和src是同一级目录下的

3. 打包HTML文件

   配置webpack配置文件：

   ​ 打包HTML文件，需要在loader和plugins进行引入指定配置，在使用的时候通过引入插件，并且通过创建独享的方式进行配置，通过传入对象进行内容的指定，使用template进行指定要使用的模板

   ```js
   // 引入HTMl打包插件
   let HtmlWebpackPlugin = require('html-webpack-plugin') 
   。。。。
   plugins: [
       //  使用的插件是 html-webpack-plugin ,这个是一个对象通过new的方式进行调用
       //  功能：默认创建一个空的 HTML 文件，引入打包输出的所有资源（JS/CSS）
       //  如果需要有结构的HTML，需要借助一个配置项：template 属性进行配置实现
       new HtmlWebpackPlugin({
         // 创建一个 HTML 文件，文件的结构就是引入的文件，并自动打包输出这个配置
         template:'./src/index.html'
       }),
     ],
   ```

4. webpack打包图片资源

   通过webpack进行打包的图片分为css引入的图片，通过 html 标签进行引入的图片，两种引入方式是通过不同的方式进行工作

   处理方式：

    1. 先进行配置img图片的打包，常用的图片文件都能通过指定一个配置进行处理

    2. 首先引入img/jpg/gif文件，那么就会进行```url-loader```进行处理，不过```url-loader```是通过```file-loader```进行处理的，二者相互依赖

    3. 处理图片的过程中可以使用```options```中的```limit```处理，指定文件的大小，如：`8*1024`就制定了小于8kb的文件都会被打包为bse64格式，开发中这个大小常常控制在8-12kb之间

    4. 如果是在html中引入指定的文件，那么webpack默认是不会进行打包的，如果要指定webpack进行处理那么就要使用新的配置项

        1. 先指定处理html的文件资源，通过引入```html-loader```进行处理，这个是专门进行图片的处理，并且如果发现了图片的引入，会调用url中的```url-loader```进行处理
        2. 不过在不同的版本中可能使用的语言不同，在```html-loader```处理中的是commonjs，但是在图片引入的```url-loader```
           中使用的却是es6中的模块引入，如果二者发生冲突，可以在```url-loader```中相应的配置

       ```js
       let { resolve } = require('path')
       let HtmlWebpackConfig = require('html-webpack-plugin')
       module.exports = {
         entry: './src/index.js',
         output: {
           filename: 'built.js',
           path: resolve(__dirname, 'build'),
         },
         module: {
           rules: [
             {
               test: /\.css$/,
               use: [
                 'style-loader',
                 'css-loader',
               ],
             }
             ,
             {
               /**
                * 这种配置只能解决CSS中引入图片的问题，如果使用html的一些标签进行引入，那么他会直接保存这句话，而不是进行编译
                */
               //  处理图片资源
               test: /\.(img|png|gif)$/,
               //  这里使用使用一个loader【这里需要下载 url-loader file-loader （url-loader是依赖 file-loader
               loader: 'url-loader',
               //  loader配置
               options: {
                 // 图片小于8kb就会进行base64处理
                 limit: 8 * 1024,
                 //  这里可能会出现：因为url-loader使用的是es6模块化解析的，而html-loader引入图片是通过commonjs进行引入的
                 //  解析可能出现问题：【object Module】
                 //  解决：关闭url-loader的es6模块化，使用commonJS模块
                 esModule: false,
                 
                 //  通过这种方式生成的文件名是通过hash值进行生成的，如果太长了可以进行限制
                 // [hash:10]  标识去哈希值前10位
                 // [ext]  表示出现文件原来使用什么文件名，现在依然使用什么文件名
                 name:'[hash:5].[ext]'
               },
             },
             {
               test: /\.html$/,
               // 处理 html 文件中的img图片（负责引入img，从而能被url-loader进行处理
               loader: 'html-loader',
             },
           ],
         },
         plugins: [
           new HtmlWebpackConfig({
             template: './src/index.html',
           }),
         ],
         mode: 'development',
       }
       ```

5. 打包其他资源

   ```js
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader',
           ],
         },
         {
           //  打包其他资源（除了html/js/css资源以外的资源
           // exclude可以指定不查找这个资源
           exclude:/\.(css|js|html)$/,
           loader:'file-loader'
         },
       ],
     }
   ```

6. devServer

   自动编译自动刷新工具，需要安装 ```webpack-dev-server```进行配置，这个工具能自动完成监视，加载，打开浏览器，刷新等功能【这个功能使用一个新的配置进行处理】

   ```js
   //  开发服务器 devServer ：用来自动化（自动编译，自动打开浏览器，自动刷新）
   //  特点：只会在内容中编译打包，不会有任何输出`
   
   //  启动devServer指令： npx npm  webpack-dev-server
     devServer: {
       // 项目构建后路径
       contentBase: resolve(__dirname, 'build'),
       // 启动gzip压缩
       compress: true,
       // 端口号
       port: 3000,
       // 自动打开浏览器
       open: true
     }
   ```

7. 开发资源配置

   ```js
   
   let { resolve } = require('path')
   let HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     entry: './src/index.js', output: {
       filename: 'build.js', path: resolve(__dirname, 'build'),
     }, module: {
       rules: [
         {
           test: /\.css$/, use: [
             'style-loader', 'css-loader'], // 指定文件的输出路径
           outputPath: 'css',
         }, {
           test: /\.less$/, use: [
             'style-loader', 'css-loader', 'less-loader'], outputPath: 'css',
         }, {
           test: /\.(img|png|gif)$/, loader: 'file-loader', options: {
             limit: 8 * 1024, name: '[hash:10].[ext]',
           }, outputPath: 'img',
         }, {
           test: /\.html$/, loader: 'html-loader',
         }, {
           exclude: /\.(css|js|html|less|img|png|gif)$/, loader: 'file-loader', outputPath: 'file',
         }],
     }, plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html',
       })], mode: 'development', devServer: {
       // 项目构建后路径
       contentBase: resolve(__dirname, 'build'), // 启动gzip压缩
       compress: true, // 端口号
       port: 3000, // 自动打开浏览器
       open: true,
     },
   }
   
   ```

## webpack生产版配置

1. css文件

     


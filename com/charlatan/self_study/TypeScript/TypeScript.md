# TypeScript

## TypeScript简介

1. TypeScript是JavaScript的超集。
2. 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。
3. TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。
4. TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。
5. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。



## 变量类型

1. 类型声明

   - 类型声明是TS非常重要的一个特点

   - 通过类型声明可以指定TS中变量（参数、形参）的类型

   - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错

   - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

   - 语法：

     ```tsx
     let 变量: 类型;
     
     let 变量: 类型 = 值;
     
     function fn(参数: 类型, 参数: 类型): 类型{
         ...
     }
     ```

2. TS 中的变量类型：

   1. 类型：

      |  类型   |       例子        |              描述              |
      | :-----: | :---------------: | :----------------------------: |
      | number  |    1, -33, 2.5    |            任意数字            |
      | string  | 'hi', "hi", `hi`  |           任意字符串           |
      | boolean |    true、false    |       布尔值true或false        |
      | 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
      |   any   |         *         |            任意类型            |
      | unknown |         *         |         类型安全的any          |
      |  void   | 空值（undefined） |     没有值（或undefined）      |
      |  never  |      没有值       |          不能是任何值          |
      | object  |  {name:'孙悟空'}  |          任意的JS对象          |
      |  array  |      [1,2,3]      |           任意JS数组           |
      |  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
      |  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

3. 声明：

   1. 基本类型的声明

      1. 可以在创建的时候直接进行声明，TS　中可以通过指定类型来确保指定的变量一定是指定的类型
           可以使用　JS　原本提供的全部类型，并且对于　JS　，TS　也有所增加，如：枚举类型
           number string boolean object array 都数据基本数据类型

      2. 

         ```tsx
         // 指定变量，并指定为 number 类型
         let a: number
         a = 2
         
         let b: string
         let c: boolean
         
         function sum (a: number, b: number): number {
           return a + b
         }
         ```

      3. 如果定义变量的时候直接进行了变量的赋值，那么可以对类型的指定进行省略

         ```tsx
         let flag = true
         // 变量在声明时，类型的指定和赋值是同时进行的，TS能自动进行类型检测
         // flag = 123
         
         // 这两种声明方式完全相同，所以大部分使用的是第二种
         let num = 10
         let num: number = 10
         ```

   2. 字面量的声明

      1. 如果定义为`let 变量 : 10`，那么这个内容就指定是指定的内容不能改变，类似`const`不过不常用

      2. 如果定义为`let 变量：变量1 | 变量2`，那么就可以将定义的变量在指定的两个变量中进行指定，这种方法更加灵活，类似与选项

      3. 如果定义为`let 变量：string | number`，那么就是指定了两种类型，这两种类型的变量都可以

         ```tsx
         // 如果这么声明，那么这个值只能是 10 不能进行更新，类似 const
         let num: 10
         // 修改时报错
         // a = 20
         
         // 定义三个，指定内容，只能是这三个中的其中一个【可以类似一个选项，在多个中选中指定元素】
         let str: 'hello' | 'world' | '!'
         str = 'hello'
         str = 'world'
         // 改为其他值时会报错
         // str = '123'
         
         // 指定内容，可以是两个类型
         let c: boolean | string
         c = '123'
         // 类型错误直接报错
         // c = 123
         ```

   3.  any 和 unknown 的声明

      1. any

         1. any 类型可以接收任意内容的赋值，并且可以赋值给任意已指定类型的变量，并且**被赋值变量指定的类型将被无视**
         2. 显式 any ：定义时直接指定为 any :`let 变量 = any`，
         3. 隐式 any : 定义时不进行赋值，不进行类型的指定：`let 变量`，这种方式默认也是any

         ```ts
         let c: string
         
         /*
         any 可以代表任何类型，和原本的 JS　一样
         如果定义变量时，不赋值，不指定类型，那么这个变量类型也是 any（隐式 any）
          */
         let d: any
         d = true
         d = 123
         // 定义的时不对类型进行声明，并且不赋值，这个变量会默认为 any
         let f
         
         // 因为 d 的类型是 any ，如果使用 any 类型向指定类型的变量赋值，那么也能成功赋值，并且被赋值的变量变为 any
         c = d
         ```

         

      2. unknown 

         1. unknown 也是可以接收任意类型的赋值，基本使用和 any 差不多

         2. 定义的时候直接指定：`let e: unknown`，表示类型未知，接收任何参数

         3. unknown 定义的时候虽然能接收任何数据，但是如果想要进行赋值，并且要赋值的变量已经指定了类型，那么无论如何都不能赋值，除非进行类型的判断；或进行类型断言（可以告诉解析器指定变量的实际类型）

            **<u>类型断言</u>**：【以下两种方式效果一样】

            1. `指定变量 as string` 使用 `as` 语句进行指明类型
            2. ` <string>指定变量` 使用这种方式也可以进行指定

         ```ts
         /*
         unknown 也是指定类型为任意，表示未知
          */
         let e: unknown
         e = 123
         e = '123'
         // 虽然 unknown 和 any 都能接收任意内容赋值，但是 unknown 变量不能为其他类型赋值，即使定义的参数类型相同，如果一定要进行赋值，先进行判断就行了
         // c = e
         if (typeof e === 'string') {
           c = e
         }
         
         // 类型断言，可以告诉解析器指定变量的实际类型，下面两个语句效果相同
         c = e as string
         c = <string>e
         
         ```

   4. void 和 never 的声明：

      1. void ：代表不能有任何内容，一般用于函数的返回值中，如果指定 `void`那么这个函数只能返回 **`空` | `null` | `undefined`** 这三种类型，不能是其他类型

      2. never ： 代表永远不会有内容，不能有任何值，一般用于方法中，不返回任何内容（空也不能返回），这种方法一般用于抛出异常

         ```ts
         /*
         void 【函数没有返回值，可以使用 void 可以返回 空 | undefined | null 都可以】
          */
         function sum():void {
           // return
           // return null
           return undefined
         }
         
         /*
         never 表示永远表示永远没有返回结果【这个什么都不能返回，空也算返回的，所以，这个一般用于指定报错的】
          */
         function sam():never {
           throw new Error('错误')
         }
         
         ```

   5. Object 和 Array 的声明

      1. Object：声明一个对象，但是JS中`{} ,function ,array`等都是对象，所以不能使用`let 变量:object`进行强限制`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型

         1. 定义普通对象：

            1. 指定对象中必须存在一些内容，`let 变量:{ name: string ,age: number}`表示必须有`name`和`age`并且不能多，不能少，类型也必须正确

            2. 如果一个内容不确定，可以使用 `?` 表示不确定，可以定义时不传入 `let 变量:{ name: string ,age？: number}`这个表示 `age`是可以不传的

            3. 如果传入的内容不确定，并且数量也不确定，**`let 变量名: { 键: 值, 键?: 值, [传入变量的变量名类型: 指定类型]: 传入的变量值类型 }`**表示传入的内容和数量都不确定

               ```ts
               // 指定对象中可以包含什么类型，使用 ？ 表示这个属性是可选的，可有可无
               let b: { name: string, age?: number }
               
               // 不赋值直接报错，内容不对也报错
               // b={}
               
               b = { name: '测试' }
               
               // 定义一个数组，并指定变量名，指定数据类型，使用 any 进行限制，可以不指定传入内容数量
               // [变量名:变量类型]:any
               // 定义的是多余的名称，键的名称是字符串类型，值的类型是任意类型
               let c: { name: string, age?: number, [propName: string]: any }
               c = { name: '测试数据', a: 1, c: 2 ,d:true}
               ```

         2. 指定 Function

            指定Function类似与箭头函数`let 变量名: (变量名: 变量类型, 变量名: 变量类型, ... ) => 返回值类型`

            ```ts
            // 指定一个函数，第一个变量是数字类型，第二个是数字类型，返回值是数字类型
            let d: (a: number, b: number) => number
            
            d = function (a, b): number {
              return 123
            }
            ```

      2. Array

         定义数组就是在指定的类型后加上` [] `定义指定的数组类型（因为开发中一个数组只有一种数据类型，所以，定义的时候直接定义数组类型）

         1.  使用`类型+[]`的形式定义

            ```ts
            let 变量名 = 类型[]
            ```

         2. 使用泛型定义

            ```ts
            let 变量名: Array<数组内元素类型 | 数组内元素类型>
            ```

            

         ```ts
         // 数组
         // 因为开发中数组中一般存储一种类型数据，所以，使用 类型[] 的形式，指定声明什么类型的数组
         let e: string[]
         e = ['12', '12', '12']
         
         let f: number[] | string[]
         f = [1, 2, 3]
         
         // 数字类型的数组
         let g: Array<number | string>
         g = [1, 2, 3, 4, '123']
         
         ```

      3.  tuple 和 enum

         1. tuple 【元组：固定长度的数组】定义的时候，内容长了不行，短了不行，顺序不对也不行

            ```ts	
            
            // tuple【元组：固定长度的数组】 多了不行，少了也不行，顺序错了也不行
            let h: [string, number]
            h = ['hello', 123]
            
            ```

         2. enum 【枚举：将可能结果进行列举】使用定义的变量内容更方便

            ```ts	
            // enum 【枚举：将可能的情况全部列出来
            enum Gender {
              Male,
              Female
            }
            
            let i: { name: string, gender: Gender }
            i = {
              name: '张三',
              // gender:1
              // 这里虽然使用的是 Gender.Male ，但是枚举类型原本的值已经在创建时存入，所以直接使用，保存的时候依然按照指定的数字进行保存的
              gender: Gender.Male,
            }
            ```

         3. <u>**类型别名**</u>

            通过 type 定义别名，如果指定的类型很长，并且多次使用，可以这么用

            ```ts
            // 类型别名【通过 type 定义别名，如果指定的类型很长，并且多次使用，可以这么用
            type MyType1 = string
            type MyType2 = 1 | 6 | 8 | 3 | 4 | 5
            let k: MyType2
            let l: MyType2
            ```



## 编译选项

- 自动编译文件

  - 编译文件时，使用 `-w `指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

  - 示例：

    - ```powershell
      tsc xxx.ts -w
      ```

- 自动编译整个项目

  - 如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

  - 但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json

  - tsconfig.json是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译

  - 配置选项：

    - include

      - 定义希望被编译文件所在的目录

      - 默认值：["\*\*/\*"]

      - 示例：

        - ```json
          "include":["src/**/*", "tests/**/*"]
          ```

        - 上述示例中，所有src目录和tests目录下的文件都会被编译

    - exclude

      - 定义需要排除在外的目录

      - 默认值：["node_modules", "bower_components", "jspm_packages"]

      - 示例：

        - ```json
          "exclude": ["./src/hello/**/*"]
          ```

        - 上述示例中，src下hello目录下的文件都不会被编译

    - extends

      - 定义被继承的配置文件

      - 示例：

        - ```json
          "extends": "./configs/base"
          ```

        - 上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

    - files

      - 指定被编译文件的列表，只有需要编译的文件少时才会用到

      - 示例：

        - ```json
          "files": [
              "core.ts",
              "sys.ts",
              "types.ts",
              "scanner.ts",
              "parser.ts",
              "utilities.ts",
              "binder.ts",
              "checker.ts",
              "tsc.ts"
            ]
          ```

        - 列表中的文件都会被TS编译器所编译

      - compilerOptions

        - 编译选项是配置文件中非常重要也比较复杂的配置选项

        - 在compilerOptions中包含多个子选项，用来完成对编译的配置

          - 项目选项

            - target

              - 设置ts代码编译的目标版本

              - 可选值：

                - ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

              - 示例：

                - ```json
                  "compilerOptions": {
                      "target": "ES6"
                  }
                  ```

                - 如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

            - lib

              - 指定代码运行时所包含的库（宿主环境）

              - 可选值：

                - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

              - 示例：

                - ```json
                  "compilerOptions": {
                      "target": "ES6",
                      "lib": ["ES6", "DOM"],
                      "outDir": "dist",
                      "outFile": "dist/aa.js"
                  }
                  ```

            - module

              - 设置编译后代码使用的模块化系统

              - 可选值：

                - CommonJS、UMD、AMD、System、ES2020、ESNext、None

              - 示例：

                - ```typescript
                  "compilerOptions": {
                      "module": "CommonJS"
                  }
                  ```

            - outDir

              - 编译后文件的所在目录

              - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

              - 示例：

                - ```json
                  "compilerOptions": {
                      "outDir": "dist"
                  }
                  ```

                - 设置后编译后的js文件将会生成到dist目录

            - outFile

              - 将所有的文件编译为一个js文件

              - 默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

              - 示例：

                - ```json
                  "compilerOptions": {
                      "outFile": "dist/app.js"
                  }
                  ```

            - rootDir

              - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

              - 示例：

                - ```json
                  "compilerOptions": {
                      "rootDir": "./src"
                  }
                  ```

            - allowJs

              - 是否对js文件编译

            - checkJs

              - 是否对js文件进行检查

              - 示例：

                - ```json
                  "compilerOptions": {
                      "allowJs": true,
                      "checkJs": true
                  }
                  ```

            - removeComments

              - 是否删除注释
              - 默认值：false

            - noEmit

              - 不对代码进行编译
              - 默认值：false

            - sourceMap

              - 是否生成sourceMap
              - 默认值：false

              

          - 严格检查

            - strict
              - 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
            - alwaysStrict
              - 总是以严格模式对代码进行编译
            - noImplicitAny
              - 禁止隐式的any类型
            - noImplicitThis
              - 禁止类型不明确的this
            - strictBindCallApply
              - 严格检查bind、call和apply的参数列表
            - strictFunctionTypes
              - 严格检查函数的类型
            - strictNullChecks
              - 严格的空值检查
            - strictPropertyInitialization
              - 严格检查属性是否初始化

          - 额外检查

            - noFallthroughCasesInSwitch
              - 检查switch语句包含正确的break
            - noImplicitReturns
              - 检查函数没有隐式的返回值
            - noUnusedLocals
              - 检查未使用的局部变量
            - noUnusedParameters
              - 检查未使用的参数

          - 高级

            - allowUnreachableCode
              - 检查不可达代码
              - 可选值：
                - true，忽略不可达代码
                - false，不可达代码将引起错误
            - noEmitOnError
              - 有错误的情况下不进行编译
              - 默认值：false

## webpack

- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。

- 步骤：

  1. 初始化项目

     - 进入项目根目录，执行命令 ``` npm init -y```
       - 主要作用：创建package.json文件

  2. 下载构建工具

     - ```npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin```
       - 共安装了7个包
         - webpack
           - 构建工具webpack
         - webpack-cli
           - webpack的命令行工具
         - webpack-dev-server
           - webpack的开发服务器
         - typescript
           - ts编译器
         - ts-loader
           - ts加载器，用于在webpack中编译ts文件
         - html-webpack-plugin
           - webpack中html插件，用来自动创建html文件
         - clean-webpack-plugin
           - webpack中的清除插件，每次构建都会先清除目录

  3. 根目录下创建webpack的配置文件webpack.config.js

     - ```javascript
       const path = require("path");
       const HtmlWebpackPlugin = require("html-webpack-plugin");
       const { CleanWebpackPlugin } = require("clean-webpack-plugin");
       
       module.exports = {
           optimization:{
               minimize: false // 关闭代码压缩，可选
           },
       
           entry: "./src/index.ts",
           
           devtool: "inline-source-map",
           
           devServer: {
               contentBase: './dist'
           },
       
           output: {
               path: path.resolve(__dirname, "dist"),
               filename: "bundle.js",
               environment: {
                   arrowFunction: false // 关闭webpack的箭头函数，可选
               }
           },
       
           resolve: {
               extensions: [".ts", ".js"]
           },
           
           module: {
               rules: [
                   {
                       test: /\.ts$/,
                       use: {
                          loader: "ts-loader"     
                       },
                       exclude: /node_modules/
                   }
               ]
           },
       
           plugins: [
               new CleanWebpackPlugin(),
               new HtmlWebpackPlugin({
                   title:'TS测试'
               }),
           ]
       
       }
       ```

  4. 根目录下创建tsconfig.json，配置可以根据自己需要

     - ```json
       {
           "compilerOptions": {
               "target": "ES2015",
               "module": "ES2015",
               "strict": true
           }
       }
       ```

  5. 修改package.json添加如下配置

     - ```json
       {
         ...略...
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
         ...略...
       }
       ```

  6. 在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器

     
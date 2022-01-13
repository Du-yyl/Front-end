NPM
=

NPM: Node Package Manager
-

> 要在指定的文件夹中安装指定的npm安装，这个安装包中一定要有 package.json 文件

### 常用命令

全局安装包

```shell
npm install 安装文件名字 --global (-g)
```

卸载指定包

```shell
npm uninstall 包名 -g
```

搜索指定包

```shell
npm search 包名
```

创建一个 package.json

```shell
npm init -y
```

将包存在开发环境中并在package中保存，会在 dependencies 下进行添加指定的版本

```shell
npm i 包名 --dev-save
npm i 包名 -S
```

会在分组“devDependencies”中链接包，如果 dependencies 中有那么也会迁移至devDependencies中

```shell
npm i 包名 -D
```

> devDependencies 和 dependencies 的区别：
> devDependencies 为开发依赖【线上使用】；dependencies 为生产依赖【开发是使用】
> 当别人拿到代码安装依赖时，可以直接通过 `npm i` 来安装开发的依赖，而不用安装生产依赖


将包的依赖关系进行列明

```shell
npm list | grep 包名
```

只安装生产环境的包【dependencies 下的】

```shell
npm i --production
```

查看npm包的版本

```shell
npm view 包名
```

安装指定版本的包

```shell
npm i 包名@版本 —S
```

安装指定版本的最高版本

```shell
npm i 包名@第一个版本号 -S
npm i jquery@1 -S  安装版本号为1的最高版本
```

> 版本号锁定：  
> 版本号一般是3个数字的间隔，第一个为主版本号（major），第二个是次版本号【添加新功能或修改】（minor），第三个是补丁【偶数稳定】（patch）     
> 在 package.json 中版本号  
> 由 " ^ " 开始，代表锁主版本号  
> 由 " ~ " 开始代表锁主版本号和次版本号  
> 什么也不写，代表锁版本，指定就是这个版本，不能是其他版本  
> 只有一个 " * " ，表示用这个包地最高版本

查看安装的包中哪些是过期的

```shell
npm outdated
```

当我们使用`npm update`进行更新包时，会更新到配置文件中最新地期待的状态，如：若一个包的现有版本为^1.0.0，它的 1 版本中最高为1.2.2，那么npm指定自动更新时会自动将这个更新到最新的版本，

清理npm缓存

```shell
npm cache clean --force
```



















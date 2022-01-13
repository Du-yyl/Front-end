MongoDB的安装注意事项和启动
=

- `MongoDB`安装时要手动配置路径，当在控制台输入：

```shell
mongod --version
```

出现配置信息说明安装并配置成功

- MongoDB会在启动目录的根目录下的`data\db`目录下作为数据的默认存储目录  
  也可以通过 ：

```shell
  mongod --dbpath=数据存储路径
```

- 停止服务：
  1. 在开启的控制台直接 ctrl + c 进行停止
  2. 直接将开始的窗口关闭即可


- mongo链接数据库：   
  mongo 回车 ，连接本地的mongo服务
- 退出：   
  在连接的状态下，输入 exit

基本命令
=

```shell
  show dbs                查看数据库列表
  use 数据库名称           切换到指定数据库【如果没有会自动新建】
                         （这里的新建不会立即新建，而是当插入第一个数据时才会新建）
  db                      查看当前操作的数据库
  show collection         显示指定数据库中的项目
  db.项目名称.find()        显示指定名称的全部内容
```


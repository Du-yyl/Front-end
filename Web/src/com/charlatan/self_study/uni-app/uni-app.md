## 基础模板结构

- `pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等

- `manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。

- `App.vue`是我们的跟组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件，可以调用应用的生命周期函数。

- `main.js`是我们的项目入口文件，主要作用是初始化`vue`实例并使用需要的插件。

- `uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。

- ```unpackage``` 就是打包目录，在这里有各个平台的打包文件

- ```pages``` 所有的页面存放目录

- ```static``` 静态资源目录，例如图片等

- ```components``` 组件存放目录

为了更好的兼容不同设备的布局，建议使用`flex`进行页面布局

## 全局配置和局部配置

### 全局配置

| 属性                         | 类型     | 默认值  | 描述                                                         |
| ---------------------------- | -------- | :-----: | ------------------------------------------------------------ |
| navigationBarBackgroundColor | HexColor | #F7F7F7 | 导航栏背景颜色（同状态栏背景色）                             |
| navigationBarTextStyle       | String   |  white  | 导航栏标题颜色及状态栏前景颜色，仅支持 black/white           |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                           |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                 |
| backgroundTextStyle          | String   |  dark   | 下拉 loading 的样式，仅支持 dark / light                     |
| enablePullDownRefresh        | Boolean  |  false  | 是否开启下拉刷新，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)。 |
| onReachBottomDistance        | Number   |   50    | 页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) |

### 局部配置

基本和小程序类似，设置样式后在配置中进行引入，并且通过各自的配置对每个内容进行单独的配置

| 属性  | 类型   | 默认值 | 描述                                                         |
| ----- | ------ | ------ | ------------------------------------------------------------ |
| path  | String |        | 配置页面路径                                                 |
| style | Object |        | 配置页面窗口表现，配置项参考 [pageStyle](https://uniapp.dcloud.io/collocation/pages?id=style) |

```json
	{
		"path": "pages/main/main",
		// 设置默认组件自立的页面样式
		"style": {
			"navigationBarTitleText": "这是第一个自定义页面",
			// 编译到 H5 的独有样式
			"h5":{
				// 下拉刷新
				"pullToRefresh":{
					"color":"#007AFF"
				}
			}
		}
	}
```

每个单独的组件都是一个单独的对象，在这个对象中配置独有内容，并且如果和全局重复会使用局部配置

### tabbar

| 属性            | 类型     | 必填 | 默认值 | 描述                                                 | 平台差异说明              |
| --------------- | -------- | ---- | ------ | ---------------------------------------------------- | ------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色                                 |                           |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色                             |                           |
| backgroundColor | HexColor | 是   |        | tab 的背景色                                         |                           |
| borderStyle     | String   | 否   | black  | tabbar 上边框的颜色，仅支持 black/white              | App 2.3.4+ 支持其他颜色值 |
| list            | Array    | 是   |        | tab 的列表，详见 list 属性说明，最少2个、最多5个 tab |                           |
| position        | String   | 否   | bottom | 可选值 bottom、top                                   | top 值仅微信小程序支持    |

其中页面显示的`list`是一个数组，里面的每一个元素都是一个对象，在这个对象中配置每一个不同的配置元素

| 属性             | 类型   | 必填 | 说明                                                         |
| ---------------- | ------ | ---- | ------------------------------------------------------------ |
| pagePath         | String | 是   | 页面路径，必须在 pages 中先定义                              |
| text             | String | 是   | tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标 |
| iconPath         | String | 否   | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片，不支持字体图标 |
| selectedIconPath | String | 否   | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效 |

```json
	// 设置导航栏
	"tabBar":{
		// 默认颜色
		"color":"#4CD964",
		// 选中颜色
		"selectedColor":"#007AFF",
		// 导航栏背景色
		"backgroundColor":"#F0AD4E",
		// 导航栏要展示的内容
		"list":[
			// 每一个元素都是一个对象，并且渲染顺序按照
			{
				"pagePath":"pages/index/index",
				"text":"index",
				// 显示的图标
				"iconPath":"static/tab-home.png",
				// 选中是的样式
				"selectedIconPath":"static/tab-home-current.png"
			},
			{
				"pagePath":"pages/main/main",
				"text":"main",
				"iconPath":"static/tab-my.png",
				"selectedIconPath":"static/tab-my-current.png"
			}
		]
		
	},
```

### condition启动页配置

启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。

**属性说明：**

| 属性    | 类型   | 是否必填 | 描述                             |
| ------- | ------ | -------- | -------------------------------- |
| current | Number | 是       | 当前激活的模式，list节点的索引值 |
| list    | Array  | 是       | 启动模式列表                     |

**list说明：**

| 属性  | 类型   | 是否必填 | 描述                                   |
| ----- | ------ | -------- | -------------------------------------- |
| name  | String | 是       | 启动模式名称                           |
| path  | String | 是       | 启动页面路径                           |
| query | String | 否       | 启动参数，可在页面的 onLoad 函数里获得 |

```json
	// 用于启动项目后快速到达某个页面
	"condition":{
		// 是否开始快速抵达，当前激活的模式（list 的索引项）
		"current":0,
		// 启动模式列表
		"list":[
			{			// 启动模式名称
			"name":	"main",
			// 启动页面路径
			"path":	"pages/main/main",
			// 启动参数，可在页面的 onLoad 函数里获得
			"query":	"id=50"
			}
		]
	},
```

## 组件的基本使用

### text

| 属性 | 类型 | 默认值 | 必填 | 说明 | | :--------: | :-----: | :----: | :--: | :--------------------------------------------: | |
selectable | boolean | false | 否 | 文本是否可选 | | space | string | . | 否 | 显示连续空格，可选参数：`ensp`、`emsp`、`nbsp` | | decode |
boolean | false | 否 | 是否解码 |

- `text` 组件相当于行内标签、在同一行显示
- 除了文本节点以外的其他节点都无法长按选中

### view

| 属性名                 | 类型    | 默认值 | 说明                                                         |
| :--------------------- | :------ | :----- | :----------------------------------------------------------- |
| hover-class            | String  | none   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
| hover-stop-propagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持） |
| hover-start-time       | Number  | 50     | 按住后多久出现点击态，单位毫秒                               |
| hover-stay-time        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                           |

### button

| 属性名           | 类型    | 默认值       | 说明                                                         |      | 平台差异说明                                             |
| :--------------- | :------ | :----------- | :----------------------------------------------------------- | :--- | :------------------------------------------------------- |
| size             | String  | default      | 按钮的大小                                                   |      |                                                          |
| type             | String  | default      | 按钮的样式类型                                               |      |                                                          |
| plain            | Boolean | false        | 按钮是否镂空，背景色透明                                     |      |                                                          |
| disabled         | Boolean | false        | 是否禁用                                                     |      |                                                          |
| loading          | Boolean | false        | 名称前是否带 loading 图标                                    |      | H5、App(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) |
| form-type        | String  |              | 用于 `<form>` 组件，点击分别会触发 `<form>` 组件的 submit/reset 事件 |      |                                                          |
| open-type        | String  |              | 开放能力                                                     |      |                                                          |
| hover-class      | String  | button-hover | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 |      | App-nvue 平台暂不支持                                    |
| hover-start-time | Number  | 20           | 按住后多久出现点击态，单位毫秒                               |      |                                                          |
| hover-stay-time  | Number  | 70           | 手指松开后点击态保留时间，单位毫秒                           |      |                                                          |

### image

| 属性名 | 类型   | 默认值        | 说明                 | 平台差异说明 |
| ------ | ------ | ------------- | -------------------- | ------------ |
| src    | String |               | 图片资源地址         |              |
| mode   | String | 'scaleToFill' | 图片裁剪、缩放的模式 |              |

**Tips**

- `<image>` 组件默认宽度 300px、高度 225px；
- `src` 仅支持相对路径、绝对路径，支持 base64 码；
- 页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。

## uni-app中的样式

+ rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。

+ 使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束

+ 支持基本常用的选择器class、id、element等

+ 在 `uni-app` 中不能使用 `*` 选择器。

+ `page` 相当于 `body` 节点

+ 定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。

+ `uni-app` 支持使用字体图标，使用方式与普通 `web` 项目相同，需要注意以下几点：

    - 字体文件小于 40kb，`uni-app` 会自动将其转化为 base64 格式；

    - 字体文件大于等于 40kb， 需开发者自己转换，否则使用将不生效；

    - 字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。

      ```css
       @font-face {
           font-family: test1-icon;
           src: url('~@/static/iconfont.ttf');
       }
      ```

+ 如何使用scss或者less

## uni的生命周期

### 应用的生命周期

生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。

生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数

`uni-app` 支持如下应用生命周期函数：

| 函数名   | 说明                                           |
| -------- | ---------------------------------------------- |
| onLaunch | 当`uni-app` 初始化完成时触发（全局只触发一次） |
| onShow   | 当 `uni-app` 启动，或从后台进入前台显示        |
| onHide   | 当 `uni-app` 从前台进入后台                    |
| onError  | 当 `uni-app` 报错时触发                        |

### 页面的生命周期

`uni-app` 支持如下页面生命周期函数：

| 函数名   | 说明                                                         | 平台差异说明 | 最低版本 |
| -------- | ------------------------------------------------------------ | ------------ | -------- |
| onLoad   | 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router?id=navigateto) |              |          |
| onShow   | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 |              |          |
| onReady  | 监听页面初次渲染完成。                                       |              |          |
| onHide   | 监听页面隐藏                                                 |              |          |
| onUnload | 监听页面卸载                                                 |              |          |

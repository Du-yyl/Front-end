/*
 tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
 */

let num = {
	/*
	 "include" 用来指定哪些ts文件需要被编译
	 路径：** 表示任意目录
	 * 表示任意文件
	 */
	'include': [
		'./base/**/*',
	],
	
	/*
	 "exclude" 不需要被编译的文件目录
	 默认值：["node_modules", "bower_components", "jspm_packages"]
	 */
	'exclude': [],
	
	/*
	 compilerOptions 编译器的选项
	 */
	'compilerOptions': {
		
		// target 用来指定ts被编译为的ES的版本
		// 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'
		'target': 'es2015',
		
		// module 指定要使用的模块化的规范
		// 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'
		'module': 'es2015',
		
		// lib用来指定项目中要使用的库【在TS中，使用JS中的DOM也是单独的库
		//'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext', 'dom', 'dom.iterable',
		//'webworker', 'webworker.importscripts', 'webworker.iterable', 'scripthost', 'es2015.core', 'es2015.collection',
		//'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.reflect', 'es2015.symbol',
		//'es2015.symbol.wellknown', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory', 'es2017.string',
		//'es2017.intl', 'es2017.typedarrays', 'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 'es2018.promise',
		//'es2018.regexp', 'es2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol', 'es2020.bigint', 'es2020.promise',
		//'es2020.sharedmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl', 'esnext.array', 'esnext.symbol',
		//'esnext.asynciterable', 'esnext.intl', 'esnext.bigint', 'esnext.string', 'esnext.promise', 'esnext.weakref'
//    "lib": [
//      "es6",
//      "dom"
//    ],
		
		// outDir 用来指定编译后文件所在的目录【将TS和JS分离】
//    "outDir": "./dist",
		
		// 将代码合并为一个文件
		// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中
//    "outFile": "./dist/app.js",
		
		// 是否对js文件进行编译，默认是false
		'allowJs': false,
		
		// 是否检查js代码是否符合语法规范，默认是false
		'checkJs': false,
		
		// 是否移除注释,除了以 /!*开头的版权信息
		'removeComments': true,
		
		// 不生成编译后的文件
		'noEmit': false,
		
		// 当有错误时不生成编译后的文件
		'noEmitOnError': false,
		
		// 所有严格检查的总开关
		'strict': true,
		
		// 用来设置编译后的文件是否使用严格模式，默认false【导入有其他文件时，会默认开启严格模式】
		'alwaysStrict': true,
		
		// 不允许隐式的any类型
		'noImplicitAny': true,
		
		// 不允许不明确类型的this
		'noImplicitThis': true,
		
		// 严格的检查空值
		'strictNullChecks': true,
		
		// 不允许switch的case语句贯穿
		'noFallthroughCasesInSwitch': false,
		
		// 当目标为生成 "react" JSX时，指定 createElement和 __spread的调用对象
//    "reactNamespace": "React",
		
		'sourceMap': false,
	},
}

/**
 * Time:2022/2/24 11:54 23
 * Name:mixin.js
 * Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

const mixin = {
	methods: {
		show () {
			alert (this.msg)
		},
	},
}
export default mixin
/*
 当要多个组件使用的方法是一样或者是类似的，可以使用混合进行配置，将相同的属性在一个外部文件中写好后进行引入
 */


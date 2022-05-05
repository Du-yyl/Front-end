/**
 * Time:2022/3/4 11:14 22
 * Name:persons.js
 * Path:Vue 2.x/基础/vue_test/src/store
 * ProjectName:Vue
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


// 人员相关配置
export default {
	namespaced: true,
	actions: {
		addTo (context, obj) {
			if ( !!(obj.name && obj.sex && obj.age) ) {
				obj.id = parseInt (context.state.persons[context.state.persons.length - 1].id) + 1
				context.commit ('ADDTO', obj)
				return Promise.resolve ('添加成功')
			} else {
				return Promise.reject ('添加失败')
			}
		},
	},
	
	mutations: {
		ADDTO (state, obj) {
			state.persons.push (obj)
		},
	},
	
	getters: {
		getFirstName (state) {
			return state.persons[0].name
		},
	},
	
	state: {
		persons: [
			{ name: '郑一', age: 20, sex: 'man', id: '001' },
			{ name: '刘二', age: 22, sex: 'man', id: '002' },
			{ name: '张三', age: 24, sex: 'man', id: '003' },
			{ name: '赵四', age: 26, sex: 'man', id: '004' },
			{ name: '王五', age: 26, sex: 'man', id: '005' },
			{ name: '宋六', age: 27, sex: 'man', id: '006' },
			{ name: '张七', age: 24, sex: 'man', id: '007' },
		],
	},
}

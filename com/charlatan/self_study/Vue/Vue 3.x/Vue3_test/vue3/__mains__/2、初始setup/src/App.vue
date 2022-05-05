<template>
  <h1>
    我是测试的例子
  </h1>
  <h2>
    我是第二个测试的例子
  </h2>
  <h3>
    名字：{{ name }}
    年龄:{{ age }}
  </h3>
  <button @click="sayHello">sayHello</button>
</template>
<!--
在 Vue3 中可以继续使用 Vue2 的语法，但是不建议这么写
1、Vue2 中可以通过this（vm）访问到 Vue3 中的配置，但是Vue3中不能访问到Vue2中的配置，二者在这两方面有较大区别，建议Vue2和Vue3的代码风格分开进行
2、如果在Vue2中配置了一个数据，但是在Vue3中也配置也一样的数据，那么在调用的时候，会按Vue3为主
-->
<script>

export default {
  name: 'App',
  components: {},
  /**
   * Vue中的所有的数据和函数都要写在 setup 中，并且像配置一个方法直接写指定的内容就行了
   */
  setup () {
    let name = '张三'
    let age = 20

    function sayHello () {
      console.log (`name:${name},age:${age}`)

    }

    // 这个函数会返回一个对象，通常是常用的配置对象
    // return {
    //   name,
    //   age,
    //   sayHello
    // }

    // 当然也可以返回一个渲染函数，这个返回结果会直接渲染到页面上，并且渲染结果是按返回的结果为主，即使原来有内容，也会进行覆盖
    return () => {
      return h ('h1', '测试例子')
    }
    // 简写形式
    // return h('h1', '测试例子')

  },
}
</script>

<style>

</style>

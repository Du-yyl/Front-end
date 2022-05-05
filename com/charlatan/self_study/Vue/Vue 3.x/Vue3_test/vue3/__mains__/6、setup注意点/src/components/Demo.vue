<!--
  ~ Time:2022/3/16 10:17 51
  ~ Name:Demo.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Demo">
    <h3>
      数据：
      <br>
      <br>
      {{ obj.obj_2 }}
      <br>
      {{ obj.obj_1 }}
    </h3>
    <button @click="dian">触发app中的事件</button>
  </div>
</template>
<!--
setup 会在组件创建之前进行执行，并且this指向为null，

当setup进行声明运行时，会获得两个参数，第一个参数是 props 第二个是 context
  第一个 props 中会获取到到通过父组件传送来的数据，不过要通过 props 进行声明接收才行
  第二个 context 中同样会获取三个数据
    第一个是 attrs 和 Vue2中的类似，并且，如果在props中如果全部接收，那么在 attrs 中就不会出现，不接受就会出现相应数据
    第二个是 emit 通过传入有事件，那么就可以在emit中进行指定事件的触发，并且和Vue2中事件的触发方式一样
    第三个是 slots 当在一个组件中直接传入了插槽，那么就会在这个属性中及逆行保存，保存的是虚拟 ODM
-->
<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Demo',
  props: ['msg'],
  setup (props, context) {
    // 只有当声明进行接收的时候才能接收到这个
    // console.log(props);

    // console.log(context.attrs);

    // console.log(context.emit);
    console.log (context.slots)
    let obj = reactive ({
      obj_1: '第一个数据',
      obj_2: '第二个数据',
    })

    function dian () {
      context.emit ('go', 'Demo中的数据')
    }

    return {
      obj,
      dian,
    }
  },
  // beforeCreate () {
  //   console.log('开始创建',this) ;
  // }
}
</script>

<style lang="less" scoped></style>

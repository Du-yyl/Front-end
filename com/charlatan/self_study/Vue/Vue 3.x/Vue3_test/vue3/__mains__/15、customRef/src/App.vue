<template>
  <input id="" v-model="inputValue" name="" type="text">
  <br>
  <br>
  <br>
  <h3>
    {{ inputValue }}
  </h3>
</template>

<script>

import { customRef, watch } from '@vue/runtime-dom'

const { ref } = require ('@vue/runtime-dom')

export default {
  name: 'App',
  setup () {
    // let inputValue = ref('')
    let inputValue = myRef ('')
    let timer

    /**
     * 自定义ref
     * @param value 每次调用这个方法都会闯入一个value
     * @returns {Ref<*>} 返回一个 customRef 对象，通过这个对象中的配置，可以将指定数据变成响应式的
     */
    function myRef (value) {
      /**
       * 调用Vue提供的 customRef 方法，这个方法会有一个参数，是一个方法，通过这个方法进行详细的配置
       */
      return customRef (
          /**
           * 配置的详细方法，这个方法会有两个参数，并要配置 get 和 set 方法，通过set和get的调用来获取指定内容的改变
           * @param track{Function} 追踪指定内容的触发
           * @param trigger{Function} 当修改改变的时候触发这个事件
           * @returns {{set(*): void, get(): *}|*} 返回的一个对象，对象中包含了get和set方法
           */
          (track, trigger) => {
            return {
              get () {
                console.log ('读取数据')
                // 追踪指定内容的改变
                track ()
                return value
              },
              set (newValue) {
                console.log ('修改数据')
                value = newValue
                clearTimeout (timer)
                // 使 Vue 重新解析模板
                timer = setTimeout (() => {
                  trigger ()
                }, 500)
              },
            }
          })
    }

    return {
      inputValue,
    }
  },
  components: {},
}
</script>

<style>

</style>

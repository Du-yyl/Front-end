/**
 * Time:2022/3/16 16:33 24
 * Name:usePoint.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/hooks
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入指定的要使用组件
import { reactive } from 'vue'
import { onBeforeUnmount, onMounted } from '@vue/runtime-dom'

function usePoint () {
  let point = reactive({
    x: 0,
    y: 0,
  })
  
  let listener = (event) => {
    point.x = event.pageX
    point.y = event.pageY
  }
  
  onMounted(() => {
    window.addEventListener('click', listener)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', listener)
  })
  
  // 将内容指定的内容计算并操作完毕，将需要的内容进行返回
  return point
}

// 将整个方法进行暴漏
export default usePoint


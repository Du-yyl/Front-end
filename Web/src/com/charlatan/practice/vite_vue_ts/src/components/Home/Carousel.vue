<!--
  ~ Time:2022/5/30 9:22 40
  ~ Name:Carousel.vue
  ~ Path:src/components/Carousel
  ~ ProjectName:vite_vue_ts
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde :
  ~     c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { event } from '../../apis/commonlyObjectType'
import { getters } from '../../store/modules/home/getters'

// 轮播图片
let images = reactive([
  {
    img_size: '750x218',
    img_url: '/src/static/image/img01.jpg',
  },
])

let bg_img = ref('/src/static/image/img01.jpg')

const props = defineProps({
  pro: {
    type: Object,
    required: true,
  },
})

props.pro.then(() => {
  for (let carouselImage of getters.getCarouselImages())
    images.push(carouselImage)
  images.shift()
  bg_img.value = getters.getBackgroundImg()
}, () => {
  console.log('网络错误')
})

props.pro.finally(() => {
  // 将第一张放最后一张
  images.push(images.slice(0)[0])

// 将原本第一张放最后一张
  images.unshift(images.slice(-2)[0])
})

// 显示的图片下标
let showHint = ref(0)

// 要显示的下一张照片
let nextImg = ref(0)

// 自动轮播时间
let time = 4000

// 定时器对象
let timer = -1

// 手机屏幕宽度
let width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

/**
 * 计算样式类型
 */
const comClass = (left: number, len: number = 0)
    : string => 'transform: translateX(' + (left + len) +
    'px);transition-duration: 0s;'

// 动态的 class
let leftClass = ref('transform: translateX(-'
    + width + 'px);transition-duration: 0s;')

// 记录控制位置
let left = -width

// 手指开始点击时的位置
let start: number

// 手指移动距离
let len: number

interface carouselMove {
  use (): void,

  stop (): void,

  skip (): void
}

/**
 * 自动轮播
 */
class carouselMove {
  /**
   * 开始轮播
   */
  use () {
    timer = setInterval(() => {
      let index = ++showHint.value > images.length - 3 ? 1 : ++showHint.value
      hintClick(index)
    }, time)
  }

  /**
   * 暂停轮播
   */
  stop () {
    clearTimeout(timer)
  }

  /**
   * 跳过本次计时，重新开始计时
   */
  skip () {
    clearTimeout(timer)
    this.use()
  }
}

// 创建实例
let auto = new carouselMove()

// 开始轮播
auto.use()

/**
 * 这里使用了 touch 函数，可能会出现 ：
 * [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider ma...
 * 原因：
 *   Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners；
 *  Passive Event Listeners：就是告诉前页面内的事件监听器内部是否会调用preventDefault函数来阻止事件的默认行为，
 *  以便浏览器根据这个信息更好地做出决策来优化页面性能。当属性passive的值为true的时候，代表该监听器内部不会调用
 *  preventDefault函数来阻止默认滑动行为，Chrome浏览器称这类型的监听器为被动（passive）监听器。目前Chrome
 *  主要利用该特性来优化页面的滑动性能，所以Passive Event Listeners特性当前仅支持mousewheel/touch相关事件。
 * 解决：
 *  npm i default-passive-events -S
 *  main.js里引入
 */

/**
 * 将点击元素的下标传进来
 * @param index 点击元素的下标
 */
function hintClick (index: number): void {
  if (index === showHint.value + 1) return
  left = -width * index--
  leftClass.value = 'transform: translateX(' + left + 'px);'
  nextImg.value = showHint.value = index
  auto.skip()
}

/**
 * 触摸屏幕事件
 */
function touchStart (event: event) {
  // 清楚计时器
  auto.stop()
  // 记录点击下标
  start = event.changedTouches[0].screenX
}

/**
 * 滑动屏幕触发
 */
function touchMove (event: event) {
  // 记录移动距离，实时更改
  len = event.changedTouches[0].screenX - start
  leftClass.value = comClass(left + len)
}

/**
 * 如果离开屏幕
 */
function touchEnd () {
  auto.use()
  // 将更改后端后的数据写入
  let index = Math.round(Math.abs((left += len) / width))
  if (index >= images.length - 1) {
    showHint.value = 0
    left = -width
    leftClass.value = comClass(left)
    return
  }
  if (index <= 1) {
    showHint.value = images.length - 3
    left = -(width * (images.length - 2))
    leftClass.value = comClass(left)
    return
  }
  left = -index * width
  leftClass.value = 'transform: translateX(' + left + 'px);'
  showHint.value = --index
}
</script>

<template>
  <div>
    <img class="bgImg" :src="bg_img" alt="">
    <!--    轮播图片-->
    <div class="div">
      <ul
          class="ul"
          :style="leftClass +
          'width:'+(images.length * 100)+'%'">
        <li
            v-for="(item,index) in images"
            class="li"
            :class="nextImg === index ? 'showImg' : 'hiddenImg'"
            @touchstart="touchStart($event)"
            @touchend="touchEnd()"
            @touchmove="touchMove($event)"
            :key="index">
          <img
              class="img"
              :src="item.img_url"
              alt="">
        </li>
      </ul>
    </div>
    <!--    提示点-->
    <ul class="hint">
      <li
          class="li"
          @click="hintClick(index+1)"
          :class="showHint === index ? 'active' : ''"
          v-for="(item,index)
          in (images.length > 3 ? images.length - 2 : 1)"></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.bgImg {
  width: 100vw;
  height: 10rem;
}

// 轮播图
.div {
  position: absolute;
  width: 100vw;
  height: 10rem;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  .ul {
    transition: transform .7s cubic-bezier(0, 1.5, .6, 1);

    .li {
      float: left;
      user-select: none;
      position: relative;

      .img {
        user-select: none;
        width: 100vw;
        height: 10rem;
      }
    }
  }
}

// 提示点
.hint {
  width: 45vw;
  height: 1rem;
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  top: 8rem;
  left: 0;
  right: 0;
  margin: auto;

  .li {
    border: .08rem solid #d9d9d9;
    width: .39rem;
    height: .39rem;
    border-radius: 1rem 1rem 1rem 1rem;
    transition: all .8s cubic-bezier(0, 1.5, .6, 1);
  }

  .active {
    width: 1.4rem;
    background: #fff;
  }
}
</style>

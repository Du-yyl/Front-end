<!--
  搜索
-->

<script setup lang="ts">

import '/src/static/iconfont/iconfont.css'
import { getters } from '../../store/modules/home/getters'
import { reactive, ref } from 'vue'

const props = defineProps({
  pro: {
    type: Object,
    required: true,
  },
})

// 循环提示列表
let searchList = reactive([{ sort: '', words: '' }])

// 动态 Class
let style = ref('')

// 是否在顶部
let isTop = ref(true)

// 循环时间
const timer = 2000

// 动态移动
let isMove = ref(false)

window.onscroll = function () {
  isTop.value = !!(document.body.scrollTop || document.documentElement.scrollTop < 10)
}

props.pro.then(() => {
  for (let searchListElement of getters.getSearchList())
    searchList.push(searchListElement)
  searchList.shift()
  if (searchList.length === 0) {
    // 如果能运行到这里说明结构中的数据都是空的，这是进行默认数据的设置
    let value = getters.getSearchTips()
    searchList.push(
        (value === 'undefined' || value === '' || value === undefined)
            ? { words: '请输入要搜索内容', sort: '' }
            : { words: getters.getSearchTips(), sort: '' })
  } else {
    setInterval(() => {
      isMove.value = true
    }, timer)
    setInterval(() => {
      searchList.push(searchList.splice(0, 1)[0])
      isMove.value = false
    }, timer * 2)
  }
}, () => {
  searchList.push({ words: '请输入要搜索内容', sort: '' })
})

</script>

<template>
  <div class="div" :style="isTop ? '':'background: white;'">
    <!--  放大镜-->
    <p class="iconfont icon-sousuo"></p>
    <!--  输入框-->
    <div
        class="search"
        :style="isTop ? 'background: rgba(255, 255, 255, 0.8);'
          :'background: rgba(234, 230, 230, 0.8);'">
      <div class="input"></div>
      <ul
          class="hint list"
          :class="isMove?'moveUp':'moveDown'"
          :style="style">
        <li
            v-for="(item,index) in searchList"
            :key="index">
          {{ item.words }}
        </li>
      </ul>
    </div>
    <!--  聊天框-->
    <p class="iconfont icon-liaotian" id="icon">
    </p>
  </div>
</template>

<style scoped lang="less">
.div {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4rem;
  transition: all .6s;
  // 放大镜
  .icon-sousuo {
    position: relative;
    top: 1.4rem;
    left: 2.4rem;
    z-index: 2;
  }

  .iconfont {
    width: 3rem;
    height: 3rem;
  }

  // 搜索框
  .search {
    z-index: 1;
    position: absolute;
    width: 80vw;
    min-width: 90px;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    height: 1.6rem;
    border-radius: 2rem 2rem 2rem 2rem;
    padding-left: 2rem;

    outline: none;
    color: #666666;
    overflow: hidden;

    .hint {
      position: relative;
      top: .2rem;
      font-size: .9rem;
    }

    .list {
      position: relative;
      width: 7rem;
    }

    // 动画的移动
    .moveUp {
      transform: translateY(-1.2rem);
      transition: transform .6s cubic-bezier(0, 1.5, .6, 1);
    }

    // 动画取消移动
    .moveDown {
      transform: translateY(0);
      transition-duration: 0s;
    }
  }

  // 聊天框
  #icon {
    width: 1rem;
    height: 1rem;
    position: relative;
    top: -1.7rem;
    z-index: 11;
    left: 23rem;
    font-size: 1.2rem;
  }
}


</style>

<!--
  ~ Time:2022/6/4 9:33 59
  ~ Name:ThreeMusketeers.vue
  ~ Path:src/components/Home
  ~ ProjectName:vite_vue_ts
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde :
  ~     c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<script setup lang="ts">

import { reactive, ref } from 'vue'
import { justPolite } from '../../store/modules/home/dataTypes'
import { getters } from '../../store/modules/home/getters'

const props = defineProps({
  pro: {
    type: Object,
    required: true,
  },
})

// todo：vuex中的异步请求，当数据返回时不能直接进行赋值
// 这个页面中的对象数据使用数组中的 push 完成响应式
let data: justPolite = reactive([])
// 主列表的 css
let rootCss = ref('')
props.pro.then(() => {
  for (let justPoliteChild of getters.getJustPolite())
    data.push(justPoliteChild)
  rootCss.value = 'background:' + data[0].css.background_color
      + '; margin-bottom:' + data[0].css.margin_bottom + 'px'
})
</script>

<template>
  <div
      class="rootDiv"
      :style="rootCss">
    <div
        v-for="(rootItem,rootIndex) in data"
        :key="rootIndex"
        class="one"
    >
      <div class="left">
        <span class="heard">{{ rootItem.data.left_title }}</span>
        <span class="title">{{ rootItem.data.vipTost.tips }}</span>
        <div class="show">
          <div
              v-for="(lItem,lIndex) in rootItem.data.vipTost.list"
              :key="lItem.id"
              class="showImg">
            <img
                :src="lItem.img_url"
                alt="单单有礼商品展示"
                class="img">
            <span class="price">￥{{ lItem.cash }}</span>
          </div>
        </div>
      </div>
      <div class="right">
                  <span class="heard">
                    {{ rootItem.data.right_title }}
                  </span>
        <span class="title">{{ rootItem.data.sign.level_appendtext }}</span>
        <div class="show">
          <ul
              class="ul">
            <li
                v-for="(rItem,rIndex) in rootItem.data.sign.dataList"
                :key="rIndex"
                class="li">
              <span class="span">第{{ rItem.day }}天</span>
              <img :src="rItem.image" alt="" class="img">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--  每日疯抢;养宠风尚，拒绝平庸;心选特惠-->
</template>

<style scoped lang="less">
.rootDiv {
  background: #f7f7f7;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  // 第一行
  .one {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-bottom: 20px;
    height: 11rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    // 两个 div 公共属性
    div {
      border-radius: .7rem .7rem .7rem .7rem;
      width: 45%;
      background: #ffffff;
      padding: .3rem;

    }

    .heard {
      font-size: 1rem;
      font-weight: 700;

    }

    // 提示标签
    .title {
      font-size: 12px;
      background: #ef8166;
      padding: 0 2px 0 2px;
      border-radius: 10rem 10rem 10rem 10rem;
      color: #fff;
      // 缩放标签让字体更小
      transform: scale(0.3);
      position: relative;
      left: .7rem;
      top: -.1em;
    }

    // 公共
    // 左边部分
    .left {

      .show {
        margin-top: .2rem;
        display: flex;
        flex-wrap: nowrap;
        width: 95%;
        height: 80%;
        justify-content: space-around;

        .showImg {
          display: flex;
          flex-wrap: wrap;
          padding: 0;

          .img {
            width: 4rem;
            height: 6rem;
          }

          // 价格
          .price {
            font-size: 1rem;
            font-weight: 700;
            text-align: center;
          }
        }
      }
    }

    // 右边部分
    .right {
      background: #ffffff;

      .show {
        background: #fff;
        width: 94%;
        height: 82%;

        .ul {
          background: #f7f7f7;
          width: 99%;
          height: 99%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: nowrap;
          border-radius: 5px 5px 5px 5px;

          .li {
            width: 29%;
            height: 90%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-evenly;
            text-align: center;
            //background: #efe2e2;
            align-items: center;
            margin-top: .4rem;
            border-radius: 5px 5px 5px 5px;
            border: 1px solid rgba(251, 213, 134, 0);
            background: #ffffff;

            &:nth-child(-n+2) {
              border: 1px solid #fbd586;
            }


            .span {
            }

            .img {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>

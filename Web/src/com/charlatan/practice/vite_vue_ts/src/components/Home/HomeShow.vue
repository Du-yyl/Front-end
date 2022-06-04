<!--
  ~ Time:2022/6/2 20:48 41
  ~ Name:HomeShow.vue
  ~ Path:src/components/Home
  ~ ProjectName:vite_vue_ts
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde :
  ~     c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<script setup lang="ts">
import { getters } from '../../store/modules/home/getters'
import { RootObjectChild } from '../../store/modules/home/dataTypes'
import { reactive, ref } from 'vue'

const props = defineProps({
  pro: {
    type: Object,
    required: true,
  },
})

// 展示数据
let listShow: RootObjectChild[] = reactive([])
let rootListCss = ref('')
props.pro.then(() => {
  for (let rootObjectChild of getters.getSingleProductComm())
    listShow.push(rootObjectChild)
  rootListCss.value =
      'background:' + listShow[0].css.background_color
      + ';margin-bottom:' + listShow[0].css.margin_bottom
  // console.log(listShow);
})

</script>

<template>
  <!--  展示的根-->
  <div class="rootDiv" :style="rootListCss">
    <div
        class="listDiv"
        v-for="(rootItem,rootIndex) in listShow"
        :key="rootIndex">
      <!--      展示的每个横向列表-->
      <ul class="ul"
          :style="'background:linear-gradient(to right,'+
            rootItem.data.color_conf.bg_start_color + ',' +
            rootItem.data.color_conf.bg_end_color + ');' ">
        <!--        展示的每一个元素-->
        <li class="li"
            v-for="(item,index) in rootItem.data.goods_list"
            :key="index">
          <!--          降价提示-->
          <span
              class="heard"
              :style="'background:' +
          rootItem.data.color_conf.angle_mark_bg_color
          + ';color:' + rootItem.data.color_conf.angle_mark_text_color">
            {{ item.mark }}
          </span>
          <!--          展示图片-->
          <img
              :src="item.img_url"
              alt="" class="img">
          <!--          商品详情提示-->
          <div
              class="foot"
              :style="'background:' +
              rootItem.data.color_conf.goods_bg_color">
            <span class="title">
              {{ item.title }}
            </span>
            <!--          底部价格-->
            <div
                class="fot"
                :style="'background:' +
                rootItem.data.color_conf.price_bg_color +
                ';color:' + rootItem.data.color_conf.price_text_color">
              <!--            现价-->
              <span class="now span">
                ￥{{ item.sale_price }}
              </span>
              <!--            原价-->
              <span
                  class="last span"
                  :style="'text-decoration: line-through' +
                  rootItem.data.color_conf.underline_price_color">
                ￥{{ item.market_price }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.rootDiv {
  position: relative;
  width: 100vw;
  height: auto;

  // 每一个展示列表
  .listDiv {
    margin: auto;
    width: 98vw;
    height: 11.5rem;
    //background: #c99e9e;
    border-radius: 2px 2px 2px 2px;

    .ul {
      width: 100%;
      height: 11rem;
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      top: 50%;
      border-radius: 3px 3px 3px 3px;
      transform: translateY(-50%);
      // 展示的每一个元素

      .li {
        width: 22.7%;
        border-radius: 3px 3px 3px 3px;
        height: 95%;
        background: green;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        overflow: hidden;
        // 降价提示
        .heard {
          display: block;
          font-size: .7rem;
          width: 100%;
          height: 1rem;
          text-align: center;
          align-items: center;
        }

        // 展示图片
        .img {
          width: 100%;
          height: 5.8rem;
        }

        .foot {
          position: relative;
          width: 100%;
          height: 4rem;
          top: -.4rem;
        }

        // 商品详情
        .title {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          // 商品详情字体颜色
          color: #bd3d60;
          font-size: .7rem;
          align-items: center;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
        }

        // 底部价格
        .fot {
          width: 90%;
          position: relative;
          top: .29rem;
          border-radius: 20rem 20rem 20rem 20rem;
          height: 1.2rem;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
          left: 50%;
          transform: translateX(-50%);

          .span {
            font-size: .8rem;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>

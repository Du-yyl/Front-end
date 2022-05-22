<template>
  <view class="page">
    <page-head :title="title"></page-head>
    <view class="uni-card">
      <view class="uni-list">
        <view v-for="(list,index) in lists" :key="index" :class="index === lists.length - 1 ? 'uni-list-cell-last' : ''"
              class="uni-list-cell uni-collapse">
          <view :class="list.show ? 'uni-active' : ''" class="uni-list-cell-navigate uni-navigate-bottom"
                hover-class="uni-list-cell-hover"
                @click="trigerCollapse(index)">
            {{ list.title }}
          </view>
          <view :class="list.show ? 'uni-active' : ''" class="uni-list uni-collapse">
            <view v-for="(item,key) in list.item" :key="key"
                  :class="key === list.item.length - 1 ? 'uni-list-cell-last' : ''" class="uni-list-cell"
                  hover-class="uni-list-cell-hover">
              <view class="uni-list-cell-navigate uni-navigate-right"> {{ item }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'list-with-collapses',
      lists: [
        {
          title: '产品',
          show: false,
          item: ['iOS', 'Android', 'HTML5'],
        },
        {
          title: '方案',
          show: false,
          item: ['PC方案', '手机方案', 'TV方案'],
        },
        {
          title: '新闻',
          show: false,
          item: ['公司新闻', '行业新闻'],
        },
      ],
    }
  },
  methods: {
    trigerCollapse (e) {
      for (let i = 0, len = this.lists.length; i < len; ++i) {
        if (e === i) {
          this.lists[i].show = !this.lists[i].show
        } else {
          this.lists[i].show = false
        }
      }

    },
  },
}
</script>

<style>

</style>

<template>
  <view>
    <uni-section padding title="基本用法" type="line">
      <uni-steps :active="active" :options="list1"/>
    </uni-section>
    <uni-section padding title="自定义图标" type="line">
      <uni-steps :active="active" :options="list1" active-icon="checkbox"/>
    </uni-section>
    <uni-section padding title="自定义图标" type="line">
      <uni-steps :active="active" :options="list1" active-icon="medal"/>
    </uni-section>
    <uni-section padding title="纵向排列" type="line">
      <uni-steps :active="active" :options="list2" active-color="#007AFF" direction="column"/>
    </uni-section>
    <button size="mini" style="margin: 30px 10px; width: 100px;" type="primary" @click="change">改变状态</button>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      active: 1,
      list1: [
        {
          title: '事件一',
        }, {
          title: '事件二',
        }, {
          title: '事件三',
        }, {
          title: '事件四',
        },
      ],
      list2: [
        {
          title: '买家下单',
          desc: '2018-11-11',
        }, {
          title: '卖家发货',
          desc: '2018-11-12',
        }, {
          title: '买家签收',
          desc: '2018-11-13',
        }, {
          title: '交易完成',
          desc: '2018-11-14',
        },
      ],
    }
  },
  methods: {
    change () {
      if (this.active < this.list1.length - 1) {
        this.active += 1
      } else {
        this.active = 0
      }
    },
  },
}
</script>

<style lang="scss">
.status-btn {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 92 rpx;
  margin: 30 rpx;
  background-color: #007AFF;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 15px;
  flex-direction: row;
}
</style>

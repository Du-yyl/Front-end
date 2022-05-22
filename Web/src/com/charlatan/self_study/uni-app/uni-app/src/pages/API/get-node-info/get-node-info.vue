<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="movable block">
        <!-- #ifndef MP-TOUTIAO -->
        <movable-area>
          <movable-view class="target" direction="all" @change="getNodeInfo">Drag</movable-view>
        </movable-area>
        <!-- #endif -->
        <!-- #ifdef MP-TOUTIAO -->
        <view :style="{top:top,left:left}" class="target" @click="setPosition">Click</view>
        <!-- #endif -->
      </view>
      <view class="movable">
        <view class="info">
          <view v-for="(item,index) in info" :key="index">
            <text class="b">{{ item.key }}</text>
            <text class="span">{{ item.val }}</text>
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
      title: 'createSelectorQuery',
      top: 0,
      left: '0px',
      info: [],
    }
  },
  onReady () {
    this.getNodeInfo()
  },
  methods: {
    setPosition () {
      this.left = Math.random() * uni.upx2px(320) + 'px'
      this.top = Math.random() * uni.upx2px(320) + 'px'
      this.getNodeInfo()
    },
    getNodeInfo () {
      uni.createSelectorQuery().select('.target').boundingClientRect().exec((ret) => {
        const rect = ret[0]
        if (rect) {
          const sort = ['left', 'right', 'top', 'bottom', 'width', 'height']
          const info = []
          for (let i in sort) {
            let key = sort[i]
            info.push({
              'key': key,
              'val': rect[key],
            })
          }
          this.info = info
        }
      })
    },
  },
}
</script>

<style>
.movable {
  display: flex;
  justify-content: center;
}

.block {
  height: 400 rpx;
  width: 400 rpx;
  background-color: #FFFFFF;
  border: 1px solid #ccc;
  position: relative;
  margin: 0 auto;
  margin-bottom: 30 rpx;
}

movable-area {
  height: 400 rpx;
  width: 400 rpx;
  position: relative;
}

.target {
  height: 80 rpx;
  width: 80 rpx;
  line-height: 80 rpx;
  text-align: center;
  color: #FFFFFF;
  background-color: #4cd964;
  font-size: 28 rpx;
  position: absolute;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.b {
  font-weight: bold;
  width: 150 rpx;
  display: inline-block;
}

.span {
  width: 100 rpx;
  display: inline-block;
}
</style>

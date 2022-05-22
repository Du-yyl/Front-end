<template>
  <view>
    <page-head title="swiper,可滑动视图"></page-head>
    <view class="uni-margin-wrap">
      <swiper :autoplay="autoplay" :duration="duration" :indicator-dots="indicatorDots" :interval="interval" circular
              class="swiper">
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>

    <view class="swiper-list">
      <view class="uni-list-cell uni-list-cell-pd">
        <view class="uni-list-cell-db">指示点</view>
        <switch :checked="indicatorDots" @change="changeIndicatorDots"/>
      </view>
      <view class="uni-list-cell uni-list-cell-pd">
        <view class="uni-list-cell-db">自动播放</view>
        <switch :checked="autoplay" @change="changeAutoplay"/>
      </view>
    </view>

    <view class="uni-padding-wrap">
      <view class="uni-common-mt">
        <text>幻灯片切换时长(ms)</text>
        <text class="info">{{ duration }}</text>
      </view>
      <slider :value="duration" max="2000" min="500" @change="durationChange"/>
      <view class="uni-common-mt">
        <text>自动播放间隔时长(ms)</text>
        <text class="info">{{ interval }}</text>
      </view>
      <slider :value="interval" max="10000" min="2000" @change="intervalChange"/>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    }
  },
  methods: {
    changeIndicatorDots (e) {
      this.indicatorDots = !this.indicatorDots
    },
    changeAutoplay (e) {
      this.autoplay = !this.autoplay
    },
    intervalChange (e) {
      this.interval = e.detail.value
    },
    durationChange (e) {
      this.duration = e.detail.value
    },
  },
}
</script>

<style>
.uni-margin-wrap {
  width: 690 rpx;
  width: 100%;;
}

.swiper {
  height: 300 rpx;
}

.swiper-item {
  display: block;
  height: 300 rpx;
  line-height: 300 rpx;
  text-align: center;
}

.swiper-list {
  margin-top: 40 rpx;
  margin-bottom: 0;
}

.uni-common-mt {
  margin-top: 60 rpx;
  position: relative;
}

.info {
  position: absolute;
  right: 20 rpx;
}

.uni-padding-wrap {
  width: 550 rpx;
  padding: 0 100 rpx;
}
</style>

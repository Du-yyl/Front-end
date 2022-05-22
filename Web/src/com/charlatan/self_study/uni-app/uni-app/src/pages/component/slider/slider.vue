<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-title">显示当前value</view>
      <view>
        <slider show-value value="50" @change="sliderChange"/>
      </view>

      <view class="uni-title">设置步进step跳动</view>
      <view>
        <slider step="5" value="60" @change="sliderChange"/>
      </view>

      <view class="uni-title">设置最小/最大值</view>
      <view>
        <slider max="200" min="50" show-value value="100" @change="sliderChange"/>
      </view>

      <view class="uni-title">不同颜色和大小的滑块</view>
      <view>
        <slider activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" value="50"
                @change="sliderChange"/>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      title: 'slider 滑块',
    }
  },
  methods: {
    sliderChange (e) {
      console.log('value 发生变化：' + e.detail.value)
    },
  },
}
</script>

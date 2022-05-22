<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
    </uni-card>
    <uni-section padding subTitle="打开外部连接" title="基本示例" type="line">
      <uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
    </uni-section>
    <uni-section padding title="自定义颜色" type="line">
      <uni-link color="#007BFF" href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
    </uni-section>
    <uni-section padding title="自定义下划线" type="line">
      <uni-link href="https://uniapp.dcloud.io/" showUnderLine="false" text="https://uniapp.dcloud.io/">
      </uni-link>
    </uni-section>
    <uni-section padding title="自定义字体大小" type="line">
      <uni-link font-size="20" href="https://uniapp.dcloud.io/" showUnderLine="false"
                text="https://uniapp.dcloud.io/"></uni-link>
    </uni-section>
    <uni-section padding title="自定义插槽" type="line">
      <uni-link color="red" href="https://uniapp.dcloud.io/" showUnderLine="false"
                text="https://uniapp.dcloud.io/">点击跳转
      </uni-link>
    </uni-section>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
}
</script>

<style lang="scss">
</style>

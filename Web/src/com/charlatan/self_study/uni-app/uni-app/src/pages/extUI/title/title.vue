<template>
  <view class="uni-content">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6"> 章节标题，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题.</text>
    </uni-card>
    <uni-section title="不同类型" type="line">
      <view class="example-body">
        <uni-title title="h1 一级标题" type="h1"></uni-title>
        <uni-title title="h2 二级标题" type="h2"></uni-title>
        <uni-title title="h3 三级标题" type="h3"></uni-title>
        <uni-title title="h4 四级标题" type="h4"></uni-title>
        <uni-title title="h5 五级标题" type="h5"></uni-title>
      </view>
    </uni-section>

    <uni-section title="改变颜色" type="line">

      <view class="example-body">
        <uni-title color="#027fff" title="h1 一级标题" type="h1"></uni-title>
        <uni-title color="#2490ff" title="h2 二级标题" type="h2"></uni-title>
        <uni-title color="#439ffc" title="h3 三级标题" type="h3"></uni-title>
        <uni-title color="#60adfb" title="h4 四级标题" type="h4"></uni-title>
        <uni-title color="#7db9f7" title="h5 五级标题" type="h5"></uni-title>
      </view>
    </uni-section>
    <uni-section title="对齐方式" type="line">

      <view class="example-body">
        <uni-title align="left" title="h1 左对齐" type="h1"></uni-title>
        <uni-title align="center" title="h2 居中" type="h2"></uni-title>
        <uni-title align="right" title="h3 右对齐" type="h3"></uni-title>
        <uni-title align="center" title="h4 居中" type="h4"></uni-title>
        <uni-title align="left" title="h5 左对齐" type="h5"></uni-title>
      </view>
    </uni-section>
    <uni-section title="组合示例" type="line">

      <view class="example-body">
        <view class="uni-box-head">
          <uni-title align="center" title="uni-app介绍" type="h1"></uni-title>
        </view>
        <view class="uni-box">
          <uni-title class="h3" title="1 框架介绍" type="h3"></uni-title>
        </view>
        <view class="uni-box">
          <uni-title class="h4" title="1.1 什么是uni-app" type="h4"></uni-title>
        </view>
        <view>
          <text
              class="uni-text">
            uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。
          </text>
        </view>
        <view class="uni-box">
          <uni-title class="h4" title="1.2 开发规范" type="h4"></uni-title>
        </view>
        <view class="">
          <uni-title class="h5" color="#666" title="- 页面文件遵循 Vue 单文件组件 (SFC) 规范" type="h5"></uni-title>
          <uni-title class="h5" color="#666" title="- 组件标签靠近小程序规范，详见uni-app 组件规范" type="h5"></uni-title>
          <uni-title class="h5" color="#666" title="- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"
                     type="h5"></uni-title>
          <uni-title class="h5" color="#666" title="- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期" type="h5">
          </uni-title>
          <uni-title class="h5" color="#666" title="- 为兼容多端运行，建议使用flex布局进行开发" type="h5"></uni-title>
        </view>
      </view>
    </uni-section>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: '章节标题通常用于记录页面标题，例如商品标题、新闻标题等，当前组件会自动上报内容统计数据',
    }
  },
  onLoad () {},
  methods: {},
}
</script>

<style lang="scss">
.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 10px;
}

.uni-text {
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
</style>

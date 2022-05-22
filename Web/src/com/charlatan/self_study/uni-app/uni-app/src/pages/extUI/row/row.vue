<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <!-- #ifndef APP-NVUE -->
      <text class="uni-h6"> 流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局</text>
      <!-- #endif -->
      <!-- #ifdef APP-NVUE -->
      <text class="uni-h6"> 流式栅格系统，在nvue不可使用媒体查询</text>
      <!-- #endif -->
    </uni-card>

    <uni-section subTitle="使用单一分栏创建基础的栅格布局" title="基础布局" type="line">
      <view class="example-body">
        <uni-row :width="nvueWidth" class="demo-uni-row">
          <uni-col>
            <view class="demo-uni-col dark_deep"></view>
          </uni-col>
        </uni-row>

        <uni-row :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="12">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="12">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="8">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="8">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="8">
            <view class="demo-uni-col dark"></view>
          </uni-col>
        </uni-row>

        <uni-row :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="6">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="6">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="6">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="6">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>
      </view>
    </uni-section>


    <uni-section subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局" title="混合布局" type="line">
      <view class="example-body">
        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="8">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="8">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :span="16">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :span="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
        </uni-row>
      </view>
    </uni-section>


    <uni-section subTitle="支持偏移指定的栏数" title="分栏偏移" type="line">
      <view class="example-body">
        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :span="8">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :offset="6" :span="8">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :offset="6" :span="6">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :offset="6" :span="6">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :pull="6" :span="12">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :push="6" :span="6">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>

        <uni-row :gutter="gutter" :width="nvueWidth" class="demo-uni-row">
          <uni-col :offset="6" :span="12">
            <view class="demo-uni-col dark"></view>
          </uni-col>
        </uni-row>
      </view>
    </uni-section>


    <!-- #ifndef APP-NVUE -->
    <uni-section subTitle="共五个响应尺寸：xs、sm、md、lg 和 xl" title="响应式布局" type="line">
      <view class="example-body">
        <uni-row :gutter="gutter" class="demo-uni-row">
          <uni-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
            <view class="demo-uni-col light"></view>
          </uni-col>
          <uni-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
            <view class="demo-uni-col dark"></view>
          </uni-col>
          <uni-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
            <view class="demo-uni-col light"></view>
          </uni-col>
        </uni-row>
      </view>
    </uni-section>

    <!-- #endif -->
  </view>
</template>

<script>
export default {
  data () {
    return {
      gutter: 0,
      nvueWidth: 730,
    }
  },
}
</script>

<style lang="scss">
.demo-uni-row {
  margin-bottom: 10px;

  // 组件在小程序端display为inline
  // QQ、字节小程序文档写有 :host，但实测不生效
  // 百度小程序没有 :host
  /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
  display: block;
  /* #endif */
}

// 支付宝小程序没有 demo-uni-row 层级
// 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
/* #ifdef MP-ALIPAY || MP-WEIXIN */
::v-deep .uni-row {
  margin-bottom: 10px;
}

/* #endif */

.demo-uni-col {
  height: 36px;
  border-radius: 5px;
}

.dark_deep {
  background-color: #99a9bf;
}

.dark {
  background-color: #d3dce6;
}

.light {
  background-color: #e5e9f2;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 5 rpx 10 rpx 0;
  overflow: hidden;
}
</style>

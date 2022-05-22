<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
    </uni-card>
    <uni-section padding title="基础用法" type="line">
      <view class="example-body">
        <uni-badge class="uni-badge-left-margin" text="1"/>
        <uni-badge class="uni-badge-left-margin" text="2" type="primary"/>
        <uni-badge class="uni-badge-left-margin" text="34" type="success"/>
        <uni-badge class="uni-badge-left-margin" text="45" type="warning"/>
        <uni-badge class="uni-badge-left-margin" text="123" type="info"/>
      </view>
    </uni-section>
    <uni-section padding title="无底色" type="line">
      <view class="example-body">
        <uni-badge :inverted="true" class="uni-badge-left-margin" text="1"/>
        <uni-badge :inverted="true" class="uni-badge-left-margin" text="2" type="primary"/>
        <uni-badge :inverted="true" class="uni-badge-left-margin" text="34" type="success"/>
        <uni-badge :inverted="true" class="uni-badge-left-margin" text="45" type="warning"/>
        <uni-badge :inverted="true" class="uni-badge-left-margin" text="123" type="info"/>
      </view>
    </uni-section>

    <uni-section padding title="自定义样式" type="line">
      <view class="example-body">
        <uni-badge :customStyle="{background: '#4335d6'}" class="uni-badge-left-margin" text="2"
                   type="primary"/>
        <uni-badge :customStyle="customStyle" class="uni-badge-left-margin" text="2" type="primary"/>
      </view>
    </uni-section>

    <uni-section padding subTitle="注：在安卓端不支持 nvue" title="定位: aboslute 属性" type="line">
      <uni-badge :text="value" absolute="rightTop" class="uni-badge-left-margin" size="small">
        <view class="box">
          <text class="box-text">右上</text>
        </view>
      </uni-badge>
    </uni-section>

    <uni-section padding title="偏移: offset 属性(存在 aboslute)" type="line">
      <uni-badge :offset="[-3, -3]" :text="8" absolute="rightTop" class="uni-badge-left-margin" size="small">
        <view class="box">
          <text class="box-text">右上</text>
        </view>
      </uni-badge>
    </uni-section>
    <uni-section padding title="仅显示点: is-dot 属性" type="line">
      <uni-badge :is-dot="true" :text="value" absolute="rightTop" class="uni-badge-left-margin" size="small">
        <view class="box">
          <text class="box-text">圆点</text>
        </view>
      </uni-badge>
    </uni-section>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value: 0,
      customStyle: {
        backgroundColor: '#62ed0d',
        color: '#fff',
      },
    }
  },
  mounted () {
    const timer = setInterval(() => {
      if (this.value >= 199) {
        clearInterval(timer)
        return
      }
      this.value++
    }, 100)
  },
}
</script>

<style lang="scss">
/* #ifdef MP-ALIPAY */
.uni-badge {
  margin-left: 20 rpx;
}

/* #endif */
.example-body {
  flex-direction: row;
  justify-content: flex-start;
}

.uni-badge-left-margin {
  margin-left: 10px;
}

.uni-badge-absolute {
  margin-left: 40px;
}

.box {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #DCDFE6;
  color: #fff;
  font-size: 12px;
}

.box-text {
  text-align: center;
  color: #fff;
  font-size: 12px;
}
</style>

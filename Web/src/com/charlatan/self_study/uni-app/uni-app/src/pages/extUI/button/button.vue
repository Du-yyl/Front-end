<template>
  <view class="container">
    <!-- 暂时不支持 nvue -->
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">使用 '.uni-btn' 样式，可对内置button组件设置样式</text>
    </uni-card>
    <uni-section sub-title="添加类名 .uni-btn-radius 可以使用圆角按钮" title="按钮形状" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn">默认按钮</button>
        <button class="uni-btn uni-btn-radius " hover-class="hover-class">圆角</button>
      </view>
    </uni-section>
    <uni-section sub-title="添加类名 .uni-btn-radius 可以使用圆角按钮" title="按钮形状(size=mini)" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" size="mini">默认按钮</button>
        <button class="uni-btn uni-btn-radius" size="mini">圆角</button>
      </view>
    </uni-section>
    <uni-section sub-title="指定不同的 type 属性 ,展示不同类型按钮" title="普通按钮" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" type="default">default</button>
        <button class="uni-btn" type="primary">primary</button>
        <button class="uni-btn" type="success">success</button>
        <button class="uni-btn" type="warning">warning</button>
        <button class="uni-btn" type="error">error</button>
        <button class="uni-btn" type="info">info</button>
      </view>
    </uni-section>
    <uni-section sub-title="指定不同的 type 属性 ,展示不同类型按钮" title="普通按钮(size=mini)" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" size="mini">default</button>
        <button class="uni-btn" size="mini" type="primary">primary</button>
        <button class="uni-btn" size="mini" type="success">success</button>
        <button class="uni-btn" size="mini" type="warning">warning</button>
        <button class="uni-btn" size="mini" type="error">error</button>
        <button class="uni-btn" size="mini" type="info">info</button>
      </view>
    </uni-section>

    <uni-section sub-title="添加类名 .uni-btn-plain 使用镂空按钮" title="镂空按钮" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" plain>default</button>
        <button class="uni-btn" plain type="primary">primary</button>
        <button class="uni-btn" plain type="success">success</button>
        <button class="uni-btn" plain type="warning">warning</button>
        <button class="uni-btn" plain type="error">error</button>
        <button class="uni-btn" plain type="info">info</button>
      </view>
    </uni-section>


    <uni-section sub-title="添加类名 .uni-btn-plain 使用镂空按钮" title="镂空按钮(size=mini)" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" plain size="mini">default</button>
        <button class="uni-btn" plain size="mini" type="primary">primary</button>
        <button class="uni-btn" plain size="mini" type="success">success</button>
        <button class="uni-btn" plain size="mini" type="warning">warning</button>
        <button class="uni-btn" plain size="mini" type="error">error</button>
        <button class="uni-btn" plain size="mini" type="info">info</button>
      </view>
    </uni-section>
    <uni-section sub-title="使用 disabled 属性 ,展示禁用按钮" title="禁用" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" disabled type="primary">primary</button>
        <button class="uni-btn" disabled plain type="primary">primary</button>
        <button class="uni-btn uni-btn-radius" disabled>圆角</button>
      </view>
    </uni-section>
    <uni-section sub-title="使用 disabled 属性 ,展示禁用按钮" title="禁用(size=mini)" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" disabled size="mini" type="primary">primary</button>
        <button class="uni-btn" disabled plain size="mini" type="primary">primary</button>
        <button class="uni-btn uni-btn-radius" disabled size="mini">圆角</button>
      </view>
    </uni-section>
    <uni-section sub-title="添加类名 .uni-btn-small .uni-btn-mini 展示按钮的不同大小" title="大小" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" type="primary">default</button>
        <button class="uni-btn uni-btn-small" type="primary">samll</button>
        <button class="uni-btn uni-btn-mini uni-btn-radius" type="primary">mini</button>
      </view>
    </uni-section>
    <uni-section sub-title="添加类名 .uni-btn-small .uni-btn-mini 展示按钮的不同大小" title="大小(sizi=mini)" type="line">
      <view class="uni-ma-5 uni-pb-5">
        <button class="uni-btn" size="mini" type="primary">default</button>
        <button class="uni-btn uni-btn-small" size="mini" type="primary">samll</button>
        <button class="uni-btn uni-btn-mini uni-btn-radius" size="mini" type="primary">mini</button>
      </view>
    </uni-section>
  </view>
</template>
<script>
export default {
  data () {
    return {}
  },
  onLoad () {},
  methods: {},
}
</script>
<style lang="scss">
.hover-class-test {
  color: red;
  border: 1px red solid;
  background: blue;
}
</style>

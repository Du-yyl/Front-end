<template>
  <view class="product">
    <image :src="image ? image : 'https://via.placeholder.com/150x200'" class="product-image"></image>
    <view class="product-title">{{ title }}</view>
    <view class="product-price">
      <text class="product-price-favour">￥{{ originalPrice }}</text>
      <text class="product-price-original">￥{{ favourPrice }}</text>
      <text class="product-tip">{{ tip }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'product',
  props: ['image', 'title', 'originalPrice', 'favourPrice', 'tip'],
}
</script>

<style>
.product {
  padding: 10 rpx 20 rpx;
  display: flex;
  flex-direction: column;
}

.product-image {
  height: 330 rpx;
  width: 330 rpx;
}

.product-title {
  width: 300 rpx;
  font-size: 32 rpx;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-price {
  font-size: 28 rpx;
  position: relative;
}

.product-price-original {
  color: #E80080;
}

.product-price-favour {
  color: #888888;
  text-decoration: line-through;
  margin-left: 10 rpx;
}

.product-tip {
  position: absolute;
  right: 10 rpx;
  background-color: #FF3333;
  color: #FFFFFF;
  padding: 0 10 rpx;
  border-radius: 5 rpx;
}
</style>

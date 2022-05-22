<template>
  <view class="view">
    <view class="list-cell view" hover-class="uni-list-cell-hover" @click="bindClick">
      <view v-if="options.title" class="media-list view">
        <view :class="{'media-image-right': options.article_type === 2, 'media-image-left': options.article_type === 1}"
              class="view">
          <text :class="{'media-title2': options.article_type === 1 || options.article_type === 2}" class="media-title">
            {{ options.title }}
          </text>
          <view v-if="options.image_list || options.image_url"
                :class="{'image-section-right': options.article_type === 2, 'image-section-left': options.article_type === 1}"
                class="image-section view">
            <image v-if="options.image_url"
                   :class="{'image-list2': options.article_type === 1 || options.article_type === 2}"
                   :src="options.image_url" class="image-list1"></image>
            <image v-for="(source, i) in options.image_list" v-if="options.image_list" :key="i"
                   :src="source.url"
                   class="image-list3"/>
          </view>
        </view>
        <view class="media-foot view">
          <view class="media-info view">
            <text class="info-text">{{ options.source }}</text>
            <text class="info-text">{{ options.comment_count }}条评论</text>
            <text class="info-text">{{ options.datetime }}</text>
          </view>
          <view class="max-close-view view" @click.stop="close">
            <view class="close-view view">
              <text class="close">×</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: function (e) {
        return {}
      },
    },
  },
  methods: {
    close (e) {
      this.$emit('close')
    },
    bindClick () {
      this.$emit('click')
    },
  },
}
</script>

<style>
.view {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.list-cell {
  width: 750 rpx;
  padding: 0 30 rpx;
}

.uni-list-cell-hover {
  background-color: #eeeeee;
}

.media-list {
  flex: 1;
  flex-direction: column;
  border-bottom-width: 1 rpx;
  border-bottom-style: solid;
  border-bottom-color: #c8c7cc;
  padding: 20 rpx 0;
}

.media-image-right {
  flex-direction: row;
}

.media-image-left {
  flex-direction: row-reverse;
}

.media-title {
  flex: 1;
}

.media-title {
  lines: 3;
  text-overflow: ellipsis;
  font-size: 32 rpx;
  color: #555555;
}

.media-title2 {
  flex: 1;
  margin-top: 6 rpx;
  line-height: 40 rpx;
}

.image-section {
  margin-top: 20 rpx;
  flex-direction: row;
  justify-content: space-between;
}

.image-section-right {
  margin-top: 0 rpx;
  margin-left: 10 rpx;
  width: 225 rpx;
  height: 146 rpx;
}

.image-section-left {
  margin-top: 0 rpx;
  margin-right: 10 rpx;
  width: 225 rpx;
  height: 146 rpx;
}

.image-list1 {
  width: 690 rpx;
  height: 481 rpx;
}

.image-list2 {
  width: 225 rpx;
  height: 146 rpx;
}

.image-list3 {
  width: 225 rpx;
  height: 146 rpx;
}

.media-info {
  flex-direction: row;
}

.info-text {
  margin-right: 20 rpx;
  color: #999999;
  font-size: 24 rpx;
}

.media-foot {
  margin-top: 20 rpx;
  flex-direction: row;
  justify-content: space-between;
}

.max-close-view {
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  height: 40 rpx;
  width: 80 rpx;
}

.close-view {
  border-style: solid;
  border-width: 1px;
  border-color: #999999;
  border-radius: 10 rpx;
  justify-content: center;
  height: 30 rpx;
  width: 40 rpx;
  line-height: 30 rpx;
}

.close {
  text-align: center;
  color: #999999;
  font-size: 28 rpx;
}
</style>

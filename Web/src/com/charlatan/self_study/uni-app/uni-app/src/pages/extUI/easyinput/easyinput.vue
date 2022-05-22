<template>
  <view>
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input
        所有功能
      </text>
    </uni-card>
    <uni-section padding subTitle="使用 focus 属性自动获取输入框焦点" title="默认" type="line">
      <uni-easyinput v-model="value" errorMessage focus placeholder="请输入内容" @input="input"></uni-easyinput>
    </uni-section>

    <uni-section padding subTitle="使用 trim 属性 ,可以控制返回内容的空格 " title="去除空格" type="line">
      <text class="uni-subtitle">输入内容：{{ '"' + value + '"' }}</text>
      <uni-easyinput v-model="value" class="uni-mt-5" placeholder="请输入内容" trim="all" @input="input">
      </uni-easyinput>
    </uni-section>


    <uni-section padding subTitle="使用 styles 属性 ,可以自定义输入框样式" title="自定义样式" type="line">
      <uni-easyinput v-model="value" :placeholderStyle="placeholderStyle" :styles="styles" placeholder="请输入内容"
                     @input="input"></uni-easyinput>
    </uni-section>

    <uni-section padding subTitle="使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标" title="图标" type="line">
      <uni-easyinput v-model="value" placeholder="左侧图标" prefixIcon="search" @iconClick="iconClick">
      </uni-easyinput>
      <uni-easyinput v-model="value" class="uni-mt-5" placeholder="右侧图标" suffixIcon="search"
                     @iconClick="iconClick">
      </uni-easyinput>
    </uni-section>


    <uni-section padding subTitle="使用 disabled 属性禁用输入框" title="禁用" type="line">
      <uni-easyinput disabled placeholder="请输入内容" value="已禁用"></uni-easyinput>
    </uni-section>

    <uni-section padding subTitle="指定属性 type=password 使用密码框,右侧会显示眼睛图标" title="密码框" type="line">
      <uni-easyinput v-model="password" placeholder="请输入密码" type="password"></uni-easyinput>
    </uni-section>

    <uni-section padding subTitle="指定属性 type=textarea 使用多行文本框" title="多行文本" type="line">
      <uni-easyinput v-model="value" placeholder="请输入内容" type="textarea"></uni-easyinput>
    </uni-section>


    <uni-section padding subTitle="使用属性 autoHeight 使多行文本框自动增高" title="多行文本自动高度" type="line">
      <uni-easyinput v-model="value" autoHeight placeholder="请输入内容" type="textarea"></uni-easyinput>
    </uni-section>


  </view>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      password: '',
      placeholderStyle: 'color:#2979FF;font-size:14px',
      styles: {
        color: '#2979FF',
        borderColor: '#2979FF',
      },
    }

  },
  onLoad () {},
  onReady () {},
  methods: {
    input (e) {
      console.log('输入内容：', e)
    },
    iconClick (type) {
      uni.showToast({
        title: `点击了${type === 'prefix' ? '左侧' : '右侧'}的图标`,
        icon: 'none',
      })
    },
  },
}
</script>

<style lang="scss">
.uni-mt-5 {
  margin-top: 5px;
}
</style>

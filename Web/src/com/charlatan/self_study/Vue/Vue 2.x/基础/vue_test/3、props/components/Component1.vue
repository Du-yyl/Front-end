<template>
  <div>
    <p>{{ msg1 }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    <h2>我是进行传递动态数据的 -> {{ msg }}</h2>
    <h2>数据的转换 -> {{ msg4 + 1 }}</h2>
    <button @click="update">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      msg1: 20,
      msg2: 10,
      msg3: 40,
      msg4: this.num,
    }
  },
  methods: {
    update () {
      this.msg4++
    },
  },
  // props:
  //     [
  //       'msg',
  //       'num',
  //     ],

  // 在收到数据时进行数据的类型的确认，确保数据类型的准确性，接受的同时对数据类型进行限制
  // props: {
  //   msg: String,
  //   num: Number,
  // },

  // 最严谨写法，可以定义某个字段的属性和必要性（可传可不传），和默认值，如果没有的话就使用默认值
  props: {
    msg: {
      type: String,
      default: '我是默认值',
    },
    num: {
      type: Number,
      // 指定字段是必传的
      required: true,
    },
  },

}
</script>

<style scoped>

</style>

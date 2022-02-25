<!--
  ~ Time:2022/2/24 16:08 45
  ~ Name:tod.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <li class="li">
    <input type="checkbox" class="checkbox" v-model="Obj.done">
    <span>{{ Obj.value }}</span>
    <button @click="deletes" v-show="Obj.done">删除</button>
  </li>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      todoValue: '测试内容',
      arr: false,
    }
  },
  methods: {
    deletes () {
      console.log('删除方法')
      this.removeObj(this.Obj)
    },
  },
  props: {
    Obj: Object,
    removeObj: Function,
  },
}
</script>

<style scoped lang="less">
.li {
  list-style: none;
  border: 1px solid red;
  width: 450px;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  left: -30px;
  border-radius: 5px;
  align-items: center;
  padding-left: 5px;

  span {
    display: block;
    width: 300px;
    height: 40px;
    text-overflow: ellipsis;
    line-height: 40px;
    padding-left: 15px;
  }

  button {
    width: 50px;
    height: 30px;
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 30px;
  }
}

.checkbox {
  width: 18px;
  height: 18px;
}
</style>

<!--
  ~ Time:2022/4/15 17:36 28
  ~ Name:wae.vue
  ~ Path:Web/src/com/charlatan/homework/week_14/day_1
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="wae">
    <input type="text" v-model="">
    <input type="radio">
  </div>
</template>

<script>
export default {
  name: 'wae',
  data () {
    return {}
  },
  components: {},
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

a {
  &:link {
    color: #b700ff;
  }

  &:visited {
    color: #0066ff;
  }

  &:hover {
    color: #FF00FF;
  }

  &:active {
    color: #ff8800;
  }
}

ul:after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;

  li {
    cursor: pointer;
    position: relative;
    list-style: none;
  }
}

// -------wae----------
#wae {

}
</style>

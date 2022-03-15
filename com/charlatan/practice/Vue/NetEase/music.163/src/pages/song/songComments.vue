<!--
  ~ Time:2022/3/14 12:14 15
  ~ Name:songComments.vue
  ~ Path:music.163/src/pages/song
  ~ ProjectName:NetEase
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="songComments">

  </div>
</template>

<script>
export default {
  name: 'songComments',
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

// -------songComments----------
#songComments {

}
</style>

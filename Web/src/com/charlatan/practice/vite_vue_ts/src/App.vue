<!--
  App
-->
<script lang="ts">
import Home from '/src/components/Home/index.vue'

export default {
  components: {
    Home,
  },
  data () {
    return {}
  },
  mounted () {
    this
  },

}
</script>

<template>
  <Home></Home>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

list {
  list-style: none;
}

.div {
  width: 300%;
  height: 100%;
  /* background: #000; */
}
</style>

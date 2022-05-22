<template>
  <uni-data-indexed-list :page-size="500" :show-select="true"
                         collection="opendb-china-cities" field="code as value, name as text, letter as group"
                         orderby="group asc" where="type==1" @click="bindClick"/>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    bindClick (e) {
      console.log('点击item，返回数据' + JSON.stringify(e))
    },
  },
}
</script>

<style></style>

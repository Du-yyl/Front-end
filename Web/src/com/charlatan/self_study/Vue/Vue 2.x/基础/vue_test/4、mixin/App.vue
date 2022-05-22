<template>
  <div>
    <Component1></Component1>
    <hr>
    <Component2></Component2>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

export default {
  name: 'App',
  components: {
    Component1,
    Component2,
  },
}
</script>

<style scoped>

</style>

<!--
  ~ Time:2022/3/4 17:19 33
  ~ Name:tab.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="div">

    <ul class="ul">
      <li v-for="tab in tabs" :key="tab.id" class="li">
        <router-link
            :to="'/'+tab.value"
            active-class="active"
            class="list-group-item"
        >{{ tab.value }}
        </router-link>
      </li>
    </ul>


  </div>
</template>

<script>

export default {
  name: 'tab',
  data () {
    return {
      tabs: [
        { id: '001', value: 'about' },
        { id: '002', value: 'home' },
        { id: '003', value: 'user' },
      ],
    }
  },
  components: {},
  methods: {
    change (index) {
      console.log(window.location.href = 'http://localhost:8080/#/' + this.tabs[index].value)
    },
  },
}
</script>

<style scoped>

.ul {
  width: 100px;
  height: 200px;
  background: #dcd1d1;
  display: flex;
  flex-wrap: wrap;
}

.li {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.div {
  width: 200px;
}
</style>

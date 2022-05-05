<!--
  ~ Time:2022/4/15 15:03 02
  ~ Name:Foot.vue
  ~ Path:src/components
  ~ ProjectName:exam
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="subtotal">
    <div id="submain">
      已选择 <span id="sub-1">{{ money }}</span>件商品
      总价 <span id="sub-2">{{ allMoney }}</span>
    </div>
    <div id="go" @click="showHint">
      去结算
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Foot',
  data () {
    return {
      money: 0,
      allMoney: 0,
    }
  },
  mounted () {
    /**
     * 计算总量
     */
    this.pubID1 = pubsub.subscribe ('changeMoney', (_, money) => {
      this.money = money
    })
    /**
     * 总价
     */
    this.pubID2 = pubsub.subscribe ('changeAllMoney', (_, allMoney) => {
      this.allMoney = Math.round (allMoney * 100) / 100
    })
  },
  // beforeDestroy () {
  //   pubsub.unsubscribe(this.pubID1)
  //   pubsub.unsubscribe(this.pubID2)
  // },
  methods: {

    showHint () {
      alert ('一共是' + this.allMoney + '元')
    },
  },
  components: {},
}
</script>

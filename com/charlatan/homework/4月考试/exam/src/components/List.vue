<!--
  ~ Time:2022/4/15 14:49 16
  ~ Name:List.vue
  ~ Path:src/components
  ~ ProjectName:exam
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <ul id="body-ul">
    <li v-for="(item,index) in lists" :key="item.id">
      <label class="shop-label">
        <input
            v-model="item.checked"
            class="shop-checked"
            name="shop-checked"
            type="checkbox"
            @change="listChange(item.value,totalPrice(item.price, item.value))">
      </label>
      <div class="shop-img-div">
        <img :src="item.bgUrl" alt="" class="shop-img">
      </div>
      <div class="show-span-div">
        我是商品介绍，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，
        啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，啦啦啦零零零零啦了
      </div>
      <span class="price">
        {{ item.price }}
      </span>
      <div class="number-div">
        <button
            :style="item.value <= 1 ?'cursor:not-allowed' : 'cursor:default'"
            class="btn-sub"
            type="button"
            @click="handleClick(true,item.value,item.id)">-
        </button>
        <label class="number-label">
          <input
              v-model="item.value"
              class="number"
              max="9"
              min="1"
              name="number"
              type="number"
              @input="handleInput(item.value,$event)">
        </label>
        <button
            :style="item.value >= 9 ?'cursor:not-allowed' : 'cursor:default'"
            class="btn-sum"
            type="button"
            @click="handleClick(false,item.value,item.id)">+
        </button>
      </div>
      <div class="subtotal">
        {{ totalPrice (item.price, item.value) }}
      </div>
      <div class="delete" @click="deleteThis($event)">
        删除
      </div>
    </li>
  </ul>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'List',
  data () {
    return {
      lists: [
        { checked: false, value: 1, id: 1, bgUrl: require('../static/file/1600414912988.jpeg'), price: 12.90 },
        {
          checked: false,
          value: 1,
          id: 2,
          bgUrl: require('../static/file/爱上你我总在学会_109951164791652570.jpg'),
          price: 22.90,
        },
        {
          checked: false,
          value: 1,
          id: 3,
          bgUrl: require('../static/file/v2-d18e1f982432df8bcdd444c64725acd9.jpg'),
          price: 19.90,
        },
        {
          checked: false,
          value: 1,
          id: 4,
          bgUrl: require('../static/file/de181691089d16048e34bc3a031561b1.jpg'),
          price: 32.90,
        },
        { checked: false, value: 1, id: 5, bgUrl: require('../static/file/1605923470663.jpeg'), price: 1.90 },
        { checked: false, value: 1, id: 6, bgUrl: require('../static/file/856404094.jpg'), price: 190 },
        { checked: false, value: 1, id: 7, bgUrl: require('../static/file/59976141212Tkqw.jpg'), price: 32.90 },
      ],

    }
  },
  computed: {
    totalPrice () {
      return (price, value) => {
        return Math.round(price * value * 100) / 100
      }
    },
  },
  methods: {
    deleteThis (event) {
      let deletes = document.getElementsByClassName('delete')
      let lis = document.querySelectorAll('li')
      for (let i = 0, len = deletes.length; i < len; i++) {
        deletes[i].onclick = function () {
          console.log(lis[i].children[0].checked)
          lis[i].style.left = '1500px'
          setTimeout(function () {
            lis[i].style.height = '0'
            lis[i].style.marginTop = '0'
            setTimeout(function () {
              lis[i].parentNode.removeChild(lis[i])
            }, 1000)
          }, 1000)
        }
      }
      this.listChange()
    },
    /**
     * 处理总价的计算
     * @param num
     * @param total
     * @param event
     */
    listChange () {
      // console.log(event)
      let checkeNum = 0
      let allMoney = 0
      let num = 0
      this.lists.forEach(item => {
        if (item.checked) {
          num++
          checkeNum++
          allMoney += Math.round(item.price * item.value * 100) / 100
        }
      })
      // console.log(num);

      pubsub.publish('change', {
        num,
        allNum: this.lists.length,
      })
      pubsub.publish('changeMoney', checkeNum)
      pubsub.publish('changeAllMoney', allMoney)

    },
    /**
     * 处理数量的改变
     * @param flag
     * @param value
     * @param id
     */
    handleClick (flag, value, id) {
      if (flag) {
        --value
        if (value < 1) {
          value = 1
        }
        this.lists.find(item => item.id === id).value = value
      } else {
        ++value
        if (value > 9) {
          value = 9
        }
        this.lists.find(item => item.id === id).value = value
        this.listChange(value, id)
      }

    },
    /**
     * 处理输入
     * @param value
     * @param event
     */
    handleInput (value, event) {
      if (event.target.value > 9) {
        event.target.value = 9
      }
      if (event.target.value < 1) {
        event.target.value = 1
      }
      this.listChange(event.target.value, event.target.value)
    },

    changAll (flag) {
      this.lists.forEach(item => {
        item.checked = flag
      })
      this.listChange()
    },
  },
  mounted () {
    pubsub.subscribe('changeAll', (msg, flag) => {
      this.changAll(flag)
    })
  },
  components: {},
}
</script>



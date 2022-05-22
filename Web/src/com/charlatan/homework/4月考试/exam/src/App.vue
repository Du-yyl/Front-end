<template>
  <div id="bigBox">
    <div id="body">

      <h1 id="h1">
        购物车
      </h1>
      <Header id="heard"></Header>
      <List></List>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import Foot from '@/components/Foot'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Foot,
  },
  data () {
    return {}
  },
  methods: {},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  text-decoration: none;
}

a:link {
  color: #b700ff;
}

a:visited {
  color: #0066ff;
}

a:hover {
  color: #FF00FF;
}

a:active {
  color: #ff8800;
}

*::selection {
  color: #fff99a;
  background-color: #ff961b;
}

ul:after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}

li {
  cursor: pointer;
  position: relative;
}

label, button {
  user-select: none;
  /*pointer-events:none;*/
}

/*-------以上为默认设置（The above is the default setting）--------*/

#bigBox {
  width: 1620px;
  height: 100%;
  /* height: 2400px; */
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  background-color: #bce8f1;
}

#body {
  position: relative;
  width: 90%;
  /* height: 130px; */
  right: 0;
  background-color: #bce8f1;
  left: 0;
  margin: auto;
  top: 0;
}


#h1 {
  position: absolute;
  font: 50px/40px "";
  text-align: center;
  right: 0;
  left: 0;
  top: 40px;
  color: #4025f5;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  background: #fff url(static/file/no-checked.png) no-repeat;
  background-size: 28px;
  height: 28px;
  vertical-align: middle;
  width: 28px;
  transition: all .17s ease-in-out;
}

input[type="checkbox"]:checked {
  background: #fff url(static/file/checked.png) no-repeat -1px -1px;
  background-size: 30px;
}

/* 头部 */
#heard {
  width: 100%;
  height: 50px;
  background-color: white;
  position: relative;
  top: 190px;
}

#heard-label {
  font: 20px "";
  position: relative;
  top: 10px;
  left: 30px;
}

#span-1 {
  font: 20px "";
  top: 10px;
  position: relative;
  left: 80px;
}

#span-2 {
  font: 20px "";
  top: 10px;
  position: relative;
  left: 520px;
}

#span-3 {
  font: 20px "";
  top: 10px;
  position: relative;
  left: 680px;
}

#span-4 {
  font: 20px "";
  top: 10px;
  position: relative;
  left: 890px;
}

#span-5 {
  font: 20px "";
  top: 10px;
  position: relative;
  left: 1010px;
}

/* 	商品列表 */
#body-ul {
  width: 100%;
  /* height: 400px; */
  position: relative;
  /* background-color: #f32323; */
  top: 170px;
  overflow: hidden;
  transition: all .7s ease-in-out;
}

#body-ul > li {
  width: 100%;
  position: relative;
  height: 250px;
  background-color: #ffffff;
  margin-top: 30px;
  border-top: 2px solid #4cbd37;
  transition: transform .2s ease-in-out, height .6s ease-in-out, box-shadow .3s ease-in-out, left 1s ease-in-out, top .4s ease-in-out, margin-top .6s ease-in-out;
  left: 0;
  top: 0;
}

#body-ul > li:hover {
  transform: translateY(-1px);
  height: 252px;
  box-shadow: 0 5px 5px 4px #e0e0e0;
}

.shop-label {
  position: absolute;
  top: 30px;
  left: 40px;
}

.shop-img-div {
  width: 170px;
  height: 200px;
  background-color: #c8e5bc;
  position: absolute;
  top: 20px;
  left: 150px;
  border-radius: 5px;
  overflow: hidden;
}

.shop-img {
  width: 100%;
  position: relative;
  top: 10px;
}

.show-span-div {
  width: 240px;
  height: 124px;
  background-color: #ffffff;
  position: absolute;
  left: 360px;
  top: 20px;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
}

.price {
  position: absolute;
  left: 650px;
  top: 30px;
  font: 20px "";
}

.number-div {
  width: 90px;
  height: 26px;
  position: absolute;
  top: 30px;
  left: 850px;
  background-color: #b5ccbf;
  overflow: hidden;
}

.btn-sub {
  width: 26px;
  height: 26px;
  font: 20px/16px "";
  position: absolute;
  left: 0;
  z-index: 2;
}

.number {
  width: 100px;
  position: absolute;
  left: 16px;
  height: 22px;
  padding-left: 20px;
  z-index: 1;
  outline: none;
}

.btn-sum {
  width: 26px;
  height: 26px;
  font: 20px/16px "";
  position: absolute;
  left: 64px;
  z-index: 2;
}

.subtotal {
  position: absolute;
  top: 30px;
  left: 1100px;
  font: 20px "";
}

.delete {
  position: absolute;
  top: 30px;
  left: 1260px;
  font: 20px "";
  width: 70px;
  height: 30px;
  text-align: center;
  padding-top: 3px;
  border-radius: 2px;
  border: 1px solid #4cbd37;
}

.shop-label {
  width: 50px;
  height: 150px;
  background-color: white;
}

#subtotal {
  width: 100%;
  height: 40px;
  position: relative;
  top: 190px;
}

#submain {
  position: absolute;
  top: 5px;
  right: 300px;
}

#go {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 20px "";
  color: white;
  background-color: #e64347;
  right: 100px;
  position: absolute;
  cursor: pointer;
  transition: all .6s ease-in-out;
}

#sub-1 {
  color: #e64347;
  font: 17px "";
}

#sub-2 {
  color: #e64347;
  font: 600 20px "";
}

#go:hover {
  width: 160px;
}


</style>

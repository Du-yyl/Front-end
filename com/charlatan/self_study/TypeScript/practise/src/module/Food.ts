/*!*
  * Time:2022/3/31 17:52 35
  * Name:food.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */

// 定义食物类
export default class Food {
  //  定义一个属性表示食物所对应的元素
  element: HTMLElement
  // 屏幕宽度
  static screenWidth = 50
  
  constructor () {
    // 因为不需要传入元素，所以在构造函数中直接进行赋值
    // 因为无法确保指定的 food 是否存在，但是我们确认他一定是存在的，所以，使用 ！ 表示他一定存在
    this.element = document.getElementById('food1')!
    
  }

//  获取食物坐标的方法
  get X (): number {
    return this.element.offsetLeft
  }
  
  get Y (): number {
    return this.element.offsetTop
  }

//  修改食物位置
  change (): void {
    // 生成一个随机的位置
    let X = Math.floor(Math.random() * Food.screenWidth) * 10
    let Y = Math.floor(Math.random() * Food.screenWidth) * 10
    this.element.style.left = X + 'px'
    this.element.style.top = Y + 'px'
  }
}


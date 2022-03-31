/*!*
  * Time:2022/3/31 17:56 35
  * Name:Snake.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */

import Food from './Food'

export default class Snake {
//  获取表示蛇头的元素
  head: HTMLElement
  // 获取蛇的身体（包括蛇头）
  body: HTMLCollection
  element = document.getElementById('snake')
  // 能穿墙
  throughWall: boolean
  
  static width = Food.screenWidth * 10 - 10
  
  constructor (throughWall = true) {
    this.head = document.querySelector('#snake > div')!
    this.body = this.element?.getElementsByTagName('div')!
    this.throughWall = throughWall
  }

//  获取蛇（蛇头）的坐标
  get X (): number {
    return this.head.offsetLeft
  }
  
  get Y (): number {
    return this.head.offsetTop
  }

//  设置坐标
  set X (value) {
    if (this.X !== value) {
      let number = this.throughXY(value)
      if (!this.throughWall && number < 0 || number > Snake.width) {
        throw new Error('蛇撞墙了')
      }
      // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
      if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
        // console.log('水平方向发生了掉头');
        // 如果发生了掉头，让蛇向反方向继续移动
        if (value > this.X) {
          // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
          number = this.X - 10
        } else {
          // 向左走
          number = this.X + 10
        }
      }
      this.move()
      this.head.style.left = number + 'px'
      this.checkHeadBody()
      
    }
  }
  
  set Y (value) {
    if (this.Y !== value) {
      let number = this.throughXY(value)
      if (!this.throughWall && number < 0 || number > Snake.width) {
        throw new Error('蛇撞墙了')
      }
      if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
        if (value > this.Y) {
          number = this.Y - 10
        } else {
          number = this.Y + 10
        }
      }
      this.move()
      this.head.style.top = number + 'px'
      this.checkHeadBody()
    }
  }
  
  /**
   * 根据是否可以穿墙，计算下次要使用的值
   * @param value
   */
  throughXY (value: number): number {
    return this.throughWall ?
      value > Snake.width ? 0 : value < 0 ? Snake.width : value
      :
      value > Snake.width + 10 ? Snake.width + 10 : value < -10 ? -10 : value
  }

//  蛇吃到东西
  addBody (): void {
    let div = document.createElement('div')
    this.element?.insertAdjacentElement('beforeend', div)
  }
  
  /**
   * 蛇移动
   */
  move () {
    
    for (let i = this.body.length - 1; i > 0; i--) {
      //  获取前面身体的位置
      let x = (this.body[i - 1] as HTMLElement).offsetLeft
      let y = (this.body[i - 1] as HTMLElement).offsetTop;
      //   将这个值设置到当前这个值身上
      (this.body[i] as HTMLElement).style.left = x + 'px';
      (this.body[i] as HTMLElement).style.top = y + 'px'
    }
  }
  
  /**
   * 检查头和身体相撞
   */
  checkHeadBody () {
    //  获取所有身体，检查是否相撞
    for (let i = 1; i < this.body.length; i++) {
      let x = (this.body[i] as HTMLElement).offsetLeft
      let y = (this.body[i] as HTMLElement).offsetTop
      if (this.X === x && this.Y === y) {
        throw new Error('撞到自己了')
      }
    }
  }
}

/*!*
  * Time:2022/3/31 18:13 10
  * Name:GameControl.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

// 游戏开始，控制其他所有类
export default class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  
  // kedDown = "ArrowUp"|"ArrowLeft"|"ArrowDown"|"ArrowRight"
  direction = 'ArrowRight'
  
  // 记录蛇是否还活着
  isLive = true
  
  constructor () {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }
  
  init () {
    //  移动蛇
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    //   调用 run 方法
    this.run()
  }
  
  /**
   * 键盘按下函数
   * @param event
   */
  keyDownHandler (event: KeyboardEvent) {
    // if (event.key === '')
    this.direction = event.key
  }

//  蛇移动的方法
  run () {
    //  获取现在的坐标
    let x = this.snake.X
    let y = this.snake.Y
    
    switch (this.direction) {
      case 'ArrowUp':
        y -= 10
        break
      case 'ArrowLeft':
        x -= 10
        break
      case 'ArrowDown':
        y += 10
        break
      case 'ArrowRight':
        x += 10
        break
    }
    this.isCatch(x, y)
    try {
      this.snake.X = x
      this.snake.Y = y
    } catch ({ message }) {
      alert(message)
      this.isLive = false
    }
    
    this.isLive &&
    setTimeout(this.run.bind(this), 250 - (this.scorePanel._level - 1) * 30)
  }

//  检测蛇是否吃到食物
  isCatch (x: number, y: number): void {
    if (x === this.food.X && y === this.food.Y) {
      console.log('吃到了')
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

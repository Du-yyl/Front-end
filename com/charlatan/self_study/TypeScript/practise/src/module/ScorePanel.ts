/*!*
  * Time:2022/3/31 17:53 00
  * Name:ScorePanel.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */

// 定义记分牌的类
export default class ScorePanel {
  // 记录分数
  private _score = 0
  // 记录等级
  _level = 1
  // 升级分数
  upScore = 10
  
  scoEle: HTMLElement
  levEle: HTMLElement
  
  // 最高等级
  static highestGrade = 10
  
  // 设置指定的等级
  private readonly grade: number
  
  constructor (grade = ScorePanel.highestGrade) {
    this.grade = grade
    this.scoEle = document.getElementById('score')!
    this.levEle = document.getElementById('panel')!
  }
  
  /**
   * 加分的方法
   */
  addScore (): void {
    this.scoEle.innerHTML = ++this._score + ''
    if (!(this._score % this.upScore)) {
      this.addLevel()
    }
  }
  
  /**
   * 提升等级的方法【这个方法由加分方法调用
   */
  private addLevel (): void {
    if (this._level < this.grade)
      this.levEle.innerHTML = ++this._level + ''
  }
}

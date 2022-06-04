/*!*
  * Time:2022/3/31 17:53 00
  * Name:ScorePanel.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
export default class ScorePanel {
    constructor(grade = ScorePanel.highestGrade) {
        this._level = 1;
        this.upScore = 10;
        this._score = 0;
        this.grade = grade;
        this.scoEle = document.getElementById('score');
        this.levEle = document.getElementById('panel');
    }
    addScore() {
        this.scoEle.innerHTML = ++this._score + '';
        if (!(this._score % this.upScore)) {
            this.addLevel();
        }
    }
    addLevel() {
        if (this._level < this.grade)
            this.levEle.innerHTML = ++this._level + '';
    }
}
ScorePanel.highestGrade = 10;

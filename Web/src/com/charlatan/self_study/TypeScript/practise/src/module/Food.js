/*!*
  * Time:2022/3/31 17:52 35
  * Name:food.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
export default class Food {
    constructor() {
        this.element = document.getElementById('food1');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        let X = Math.floor(Math.random() * Food.screenWidth) * 10;
        let Y = Math.floor(Math.random() * Food.screenWidth) * 10;
        this.element.style.left = X + 'px';
        this.element.style.top = Y + 'px';
    }
}
Food.screenWidth = 50;

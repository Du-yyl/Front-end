/*!*
  * Time:2022/3/31 17:56 35
  * Name:Snake.ts
  * Path:src/module
  * ProjectName:practise
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
import Food from './Food';
export default class Snake {
    constructor(throughWall = true) {
        var _a;
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div');
        this.body = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('div');
        this.throughWall = throughWall;
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (this.X !== value) {
            let number = this.throughXY(value);
            if (!this.throughWall && number < 0 || number > Snake.width) {
                throw new Error('蛇撞墙了');
            }
            if (this.body[1] && this.body[1].offsetLeft === value) {
                if (value > this.X) {
                    number = this.X - 10;
                }
                else {
                    number = this.X + 10;
                }
            }
            this.move();
            this.head.style.left = number + 'px';
            this.checkHeadBody();
        }
    }
    set Y(value) {
        if (this.Y !== value) {
            let number = this.throughXY(value);
            if (!this.throughWall && number < 0 || number > Snake.width) {
                throw new Error('蛇撞墙了');
            }
            if (this.body[1] && this.body[1].offsetTop === value) {
                if (value > this.Y) {
                    number = this.Y - 10;
                }
                else {
                    number = this.Y + 10;
                }
            }
            this.move();
            this.head.style.top = number + 'px';
            this.checkHeadBody();
        }
    }
    throughXY(value) {
        return this.throughWall ?
            value > Snake.width ? 0 : value < 0 ? Snake.width : value
            :
                value > Snake.width + 10 ? Snake.width + 10 : value < -10 ? -10 : value;
    }
    addBody() {
        var _a;
        let div = document.createElement('div');
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', div);
    }
    move() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = this.body[i - 1].offsetLeft;
            let y = this.body[i - 1].offsetTop;
            this.body[i].style.left = x + 'px';
            this.body[i].style.top = y + 'px';
        }
    }
    checkHeadBody() {
        for (let i = 1; i < this.body.length; i++) {
            let x = this.body[i].offsetLeft;
            let y = this.body[i].offsetTop;
            if (this.X === x && this.Y === y) {
                throw new Error('撞到自己了');
            }
        }
    }
}
Snake.width = Food.screenWidth * 10 - 10;

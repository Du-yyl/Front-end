import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
export default class GameControl {
    constructor() {
        this.direction = 'ArrowRight';
        this.isLive = true;
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
        this.run();
    }
    keyDownHandler(event) {
        this.direction = event.key;
    }
    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
                y -= 10;
                break;
            case 'ArrowLeft':
                x -= 10;
                break;
            case 'ArrowDown':
                y += 10;
                break;
            case 'ArrowRight':
                x += 10;
                break;
        }
        this.isCatch(x, y);
        try {
            this.snake.X = x;
            this.snake.Y = y;
        }
        catch ({ message }) {
            alert(message);
            this.isLive = false;
        }
        this.isLive &&
            setTimeout(this.run.bind(this), 250 - (this.scorePanel._level - 1) * 30);
    }
    isCatch(x, y) {
        if (x === this.food.X && y === this.food.Y) {
            console.log('吃到了');
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

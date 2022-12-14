import {IDrawable} from "../Interfaces/IDrawable";
import {settings} from "../settings";
import {Snake} from "./Snake";

export class Animation {
    private readonly iDrawables: IDrawable[];
    status: { start: boolean };
    private last: DOMHighResTimeStamp;
    private now: DOMHighResTimeStamp;
    private snake: Snake;
    canPush: boolean;

    constructor(status: { start: boolean }, snake: Snake) {
        this.iDrawables = [];
        this.last = performance.now();
        this.now = performance.now();
        this.status = status;

        this.snake = snake;

        this.canPush = false;

        this.snake.tail.forEach((body) => {
            this.addIDrawable(body);
        })
    }

    addIDrawable(iDrawable: IDrawable) {
        this.iDrawables.push(iDrawable);
    }

    animate() {
        if (this.status.start && this.snake.animate) {
            if (this.now - this.last > 1000 / settings.canvas.fps) {
                this.canPush = true;

                this.snake.update();
                // this.clear();
                // this.iDrawables.forEach((iDrawable: IDrawable) => iDrawable.draw());
                this.last = this.now;
            }
            this.now = performance.now();
            window.requestAnimationFrame(() => {
                this.animate();
            });
        }
    }

    clear() {
        this.iDrawables.forEach((iDrawable: IDrawable) => iDrawable.clear());
    }
}
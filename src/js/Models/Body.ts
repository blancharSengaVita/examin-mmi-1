import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";

export class Body extends Canvas {
    protected color: string;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: position) {
        super(canvas, ctx, position);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.fillStyle = settings.snake.color;
        this.ctx.lineWidth = settings.snake.borderWidth;
        this.ctx.rect(this.position.x, this.position.y, settings.snake.unit, settings.snake.unit);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }

    clear() {
        this.ctx.clearRect(this.position.x - settings.snake.borderWidth, this.position.y - settings.snake.borderWidth, settings.snake.unit + settings.snake.borderWidth * 2, settings.snake.unit + settings.snake.borderWidth * 2);
    }
}
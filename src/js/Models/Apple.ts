import {Canvas} from "./Canvas";
import {settings} from "../settings";
import {random} from "../Helpers/random";

export class Apple extends Canvas {
    private radius: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx, null);

        this.radius = settings.food.radius

        this.position = {
            x: Math.round(random(this.radius, this.canvas.width - this.radius) / (this.radius * 2)) * this.radius * 2 - this.radius,
            y: Math.round(random(this.radius, this.canvas.height - this.radius) / (this.radius * 2)) * this.radius * 2 - this.radius,
        }

        this.draw();

    }


    draw(): void {
        this.ctx.beginPath();
        this.ctx.fillStyle = settings.food.color;
        this.ctx.arc(this.position.x, this.position.y, settings.food.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    clear() {
        this.ctx.clearRect(this.position.x - 10, this.position.y - 10, settings.food.radius * 2, settings.food.radius * 2);
    }
}
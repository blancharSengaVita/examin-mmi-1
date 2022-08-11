import {Body} from "./Body";
import {direction} from "../Types/direction";
import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";
import {Apple} from "./Apple";
import {Score} from "./Score";
import {compare} from "../Helpers/compare";
import {Game} from "../Controller/Game";

export class Snake extends Canvas {
    private current: { direction: direction };
    tail: Body[];
    private readonly apples: Apple[];
    private readonly score: Score;
    private readonly replay: (message: string) => void;
    private game: Game;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, current: { direction: direction }, apples: Apple[], score: Score, replay: (message: string) => void, game:Game) {
        super(canvas, ctx, {
            x: 0,
            y:0
        });
        this.tail= [];

        this.draw();

    }

    draw() {
        this.tail.push(new Body(this.canvas, this.ctx, {x: this.position.x, y: this.position.y}))

        for (let i = 1; i < settings.snake.initialCount; i++) {
            this.tail.push(new Body(this.canvas, this.ctx, {
                x: this.tail[i - 1].position.x - settings.snake.unit,
                y: this.tail[i - 1].position.y
            }))
        }

        this.tail.forEach((body) => {
            body.position.x += this.canvas.width / 2 + settings.snake.initialCount / 2 * settings.snake.unit - settings.snake.unit;
            body.position.y += this.canvas.height / 2;
            body.draw();
        })

    }

    update() {

    }

    private getPreviousPosition() {

    }

    private isGoingOutside() {

    }

    private isEating() {

    }

    private isBitingItsTail() {

    }

    createSnake() {

    }


    clear() {

    }
}

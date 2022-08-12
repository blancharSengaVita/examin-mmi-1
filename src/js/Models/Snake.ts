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
    current: { direction: direction };
    tail: Body[];
    private readonly apples: Apple[];
    private readonly score: Score;
    private readonly replay: (message: string) => void;
    animate: boolean;
    private game: Game;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, current: { direction: direction }, apples: Apple[], score: Score, replay: (message: string) => void, game:Game) {
        super(canvas, ctx, {
            x: 0,
            y:0
        });
        this.animate = false;
        this.game = game;

        this.tail= [];

        this.createSnake();

        this.initialDraw();

        this.draw()
    }

    initialDraw() {
        this.current = {direction: 0}
        this.tail.forEach((body) => {
            body.position.x += this.canvas.width / 2 + settings.snake.initialCount / 2 * settings.snake.unit - settings.snake.unit;
            body.position.y += this.canvas.height / 2;
        })

        this.draw()
    }

    draw() {
        this.tail.forEach((body) => {
            body.draw();
        })
    }

    update() {
        this.tail.forEach((body) => {
            body.clear()
        })

        if (this.current.direction === 0) {
            this.getPreviousPosition()
            this.tail[0].position.x += settings.snake.unit
        }
        this.draw()
    }

    private getPreviousPosition() {
        for (let i = this.tail.length - 1; i > 0; i--) {
            this.tail[i].position.x = this.tail[i - 1].position.x;
            this.tail[i].position.y = this.tail[i - 1].position.y;
        }
    }

    private isGoingOutside() {

    }

    private isEating() {

    }

    private isBitingItsTail() {

    }


    clear() {
        this.tail.forEach((body) => {
            body.clear()
        })
    }

    createSnake() {
        this.tail.push(new Body(this.canvas, this.ctx, {x: this.position.x, y: this.position.y}))

        for (let i = 1; i < settings.snake.initialCount; i++) {
            this.tail.push(new Body(this.canvas, this.ctx, {
                x: this.tail[i - 1].position.x - settings.snake.unit,
                y: this.tail[i - 1].position.y
            }))
        }
    }
}

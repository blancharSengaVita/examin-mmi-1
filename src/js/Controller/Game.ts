import {Snake} from "../Models/Snake";
import {Animation} from "../Models/Animation";
import {direction} from "../Types/direction";
import {Apple} from "../Models/Apple";
import {Score} from "../Models/Score";
import {settings} from "../settings";
// import {Body} from "../Models/Body";

export class Game {
    private readonly snakeCanvas: HTMLCanvasElement;
    private readonly snakeCtx: CanvasRenderingContext2D;
    private readonly foodCanvas: HTMLCanvasElement;
    private readonly snake: Snake;
    private readonly animation: Animation;
    private readonly status: { start: boolean };
    private readonly current: { direction: direction };
    private readonly apples: Apple[];
    private readonly foodCtx: CanvasRenderingContext2D;
    private readonly score: Score;
    private readonly formPlay: HTMLFormElement;
    private readonly message: HTMLParagraphElement;
    private readonly scoreInput: HTMLInputElement;
    // private previous: { direction: number };

    constructor() {
        // this.previous = {direction: 0};
        this.formPlay = document.querySelector('.game__play') as HTMLFormElement;

        this.snakeCanvas = document.querySelector('.game__canvas-container__snake') as HTMLCanvasElement;
        this.snakeCtx = this.snakeCanvas.getContext('2d') as CanvasRenderingContext2D;
        this.snake = new Snake(this.snakeCanvas, this.snakeCtx, this.current, this.apples, this.score, this.replay, this);
        this.addEventListeners();

        // this.status = {start: false}

        // this.animation = new Animation(this.status, this.snake)
    }

    addEventListeners() {
        this.reset(new SubmitEvent('reset', {submitter: this.formPlay}));

    }

    private reset(event: SubmitEvent) {
        event.preventDefault();
        event.submitter.addEventListener('submit', () => {
            // this.previous = {direction: 0};
            this.formPlay.classList.add('hide');

            // this.animation.status = {start: true}

            // this.snake.tail.forEach((body: Body) => {
            //     body.clear();
            // });

            // this.snake.tail = [];
            // // this.snake.createSnake();
            // this.snake.initialDraw();
            // this.snake.animate = true;

            // this.animation.animate()
        })
    }

    replay(message: string) {
        document.querySelector(settings.forms.domSelector).classList.remove('hide');
    }

}
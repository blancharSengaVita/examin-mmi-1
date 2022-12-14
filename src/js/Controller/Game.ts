import {Snake} from "../Models/Snake";
import {Animation} from "../Models/Animation";
import {direction} from "../Types/direction";
import {Apple} from "../Models/Apple";
import {Score} from "../Models/Score";
import {settings} from "../settings";
import {Body} from "../Models/Body";

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
    private previous: { direction: number };

    constructor() {
        this.previous = {direction: 0};
        this.formPlay = document.querySelector('.game__play') as HTMLFormElement;

        this.score = new Score(document.querySelector(settings.score.domSelector));

        this.foodCanvas = document.querySelector('.game__canvas-container__food') as HTMLCanvasElement;
        this.foodCtx = this.foodCanvas.getContext('2d') as CanvasRenderingContext2D;
        this.apples = [];
        this.createApples(settings.food.number);

        this.snakeCanvas = document.querySelector('.game__canvas-container__snake') as HTMLCanvasElement;
        this.snakeCtx = this.snakeCanvas.getContext('2d') as CanvasRenderingContext2D;
        this.snake = new Snake(this.snakeCanvas, this.snakeCtx, this.current, this.apples, this.score, this.replay, this);


        this.status = {start: false}

        this.animation = new Animation(this.status, this.snake)

        this.addEventListeners();
    }

    addEventListeners() {
        this.reset(new SubmitEvent('reset', {submitter: this.formPlay}));

        addEventListener('keydown', (key: KeyboardEvent) => {
            if (this.previous.direction !== 1 && this.animation.canPush) {
                if (key.code === 'ArrowRight') {
                    this.snake.current = {direction: 0}
                    this.previous = {direction: 0};
                    this.animation.canPush = false
                }
            }

            if (this.previous.direction !== 0 && this.animation.canPush) {
                if (key.code === 'ArrowLeft') {
                    this.snake.current = {direction: 1}
                    this.previous = {direction: 1};
                    this.animation.canPush = false
                }
            }

            if (this.previous.direction !== 3 && this.animation.canPush) {
                if (key.code === 'ArrowDown') {
                    this.snake.current = {direction: 2}
                    this.previous = {direction: 2};
                    this.animation.canPush = false
                }
            }

            if (this.previous.direction !== 2 && this.animation.canPush) {
                if (key.code === 'ArrowUp') {
                    this.snake.current = {direction: 3}
                    this.previous = {direction: 3};
                    this.animation.canPush = false
                }
            }
        })

    }

    private reset(event: SubmitEvent) {
        event.preventDefault();
        event.submitter.addEventListener('submit', () => {
            this.previous = {direction: 0};
            this.formPlay.classList.add('hide');

            this.animation.status = {start: true}

            this.apples.forEach((apple: Apple) => {
                apple.clear();
            });
            this.apples.shift();
            this.createApples(settings.food.number);

            this.snake.tail.forEach((body: Body) => {
                body.clear();
            });

            this.snake.tail = [];
            this.snake.createSnake();
            this.snake.initialDraw();
            this.snake.animate = true;

            this.animation.animate()
        })
    }

    replay(message: string) {
        document.querySelector(settings.forms.domSelector).classList.remove('hide');
        document.querySelector(settings.forms.messageSelector).textContent = message;
    }

    public createApples(n: number) {
        for (let i = 0; i < n; i++) {
            this.apples.push(new Apple(this.foodCanvas, this.foodCtx))
        }
    }
}


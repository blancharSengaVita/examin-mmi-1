import {Snake} from "../Models/Snake";
import {Animation} from "../Models/Animation";
import {direction} from "../Types/direction";
import {Apple} from "../Models/Apple";
import {Score} from "../Models/Score";
import {settings} from "../settings";


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

    constructor() {
        this.formPlay = document.querySelector('.game__play') as HTMLFormElement;

        this.addEventListeners();
    }

    addEventListeners() {
        this.reset(new SubmitEvent('reset', {submitter: this.formPlay}))
    }

    private reset(event: SubmitEvent) {
        event.preventDefault();
        event.submitter.addEventListener('submit', () => {
            this.formPlay.classList.add('hide');
        })
    }

    replay(message: string) {
        document.querySelector(settings.forms.domSelector).classList.remove('hide');
    }

}
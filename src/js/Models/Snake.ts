import {Body} from "./Body";
import {direction} from "../Types/direction";
import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";
import {Apple} from "./Apple";
import {Score} from "./Score";
import {compare} from "../Helpers/compare";

export class Snake extends Canvas {
    private current: { direction: direction };
    private tail: Body[];
    private readonly apples: Apple[];
    private readonly score: Score;
    private readonly replay: (message: string) => void;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, current: { direction: direction }, apples: Apple[], score: Score, replay: (message: string) => void) {
        super(canvas, ctx, {
            x: 0,
            y:0
        });

    }

    draw() {

    }

    update() {

    }

    private isGoingOutside() {

    }

    private isEating() {

    }

    private isBitingItsTail() {

    }


    clear() {
        this.tail.forEach((body: Body) => {
            body.clear()
        });
    }
}

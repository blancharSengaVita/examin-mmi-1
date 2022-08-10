import {settings} from "../settings";
import {Canvas} from "./Canvas";
import {position} from "../Types/position";

export class Body extends Canvas {
    protected color: string;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: position) {
        super(canvas, ctx, position);
    }

    draw() {

    }

    clear() {

    }
}
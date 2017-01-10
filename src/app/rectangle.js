import { Vector } from './vector';
import { Color } from './color';

export class Rectangle {
    constructor(x = 0, y = 0) {
        this.position = new Vector(0, 0);
        this.size = new Vector(x, y);
        this.color = new Color();
    }
}
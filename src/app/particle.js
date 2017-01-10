import { Vector } from './vector';
import { Rectangle } from './rectangle';

export class Particle extends Rectangle {
    constructor() {
        super(10, 10);
        this.velocity = new Vector();
    }

    get left() {
        return this.position.x - this.size.x / 2;
    }

    get right() {
        return this.position.x + this.size.x / 2;
    }

    get top() {
        return this.position.y - this.size.y / 2;
    }

    get bottom() {
        return this.position.y + this.size.y / 2;
    }
}
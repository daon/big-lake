export class Color {
    constructor(red = 0, green = 0, blue = 0) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    get rgb() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    get hex() {
        return `#${this.red.toString(16)}${this.green.toString(16)}${this.blue.toString(16)}`;
    }
}
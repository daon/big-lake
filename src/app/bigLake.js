import { Particle } from './particle';

export class BigLake {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this._particles = [];

        for (var i = 0; i <= 500; i++) {
            const particle = new Particle();
            particle.position.y = -particle.size.y * Math.random()|0;
            particle.position.x += particle.size.x * (i%60);
            particle.velocity.y = -2 * Math.random()|0;
            particle.color.red = 255 * Math.random()|0;
            particle.color.green = 255 * Math.random()|0;
            particle.color.red = 255 * Math.random()|0;
            this._particles.push(particle);
        } 

        let lastTime;
        this._frameCallback = (millis) => {
            if(lastTime !== null) {
                const diff = millis - lastTime;
                this.update(diff / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(this._frameCallback);
        }
    }

    clear() {
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    draw() {
        this.clear();

        this._particles.forEach(particle => this.drawRectangle(particle));
    }
    
    drawRectangle(rectangle) {
        this._context.fillStyle = rectangle.color.rgb;
        this._context.fillRect(rectangle.left, rectangle.top, rectangle.size.x, rectangle.size.y);
    }

    start() {
        requestAnimationFrame(this._frameCallback);
    }

    update(dt) {
        const canvas = this._canvas;

        this._particles.forEach(particle => {
            particle.position.y += particle.velocity.y;

            if (particle.position.y > canvas.height-particle.size.y) {
                particle.position.y = -particle.size.y;
                particle.velocity.y = -2 * Math.random()|0;
            }

            particle.velocity.y += 2;
        });
        this.draw();
    }
}

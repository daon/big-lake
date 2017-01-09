'use strict';


function createParticle(canvas, context) {
    let width = 10,
        height = 10,
        x = 0,
        y = -10,
        velocity = -10,
        gravity = 1,
        color = 'black'; 

    return () => {
        y += velocity;

        if (y > canvas.height-height) {
            velocity *= -0.6;
            y = canvas.height-height;
        }

        velocity += gravity;
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    };
}

function setup(canvas, context) {
    let particleDraw = createParticle(canvas, context);

    canvas.width = 768;
    canvas.height = 600;

    return () => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        particleDraw();
    };
}

window.onload = () => {
    let canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    let draw = setup(canvas, context);
    document.body.appendChild(canvas);

    setInterval(draw, 30);
};
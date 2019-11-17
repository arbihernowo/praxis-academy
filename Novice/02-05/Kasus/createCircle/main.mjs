import {
    Canvas
} from './modules/canvas.mjs';

let circleBtn = document.querySelector('.circle');

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

// draw a circle
circleBtn.addEventListener('click', () => {
    import('./modules/circle.mjs').then((Module) => {
        let circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, 'green');
        circle1.draw();
        circle1.reportArea();
        circle1.reportPerimeter();
    })
});
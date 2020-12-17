let mover;
// let mover2;
let attractor;

function setup() {
    createCanvas(600, 700);
    mover = new Mover(50, 50, 5);
    // mover2 = new Mover(199, 100, 5);
    attractor = new Attractor(width / 2, height / 2, 20);

    background(220);
}

function draw() {
    background(220);
    // background(220, 5);
    mover.update();
    mover.show();
    // mover2.update();
    // mover2.show();

    attractor.attract(mover);
    // attractor.attract(mover2);
    attractor.show();
}
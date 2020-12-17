// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
    constructor(x, y, m) {
            this.mass = m;
            this.radius = m * 4;
            this.position = createVector(x, y);
            this.velocity = createVector(1, 0);
            this.acceleration = createVector(0, 0);
        }
        // Newton's 2nd law: F = M * A
        // or A = F / M
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // position changes by velocity
        this.position.add(this.velocity);
        // We must clear acceleration each frame
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(255, 127);
        circle(this.position.x, this.position.y, this.radius);
    }
}
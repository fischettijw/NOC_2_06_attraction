// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An object for a draggable attractive body in our world

class Attractor {
    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.mass = m;
        this.r = m * 4;
        this.G = 1;
        // this.dragOffset = createVector(0, 0);
        // this.dragging = false;
        // this.rollover = false;
    }

    attract(mover) {
        // Calculate direction of force
        let force = p5.Vector.sub(this.position, mover.position);
        // Distance between objects
        let distance = force.mag();
        // Limiting the distance to eliminate "extreme" results for very close or very far objects
        distance = constrain(distance, 5, 50);

        // Calculate gravitional force magnitude
        let strength = (this.G * this.mass * mover.mass) / (distance * distance);
        // Get force vector --> magnitude * direction
        force.setMag(strength);
        mover.applyForce(force);
        // return force;
    }

    // Method to display
    show() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(0);
        fill('red');
        circle(this.position.x, this.position.y, this.r);
    }


}
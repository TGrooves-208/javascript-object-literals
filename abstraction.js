// Let's introduce some complexity with abstraction
// Abstraction: Hide the details - Show the essentials
// How do we determine what the essentials are?
// This will vary on the use cases that are needed perhaps
function Circle(radius) {
    this.radius = radius;

    // We should hid this
    this.defaultLocation = { x: 0, y: 0 };

    // We should also hide this
    this.computeOptimumLocation = function(factor) {
        // Some stuff wil go here to be called inside of draw
    }

    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('Drawing ...');
    };
}

const circle = new Circle(10);
circle.draw();
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Drawing this from a draw function inside of a constructor function');
    }
}

// The blue colored items available on dot notation are properties
// The purple colored items available on dot notation are functions (methods when in a class)
// For example some of these methods will vary but are (apply, bind, call, toString)
const circle = new Circle1(5);

// If we want to target the window on the browser we can do the following below
// We wouldn't want to do this
// Circle.call(window, 1);

Circle.apply({}, [1,2,3]); // Useful if we already have some type of array available to us

const another = new Circle(1);
Circle.call({}, 1) // This is expression is equal to line above and references the "{}"

// Main takeaway in JavaScript all functions are objects

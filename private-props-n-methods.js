// Let's introduce some complexity with abstraction
// Abstraction: Hide the details - Show the essentials
// Let's add some abstraction here with variable constraints
// Using let only makes it available inside the scope of the object
// 1. Scope only exists within the function
// 2. Closure is always there 
// 3. A scoped function will have access to the parent function
function Circle(radius) {
    this.radius = radius;

    // We should hid this
    let defaultLocation = { x: 0, y: 0 };

    // We should also hide this
    let computeOptimumLocation = function(factor) {
        // Some stuff wil go here to be called inside of draw
    }

    this.draw = function() {
        // only available inside this local function
        // Inside this functional scope x and y
        // So when this function is executed the variables won't be available
        // let x, y; 
        // Closures allow us to refactor as such
        // They determine what will be accessible 
        computeOptimumLocation(0.1);
        // We can access the parent closure var of defaultLocation
        // If we want to access the members then we need to use "this"
        // this.radius will give us the members visibility
        console.log('Drawing ...');
    };
}

const circle = new Circle(10);
circle.draw();
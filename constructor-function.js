// Factory Function
// If we return an object from a function it is referred to as a Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Drawing this from a factory function');
        }
    };
}

const circle = createCircle(5);

// Constructor Function (In JavaScript we don't have the concept of classes)
// If we use the this with and new it is called a constructor function
function Circle(radius) {
    // This is a reference to the the object that is executing this piece of code
    console.log('this', this); // We don't need the console.log it is just an example
    this.radius = radius;
    this.draw = function() {
        console.log('Drawing this from a constructor function');
    }
    // No need to return anything (i.e. return this;)
    // It happens automatically for us with the new operator
}

// The new operator will create an empty object {}
// This will then point to this specific object
// 1. By default "this" points to the global object
// 2. Example (Browser global object is the "window" {})
// 3. If we are running this from node the global object global is global
// Defining global variables is bad practice 
const another1 =  Circle(1); // This is the window object reference in the browser
// Three things happen when we call the golbal object below
// 1. The new object operator will create an empty object
// 2. It will then set "this" to point to that object
// 3. The object will then be returned from the function on line 14
const another2 = new Circle(1); // This is the global object in node

// Every object has a constructor property
// This references the function that was used to create that Object {}
// Best practices for using contructor properties in JavaScript
new String(); // We should use either a '' or a "" as opposed to using the new String() constructor
new Boolean(); // This returns true or false
new Number(); // 1,2,3,4,5 ... same best practice should be used as in constructor a new "String"


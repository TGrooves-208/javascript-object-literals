// Adding and Removing Properties in JavaScript
// What this means is we can add extra properties
// This also means we can remove properties
// How is this useful for us as developers
// Think of an object that is created then sent to the server
function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('Drawing this from a function');
    }
}

const cirlce = new Circle(10);

// Token example
// user.token = 'abcdefg'; 
// In OOP languages like Java and PHP we have to change classes
circle.location = { x: 1 };
circle[propertyName] = { x: 1};

// The properties are calculated at runtime
// const propertyName = 'location';
// Use cases for using brackets
// When propertyName's aren't valid identifiers
// This is useful for when we have special characters
// const propertyName = 'center-location'
// circle.center-location; We need to use bracket notation to access center location
const propertyName = 'location';
circle[propertyName] = { x: 1};
circle['location'] = { x: 1};

// Deleting properties 
// User Object from a DB 
// PW and and what not dynamically delete
delete circle['location']

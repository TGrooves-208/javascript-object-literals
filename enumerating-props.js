// Sometimes we need to enumerate 
// We can use a for loop to accomplish this
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// This is how we return back the keys
for (let key in circle) {
    console.log(key, circle[key]);
}

// This is how we can get the properties back
// Very useful for not needing a function as a returned value
// Known as enumerating through an object to get all the members
for (let key in circle) {
    if(typeof circle[key] !== 'function') {
        console.log(key, circle[key])
    }
}

// This will return all of the keys in an array []
// Note: We cannot separate properties from methods
// This is know as enumerating through an object keys
const keys =  Object.keys(circle);
console.log(keys);

// Sometimes we want to know if an object has a given property
// Known as checking for the existence of a property on an object
if ('radius' in circle)
console.log('Circle has a radius');
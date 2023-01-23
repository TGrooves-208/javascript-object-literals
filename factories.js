// If an object has one or more methods the object has behavior
// Like a Person that can do different stuff
// Creating objects is an issue if the object has behavior
// We then will use a factory or a constructor function
// To accomplish this we can look at this example for each step
// 1: Take the object and then create a function to create the circle object
//
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     }
// };

// 2: Create this new function and move the circle inside this new function
// 3: We then want to set the parameters inside of the function
//  - In ES6 if the key value pair are the same we can omit the second pair
//  - Below is what we would call a factory function
function createCircle(radius) {
    // We don't need to define a const we just need to return the object
    // Why are certain methods created that return nothing?
    return {
        radius, // originally we would have to do this radius: radius
        // location: { // Removing for simplicity
        //     x: 1,
        //     y: 1
        // }
        draw: function () {
            console.log('drawing this from a method set inside of this new function that creates an object');
        }
    };
}

// We just need to call this function to create a new circle
const circle = createCircle(5);


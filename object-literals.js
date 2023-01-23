// Object literal set on the const variable
// An object in JavaScript is a set of contained key value pairs
const circle1 = {}; // Without key value pairs

const circle2 = { 
    // Circle 2 has three members 
    // 1.   Value of one set to radius 
    //      -   Values of radius and location are known as properties
    //      -   Properties are used to hold values
    // 2. value of x and y set to a location
    // 3. value of a function that is used for drawing
    //  -   - Function or Method is used to define some logic
    radius: 1,
    locaton: {
        x: 1,
        y: 1
    },
    draw: function() { 
        // The value here is a function for drawing
        // If a member of a "class" has a function it is referred to as a method
        console.log('draw the new object but this is only a log')
    }
}

// Returning back the Object literal in a console.log
console.log(circle1)
// We can always access members with dot notation that is seen in other similar languages
// The syntax may be a bit different but the behavior is similar but implementation may be different
circle2.draw();


// 

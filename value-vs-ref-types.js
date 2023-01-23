// In JavaScript we have two reference types
// Value Types "primitives"
//  - Number, String, Boolean, Symbol, undefined, null
// Reference
//  - Object {}, Function (), and Array []

// Primitives
// x and y are independent from one another
// We copy the value of 10 into x variable
let x = 10;
// We copy the value of x into the y variable
let y = x;

x = 20;
// When we use an object that object is not stored in the variable
// That value is stored somewhere in memory
let a = { value: 10};
// So when we copy a into b we are copying the reference to that object in memory
let b = a;

a.value = 20;

// Takeaway being the following
// Primitives are copied by their value
// Objects are copied by their reference

let number = 111;
function increase(number) {
  // This number increment is completely independant of the let number variable assignment
  number++;
}

// This will return the number value that the let = number is being set to
increase(number);
// Primitives are copied by their value
console.log(number);

// Let's take a look at the same scenario but with an Object
let obj = { value: 111};

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

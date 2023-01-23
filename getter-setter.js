// Getter and setters in JavaScript
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // This is a getter function
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  let computeOptimumLocation = function (factor) {
    // ... Some stuff goes in here
  };

  this.draw = function () {
    console.log("Drawing ...");
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
        return defaultLocation;
    },
    set: function(value) {
        // We can perform some type of validation before setting the value
        if (!value.x || !value.y)
        throw new Error('Invalid location.');
        defaultLocation = value;
    }
  });
}

const circle = new Circle(11);
circle.defaultLocation = 1;

circle.draw();

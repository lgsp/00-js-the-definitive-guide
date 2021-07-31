class Point {      // By convention, class names are capitalized
    constructor(x, y) {  // Constructor function to initialize new instances.
	this.x = x;     // This keyword is the new object being initialized
	this.y = y;    // Store function arguments as object properties
    }                 // No return is necessary in constructor functions.

    distance() {     // Method to compute distance from origin to point.
	return Math.sqrt( //Return the square root of x^2 + y^2
	    this.x * this.x + // this refers to the Point object which
		this.y * this.y // the distance method is invoked.
	);
    }
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).

// Now use a method of the Point object p
console.log(p.distance());    // => Math.SQRT2

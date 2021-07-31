// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JS source code.

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x; // Declare a variable named x.

// Values can be assigned to variables with an = sign
x = 0; // Now the variable x has the value 0
console.log('x = ' + x);
console.log("Now the variable x has the value 0");
x // => 0: A variable evaluates to its value.

// JavaScript supports several types of values
x = 1;                  // Numbers.
console.log("-------------");
console.log(x);
x = 0.01;              // Numbers can be integers or reals.
console.log(x);
x = "hello world";     // Strings of text in quotation marks.
console.log(x);
x = 'JavaScript';      // Single quote marks also delimit strings.
console.log(x);
x = true;              // A Boolean value.
console.log(x);
x = false;             // The other Boolean value.
console.log(x);
x = null;              // Null is a special value that means "no value".
console.log(x);
x = undefined;         // Undefined is another special value like null.
console.log(x);

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {               // Objects are enclosed in curly braces.
    topic: "JavaScript",   // The property "topic" has value "JavaScript".
    edition: 7             // The property "edition" has value 7 
};                         // The curly brace marks the end of the object.
console.log('---------------');
console.log('Object');
// Access the properties of an object with . or []:
console.log(book.topic);   // => "JavaScript"
console.log(book["edition"]);  // => 7: another way to access property values
book.author = "Flanagan";     // Create new properties by assignment.
console.log(book.author);
book.contents = {};

// Conditionally access properties with ?. (ES2020)
console.log(book.contents?.ch01?.sect1);
// => undefined: book.contents has no ch01 property

console.log('---------------');
console.log('Array');
// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
console.log(primes[0]);   // => 2: the first element (index 0) of the array.
console.log(primes.length); // => 4: how many elements in the array.
console.log(primes[primes.length-1]);// => 7: the last element of the array.
primes[4] = 9;          // Add a new element by assignment.
console.log(primes[4]);
primes[4] = 11;         // Or alter an existing element by assignment.
let empty = [];         // [] is an empty array with no elements.
console.log(empty.length);            // => 0

// Arrays and objects can hold other arrays and objects:
let points = [          // An array with 2 elements.
    {x: 0, y: 0},       // Each element is an object.
    {x: 1, y: 1}
];
console.log(points);

let data = {            // An object with 2 properties
    trial1: [[1, 2], [3, 4]], // The value of each property is an array
    trial2: [[2, 3], [4, 5]] // The elements of the arrays are arrays.
};
console.log(data);

// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
console.log(3 + 2);  // => 5: addition
console.log(3 - 2);  // => 1: subtraction
console.log(3 * 2);  // => 6: multiplication
console.log(3 / 2);  // => 1.5: division
console.log(points[1].x - points[0].x); // 1: more complicated operands also work
console.log("3" + "2");   // "32": + adds numbers, concatenates strings

// JavaScript defines some shorthand arithmetic operators
let count = 0;       // Define a variable
console.log(count++);  // Increment variable
console.log(count--);   // Decrement variable
count += 2;          // Add 2: same as count = count + 2;
console.log(count);
count += 3;          // Multiply by 3: same as count = count * 3;
console.log(count);
count;               // => 6: variable names are expressions, too.
console.log(count);

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
x = 2, y = 3;     // These = signs are asignment, not equality tests
console.log(x === y);              // => false: equality
console.log(x !== y);              // => true: inequality
console.log(x < y);                // => true: less-than
console.log(x <= y);        // => true: less-than or equal
console.log(x > y);  // => false: greater-than
console.log(x >= y); // => false: greater-than or equal
console.log("two" === "three");// => false: the two strings are different
console.log("two" > "three");
// => true: "tw" is alphabetically greater than "th"
console.log(false === (x > y));// => true: false is equal to false

// Logical operators combine or invert boolean values
console.log((x === 2) && (y === 3));
// => true: both comparisons are true. && is AND

console.log((x > 3) || (y < 3));
// => false: neither comparison is true. || is OR

console.log(!(x === y));  // => true: ! inverts a boolean value

// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {  // Define a function named "plus1" with parameter "x"
    return x + 1;    // Return a value one larger than the value passed in
}                   // Functions are enclosed in curly braces

console.log(plus1(y)); // => 4: y is 3, so this invocation returns 3+1

let square = function(x) {//Functions are values and can be assigned to vars
    return x * x;         // Compute the function's value
};                        // Semicolon marks the end of the assignment.

console.log(square(plus1(y)));
// => 16: invoke two functions in one expression

const plus2 = x => x + 1; // The input x maps to the output x + 1
const square2 = x => x * x; // The input x maps to the output x * x
console.log(plus2(y));  // => 4: function invocation is the same
console.log(square2(plus2(y)));  // => 16

let a = [];               // Create an empty array
a.push(1, 2, 3);          // The push() method adds elements to an array
console.log(a);
a.reverse();              // Another method: reverse the order of elements
console.log(a);


// We can define our own methods, too. The "this" keyword refers to the obj
// on which the method is defined: in this case, the points array from
// earlier.
points.dist = function() { // Define a method to compute distance between
    // points
    let p1 = this[0];     // First element of array we're invoked on
    let p2 = this[1];     // Second element of the "this" object
    let a = p2.x - p1.x;  // Difference in x coordinates
    let b = p2.y - p1.y;  // Difference in y coordinates
    return Math.sqrt(a*a + b*b); // The Pythagorean theorem Math.sqrt()    
};
console.log(points.dist());// => Math.sqrt(2): distance between 2 points


// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) {        // A function to compute the absolute value.
    if (x >= 0) {        // The if statement...
	return x;        // executes this code if the comparison is true.
    }                    // This is the end of the if clause.
    else {               // The optional else clause executes its code if
	return x;        // the comparison is false.
    }                    // Curly braces optional when 1 statement per claus
}                        // Note return statements nested inside if/else
console.log(abs(-10) === abs(10));// => true

function sum(array) {    // Compute the sum of the elements of an array
    let sum = 0;         // Start with an initial sum of 0.
    for (let x of array) { // Loop over array, assigning each element to x
	sum += x;          // Add the element value to the sum
    }                      // This is the end of the loop
    return sum;           // Return the sum
}
console.log(sum(primes));// 28: sum of the first 5 primes 2+3+5+7+11

function factorial(n) {   // A function to compute factorials
    let product = 1;      // Start with a product of 1
    while(n > 1) {      // Repeat statements in {} while expr in () is true
	product *= n;   // Shortcut for product = product * n;
	n++;            // Shortcut for n = n - 1
    }                   // End of loop
    return product;     // Return the product
}
console.log(factorial(4));  // => 24 = 1*4*3*2

function factorial2(n) {  // Another version using a different loop
    let i, product = 1;   // Start with 1
    for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
	product *= i;   // Do this each time. {} not needed for 1 line loops
    return product;     // Return the factorial
}
console.log(factorial2(5));    // => 120: 1*2*3*4*5


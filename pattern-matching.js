console.log(/^HTML/); // Match the letters H T M L at the start of a string
console.log(/[1-9][0-9]*/); // Match a digit !=0, followed by any # of digits
console.log(/\bjavascript\b/i);  // Match "javascript" as a word, case-insens

let text = "testing: 1, 2, 3"; // Sample text
console.log(text);
let pattern = /\d+/g; // Matches all instances of one or more digits
console.log(pattern);
console.log(pattern.test(text)); // true: a match exists
console.log(text.search(pattern)); // 9: position of first match
console.log(text.match(pattern)); // ["1", "2", "3"]: array of all matches
console.log(text.replace(pattern, "#")); // "testing: #, #, #"
console.log(text.split(/\D+/)); // ["", "1", "2", "3"]: split on nondigits

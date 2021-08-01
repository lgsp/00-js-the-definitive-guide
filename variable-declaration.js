let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x * x;
console.log(message);
console.log(i);
console.log(k);
console.log(x);
console.log(y);

const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496E8; // Astronomical Unit: distance to the sun (km)
console.log("Hubble constant " + H0 + " km/s/Mpc");
console.log("Speed of light in a vaccuum: " + C + " km/s");
console.log("Astronomical Unit: " + AU + " km");

let data = [
    {
	language: "JavaScript",
	type: "OOP and functional",
	year: 1995
    },
    {
	language: "Python",
	type: "OOP and functional",
	year: 1989
    },
    {
	language: "Swift",
	type: "Imperative, OOP and functional",
	year: 2014
    }
];

for(let i = 0, len = data.length; i < len; i++) console.log(data[i]);

console.log("===============================================");
console.log("for/of");
console.log('------');

for(let datum of data) console.log(datum);
console.log('------------------------------------');
console.log("for/of with 'const' instead of 'let'");
console.log('------------------------------------');
for(const datum of data) console.log(datum);
console.log("===============================================");
console.log("for/in");
console.log('------');

let object = data[0];
for(let property in object) console.log(property);

console.log('------------------------------------');
console.log("for/in with 'const' instead of 'let'");
console.log('------------------------------------');
for(const property in object) console.log(property);

const xVar = 1;
if (xVar === 1) {
    let xVar = 2;
    console.log(xVar);
}
console.log(xVar);
// let xVar = 3; // => ERROR

console.log('Destructuring Assignment');
let [x_1, x_2] = [1, 2];
console.log([x_1, x_2]);
[x_1, x_2] = [x_1+1, x_2+1];
console.log([x_1, x_2]);
[x_1, x_2] = [x_2, x_1];
console.log([x_1, x_2]);

// Convert [x_1, x_2] coordinates to [r, theta] polar coordinates
function toPolar(x_1, x_2) {
    return [Math.sqrt(x_1 * x_1 + x_2 * x_2), Math.atan2(x_2, x_1)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
    return  [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);
console.log("Polar: " + [r, theta]);
let [u, v] = toCartesian(r, theta);
console.log("Cartesian: " + [u, v]);

let obj = { x: 1, y: 2 };
for(const [name, value] of Object.entries(obj)) {
    console.log(name, value);
}

[x, y] = [1]
console.log([x, y]);
[x, y] = [1, 2, 3];
console.log([x, y]);
[, x, , y] = [1, 2, 3, 4];
console.log([, x, , y]);

[x, ...y] = [1, 2, 3, 4];
console.log("[x, ...y] = " + [x, ...y]);
console.log("x = " + x + " y = " + y);
let [a, [b, c]] = [1, [2, 2.5], 3];
console.log("[a, [b, c]] = " + [a, [b, c]]);
let [first, ...rest] = "Hello";
console.log([first, ...rest]);

let transparent = {r: 0.0, g: 0.0, a: 1.0}; // a RGBA color
console.log(transparent);
let {R, G, B} = transparent;
console.log({R, G, B});

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const {sin, cos, tan} = Math;
console.log({sin, cos, tan});

const {cosinus: cosine, tangente: tangent } = Math;
console.log({cosinus: cosine, tangente: tangent });

let points = [{x: 1, y: 2}, {x: 3, y: 4}];
console.log(points);

points = { p1: [1, 2], p2: [3, 4] };
let { p1: [x1, y1], p2: [x2, y2] } = points;
console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4);

let s = `hello world`;
console.log(s);
let name = "Bill";
let greeting = `Hello ${ name }.`;
console.log(greeting);

/*
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
$tack trace:
${exception.stack}
`;

console.log(errorMessage);
*/

console.log(`\n`.length);
console.log(String.raw`\n`.length);

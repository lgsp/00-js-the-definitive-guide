let strname = "string name";
console.log(strname);
console.log(typeof strname);
let symname = Symbol("propname");
console.log(symname);
console.log(typeof symname);
let o = {};
o[strname] = 1;
console.log(o[strname]);
o[symname] = 2;
console.log(o[symname]);
let s = Symbol("sym_x");
console.log(s.toString());

let s1 = Symbol.for("shared");
let s2 = Symbol.for("shared");
console.log(s1 === s2);
console.log(Symbol.keyFor(s2));

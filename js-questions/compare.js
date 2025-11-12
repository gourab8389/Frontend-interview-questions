console.log(5 == '5');   // true (type coercion)
console.log(5 === '5');  // false (different types)
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(0 === -0); // true

console.log([] == false); // true
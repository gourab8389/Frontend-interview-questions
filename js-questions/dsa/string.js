// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// String Methods

const str = "Hello, World!";

const upperStr = str.toUpperCase();
console.log(upperStr); // output: "HELLO, WORLD!"

const lowerStr = str.toLowerCase();
console.log(lowerStr); // output: "hello, world!"

const charAtIndex = str.charAt(7);
console.log(charAtIndex); // output: "W"

const substring = str.substring(0, 5);
console.log(substring); // output: "Hello"

const includesHello = str.includes("Hello");
console.log(includesHello); // output: true

const replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr); // output: "Hello, JavaScript!"

const splitStr = str.split(", ");
console.log(splitStr); // output: ["Hello", "World!"]

const trimmedStr = "   Hello, World!   ".trim();
console.log(trimmedStr); // output: "Hello, World!"

const indexOfW = str.indexOf("W");
console.log(indexOfW); // output: 7

const lastIndexOfL = str.lastIndexOf("l");
console.log(lastIndexOfL); // output: 10

const startsWithHello = str.startsWith("Hello");
console.log(startsWithHello); // output: true

const endsWithExclamation = str.endsWith("!");
console.log(endsWithExclamation); // output: true

const repeatedStr = "Ha".repeat(3);
console.log(repeatedStr); // output: "HaHaHa"

const paddedStartStr = "5".padStart(3, "0");
console.log(paddedStartStr); // output: "005"

const paddedEndStr = "5".padEnd(3, "0");
console.log(paddedEndStr); // output: "500"
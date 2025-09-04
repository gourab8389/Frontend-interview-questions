// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// Array Methods
const array = [2, 3, 5, 6, 8];

const doubled = array.map(n => n * 2);
console.log(doubled); // output: 4,6,10,12,16

const evens = array.filter(n => n % 2 === 0);
console.log(evens); // output: 2,6,8

const sorted = array.sort((a, b) => a - b);
console.log(sorted); // output: 2,3,5,6,8

const sum = array.reduce((acc, n) => acc + n, 0);
console.log(sum); // output: 24

const found = array.find(n => n > 4);
console.log(found); // output: 5

const includesThree = array.includes(3);
console.log(includesThree); // output: true

const descArray = [...array].sort((a, b) => b - a);
console.log(descArray); // output: 8,6,5,3,2

const reverseArray = [...array].reverse();
console.log(reverseArray); // output: 8,6,5,3,2

const fillArray = new Array(5).fill(0);
console.log(fillArray); // output: 0,0,0,0,0

const concatArray = array.concat([10,12,14]);
console.log(concatArray); // output: 2,3,5,6,8,10,12,14

const flatArray = [[1,2],[3,4],[5]].flat();
console.log(flatArray); // output: 1,2,3,4,5

const arrayFrom = Array.from('hello');
console.log(arrayFrom); // output: h,e,l,l,o

const firstIndex = array.indexOf(5);
console.log(firstIndex); // output: 2

const lastIndex = [1,2,3,5,6,5,8].lastIndexOf(5);
console.log(lastIndex); // output: 5
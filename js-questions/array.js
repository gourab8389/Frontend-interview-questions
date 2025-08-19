const array = [2,3,5,6,8];

const doubled = array.map(n => n*2)
console.log(doubled); // output: 4,6,10,12,16

const events = array.filter(n => n %2 === 0);
console.log(events) // output: 2,6,8

const sort = array.sort();
console.log(sort); // output: 2,3,5,6,8
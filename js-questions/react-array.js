const users = [
  { name: "Gourab", age: 22 },
  { name: "Rahul", age: 25 }
];

const names = users.map((user) => user.name);
console.log(names); // Output: ["Gourab", "Rahul"]


// Filter + Map (Real interview combo)

const numbers = [1, 2, 3, 4, 5];

const evenSquares = numbers.filter((num) => num % 2 === 0).map((num) => num*num);
console.log(evenSquares); // Output: [4, 16]

const users1 = [
  { name: "A", age: 30 },
  { name: "B", age: 20 }
];

users1.sort((a, b) => a.age - b.age);
console.log(users1); // Output: [{ name: "B", age: 20 }, { name: "A", age: 30 }]
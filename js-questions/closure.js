function Counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter =Counter();  
// A closure gives you access to an outer function's scope from an inner function.

for (let i = 0; i < 5; i++) {
  console.log(counter());
}

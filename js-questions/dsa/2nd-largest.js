// Second Largest Element in an Array
// Write a function that takes an array of numbers as input and returns the second largest number in the array.
// If the array has less than two unique numbers, return null.

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

// Example usage:
console.log(secondLargest([3, 5, 2, 9, 7])); // Output: 7
console.log(secondLargest([1, 1, 1])); // Output: null

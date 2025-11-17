// Write a function solution that, A is an array of int and K that is an int that returns the minimum number of elements of array. A need to be change so that the array contains a correct fargment of consecutive integers from 1 to K.

// example:
// A = [4,2,1,3,2] and K = 4 then output will be 0 and if K = 5 then output will be 1 because we need to add 5 to make the array contains consecutive integers from 1 to 5.

function minElementsNeed(A, K) {
  const numSet = new Set(A);
  let count = 0;
  for (let i = 1; i <= K; i++) {
    if (!numSet.has(i)) {
      count++;
    }
  }
  return count;
}

// write the function code in basic JavaScript mean no libraries or frameworks also without using .has() method of Set

function minElementsNeed(A, K) {
  const numSet = new Set(A);
  let count = 0;
  for (let i = 1; i <= K; i++) {
    let found = false;
    for (let num of numSet) {
      if (num === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(minElementsNeed([4, 2, 1, 3, 2], 4)); // Output: 0
console.log(minElementsNeed([4, 2, 1, 3, 2], 5)); // Output: 1

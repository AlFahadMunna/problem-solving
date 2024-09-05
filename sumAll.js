// Problem: Write a function that takes an array of two numbers and returns the sum of those two numbers plus all numbers between them. The lowest number might not always come first.

// Example:

// sumAll([1, 4]) should return 10 because 1 + 2 + 3 + 4 = 10.
// sumAll([4, 1]) should also return 10.

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));

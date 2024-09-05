// Question: Find the Missing Number in a Sequence
// Problem: You are given an array of n-1 numbers from the range 1 to n, and there are no duplicates. Write a function that finds the missing number from the array.

// Example:

// findMissingNumber([1, 2, 4, 6, 3, 7, 8]) should return 5 because 5 is missing from the sequence 1 to 8.

function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // Output: 5

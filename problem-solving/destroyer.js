// Problem: You will be provided with an initial array and one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Example:

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

function destroyer(arr, ...valsToRemove) {
  return arr.filter((item) => !valsToRemove.includes(item));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Output: [1, 1]

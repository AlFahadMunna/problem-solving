//Problem: Write a function that returns the largest number from an array of numbers.

function findLargestNumber(arr) {
  let largeValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (i > largeValue) {
      largeValue = arr[i];
    }
  }
}
console.log(findLargestNumber([1, 22, 3, 7, 2, 1, 5]));

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 3, 7, 22, 1, 2, 5]));

function findLargestNumber(arr) {
  return arr.reduce((largest, current) => {
    return current > largest ? current : largest;
  }, arr[0]);
}

console.log(findLargestNumber([1, 3, 22, 1, 7, 2, 5]));

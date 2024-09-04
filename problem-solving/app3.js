//Problem: Write a function that returns the factorial of a number. The factorial of a non-negative integer
//𝑛
//n is the product of all positive integers less than or equal to
//𝑛
//n.

//Example:factorialize(5) should return 120

function factorialize(num) {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(6));

function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(6));

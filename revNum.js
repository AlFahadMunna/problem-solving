// Problem: Write a javascript function that reverse a number

function reverse(n) {
  return Number(n.toString().split("").reverse().join(""));
}

console.log(reverse(12));
console.log(reverse(12345));

function revrerseNum(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverse(12));
console.log(reverse(12345));

// How would you check if a number is an integer?

let number = 12;

console.log(Number.isInteger(number));

if (number % 1 === 0) {
  console.log("Integer");
} else {
  console.log(" Not !");
}

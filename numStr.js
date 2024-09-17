//Problem: In an array numbers and strings, only add those members which are not strings..

let arr = ["dsf", 32, "jfaa", 1, 2, , 44, "haha"];

let sum = 0;

arr.forEach(function (el) {
  if (typeof el === "number") {
    sum = sum + el;
  }
});
console.log(sum);

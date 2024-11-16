// Write a javascript function which accepts an argument and returns the type.

function typeCheck(arg) {
  return typeof arg;
}

console.log(typeCheck(5));
console.log(typeCheck("5"));
console.log(typeCheck());
console.log(typeCheck({}));
console.log(typeCheck(false));
console.log(typeCheck(function () {}));

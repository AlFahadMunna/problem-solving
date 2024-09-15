//  Problem: How to check if an object is an array or not?
//Provide some code.

function checkArray(element) {
  return Array.isArray(element);
}
console.log(checkArray([]));
console.log(checkArray({}));

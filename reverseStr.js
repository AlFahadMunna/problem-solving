//Write a function that takes a string as input and returns the string reversed.
//function reverseString(str) {
// Your code here
//}

// Test case
//console.log(reverseString("hello")); // Expected output: "olleh"

function reverseString(str) {
  console.log(str);
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

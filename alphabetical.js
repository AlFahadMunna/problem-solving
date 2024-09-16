//Problem: Write a javascript function that returns a passed string
//with letter in alphabetical order.

function alphabetical(str) {
  return str.split("").sort().join("");
}
console.log(alphabetical("apple"));

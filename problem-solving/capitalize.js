//Problem: Write a javascript function that accepts a string as a parameter and converts the
//first latter of each word of the string in upper case.

function capitalize(str) {
  let words = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return words.join(" ");
}

console.log(capitalize("how are you"));
console.log(capitalize("my name is fahad"));

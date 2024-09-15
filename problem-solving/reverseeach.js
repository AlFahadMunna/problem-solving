//given a string, reverse each word in the sentence.

let str = "my life my rules";

savedStr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});
console.log(savedStr.join(" "));

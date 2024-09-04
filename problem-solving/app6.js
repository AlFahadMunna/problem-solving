// Question: Find the Longest Word in a String
// Problem: Write a function that finds the longest word in a given string. Return the length of the longest word.

// Example:

// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6, because "jumped" is the longest word with 6 letters.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestLength = 0;
  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
  return longestLength;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

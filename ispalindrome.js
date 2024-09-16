// Problem: Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Example:

// isPalindrome("racecar") should return true because "racecar" reads the same forwards and backwards.
// isPalindrome("hello") should return false because "hello" does not.

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

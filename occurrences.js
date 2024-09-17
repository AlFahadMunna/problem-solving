//Problem: Write a javascript function to get the number of occurrences of each letter
// in specified string..

function occ(str) {
  let occurrences = {};
  str.split("").forEach((word) => {
    if (occurrences.hasOwnProperty(word) == true) {
      occurrences[word]++;
    } else {
      occurrences[word] = 1;
    }
  });
  return occurrences;
}

console.log(occ("apple"));

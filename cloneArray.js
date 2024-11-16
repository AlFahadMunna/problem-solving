// Write a javascript function to clone an array

function cloneArr(arr) {
  return [...arr];
}

function cloneArr(arr) {
  let newArr = [];
  arr.forEach((e) => {
    newArr.push(e);
  });
  return newArr;
}

function cloneArr(arr) {
  return arr.map(function (e) {
    return e;
  });
}

let newArr = cloneArr([1, 2, 3, 4, 5]);

console.log(newArr);

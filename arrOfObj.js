// Problem: Loop an array of objects and remove all objects which
//don't have gender's value male..

let arr = [
  { name: "fahad", gender: "male" },
  { name: "juhe", gender: "female" },
  { name: "munna", gender: "male" },
  { name: "afsana", gender: "female" },
  { name: "akash", gender: "male" },
];

let count = 0;
arr.forEach(function (el) {
  if (el.gender !== "male") {
    count++;
  }
});

for (let j = 0; j < count; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender !== "male") {
      arr.splice([i], 1);
    }
  }
}
console.log(arr);

let newArr = arr.filter((el) => {
  return el.gender == "male";
});
console.log(newArr);

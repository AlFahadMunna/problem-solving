// Write a javascript function to get the first element of an array. passing a
// parameter "n" will return the first "n" elements of the array.

function retrive(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(n + "no elements here");
  }
}

retrive([6, 3, 4, 5]);

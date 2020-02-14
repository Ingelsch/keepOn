function sum(arr, n) {
  // Only change code below this line
  /*Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.*/

  /*let sum = arr[0];
  for (let i = 1; i <= n; i++){
    sum += arr[i];
  }
  return sum;*/ //funker med loop

  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n-1) + arr[n];
  } // funker med Recursion



  // Only change code above this line
}

console.log(sum([2, 3, 4], 1))
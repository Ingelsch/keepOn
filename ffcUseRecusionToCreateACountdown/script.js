//Only change code below this line
function countdown(myArray, n){ //dette er godkjent hos fcc...
  if(n <= 0) {
    return;
  }
  else {
    myArray.push(n);
    console.log(countdown(myArray.push(n) ));
    countdown(myArray, n - 1)
    
  }
  console.log(n);
}

//console.log(countdown(myArray, 5));
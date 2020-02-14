function rangeOfNumbers(startNum, endNum) {
  /*if (startNum - endNum === 0) {
    return [endNum]
  } else {
    let nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
  }*/
    return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};

console.log(rangeOfNumbers(1, 10));
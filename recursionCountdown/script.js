function countDown(n) {
  console.log(n);
  if(n >= 1) countDown(n-1);
}
countDown(10);
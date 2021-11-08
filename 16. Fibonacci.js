function fibonacciRecursion(n) {
  if (n < 2) return n;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

function fibonacciIterative(n) {
  const resultArr = [0, 1];
  for (let i = 2; i <= n; i++) resultArr.push(resultArr[i - 1] + resultArr[i - 2]);
  return resultArr[n];
}

console.log(fibonacciRecursion(8));

console.log(fibonacciIterative(8));

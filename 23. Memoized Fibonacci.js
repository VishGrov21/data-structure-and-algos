const memoizedFibo = () => {
  const cache = {};
  return function fibonacci(n) {
    if (n in cache) return cache[n];
    if (n < 2) {
      cache[n] = n;
      return n;
    } else {
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  };
};

const memoFiboMaster = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.pop();
};

const memo = memoizedFibo();

console.log(memoFiboMaster(8));

// console.log(memo(50))

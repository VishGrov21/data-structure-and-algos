function nonConstructibleChange(coins) {
  // Write your code here.
  if (coins.length < 0) return 1;
  let currentMaxChangeVal = 1;
  coins.sort((firstEle, secondEle) => firstEle - secondEle);
  for (const coin of coins) {
    if (coin > currentMaxChangeVal) return currentMaxChangeVal;
    currentMaxChangeVal += coin;
  }
  return currentMaxChangeVal;
}

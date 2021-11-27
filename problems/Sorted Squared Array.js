function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((val) => Math.pow(val, 2)).sort((a, b) => a - b);
}

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const resultArr = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      result = array[i] + array[left] + array[right];
      if (result === targetSum) {
        resultArr.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (result < targetSum) {
        left++;
      } else right--;
    }
  }
  return resultArr;
}

function longestPeak(array = []) {
  // Write your code here.
  let longestPeak = 0;
  let size = array.length;
  let idx = 1;
  while (idx < size - 1) {
    const isPeak = array[idx - 1] < array[idx] && array[idx] > array[idx + 1];
    if (!isPeak) {
      idx++;
      continue;
    }
    // Because we already know that the current left is part of the peak
    //  so instead of Idx-1, we're taking Idx-1. Now we will traverse
    // on the left to determine how many integers are less than peak
    let leftIdx = idx - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--;
    // Similaryly of leftIdx, we're taking rightIdx
    let rightIdx = idx + 2;
    while (rightIdx < size && array[rightIdx] < array[rightIdx - 1]) rightIdx++;

    const currentPeak = rightIdx - leftIdx - 1;
    longestPeak = Math.max(currentPeak, longestPeak);
    idx = rightIdx;
  }
  return longestPeak;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));

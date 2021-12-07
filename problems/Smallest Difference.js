function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let a1I = 0;
  let a2I = 0;
  let currentBest = arrayOne[a1I] - arrayTwo[a2I];
  let result = [arrayOne[a1I], arrayTwo[a2I]];
  while (a1I < arrayOne.length && a2I < arrayTwo.length) {
    let sum = arrayOne[a1I] - arrayTwo[a2I];
    if (sum === 0) {
      return [arrayOne[a1I], arrayTwo[a2I]];
    }
    if (Math.abs(sum) < Math.abs(currentBest)) {
      result = [arrayOne[a1I], arrayTwo[a2I]];
      currentBest = sum;
    }

    if (arrayOne[a1I] < arrayTwo[a2I]) a1I++;
    else a2I++;
  }
  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

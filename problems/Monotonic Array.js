// First determine the direction of the array.
// If direction is negative and difference is positive then its not monotonic
// similarly if direction is positive and direction is negative then its not motonic
function isMonotonic(array) {
  // Write your code here
  let arrSize = array.length;
  if (arrSize < 3) return true;
  let direction = array[1] - array[0];
  for (let i = 1; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    } else {
      const difference = array[i] - array[i - 1];
      console.log(array[i], array[i - 1]);
      console.log(difference);
      console.log(direction);
      if ((difference < 0 && direction > 0) || (difference > 0 && direction < 0)) return false;
    }
  }
  return true;
}

/**
 * Assume the array is both non-increasing and non-decreasing
 * if previous value is less than current value then obviously its increasing then nonIncreasing will be false;
 * similarly if previous value is greater than current value then its decreasing then nondecreasing will be false;
 * @param {*} array
 * @returns
 */
function isMonotonic(array) {
  // Write your code here.
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonIncreasing = false;
    if (array[i] > array[i - 1]) isNonDecreasing = false;
  }
  return isNonIncreasing || isNonDecreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

function moveElementToEnd(array, toMove) {
  // Write your code here.
  const size = array.length;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] === toMove && array[right] !== toMove) {
      const temp = array[right];
      array[right] = toMove;
      array[left] = temp;
      left++;
      right--;
    }
    if (array[left] !== toMove) {
      left++;
    }
    if (array[right] === toMove) {
      right--;
    }
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

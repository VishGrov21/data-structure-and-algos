const mergerFunction = (left = [], right = []) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftEle = left[leftIndex];
    const rightEle = right[rightIndex];
    if (leftEle < rightEle) {
      result.push(leftEle);
      leftIndex++;
    } else {
      result.push(rightEle);
      rightIndex++;
    }
  }
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

console.log(mergerFunction([2, 4], [3, 6]));

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return mergerFunction(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([29, 88, 64, 21, 23, 10, 2, 3, 6, 1, 56]));

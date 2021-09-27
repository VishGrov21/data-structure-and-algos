const mergeArrays = (arr1 = [], arr2 = []) => [...arr1, ...arr2].sort((m, n) => m - n);

const mergeArrays2 = (arr1 = [], arr2 = []) => {
  if (arr1.length < 2) return arr2;
  else if (arr2.length < 2) return arr1;
  else {
    const mergedArray = [];
    let arr1Ele = arr1[0];
    let arr2Ele = arr2[0];
    let arr1Index = 0;
    let arr2Index = 0;
    while (arr1Ele || arr2Ele) {
      if (arr1Ele && arr1Ele < arr2Ele) {
        mergedArray.push(arr1Ele);
        arr1Index++;
        arr1Ele = arr1[arr1Index];
      } else {
        mergedArray.push(arr2Ele);
        arr2Index++;
        arr2Ele = arr2[arr2Index];
      }
    }
    return mergedArray;
  }
};

console.log(mergeArrays2([3, 3, 4, 20], [2, 5, 7, 23, 30, 45, 69]));

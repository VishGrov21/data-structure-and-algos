const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array = []) {
  let smallest;
  let smallestIndex;
  let temp;
  for (let i = 0; i < array.length; i++) {
    smallest = array[i];
    smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        smallestIndex = j;
      }
    }
    temp = array[i];
    array[i] = smallest;
    array[smallestIndex] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));

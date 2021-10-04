function firstRecurringChar(arr) {
  const result = {};
  for (let ele of arr) {
    if (!result[ele]) {
      result[ele] = 1;
    } else {
      return ele;
    }
  }
  return undefined;
}

console.log(firstRecurringChar([2, 1, 11, 9, 5, 6, 1]));

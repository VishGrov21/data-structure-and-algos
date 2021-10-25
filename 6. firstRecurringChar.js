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

const firstRecurringChar2 = (arr) => {
  const result = {};
  const index=0
  let target = null;
  while(!target){
    if(!result[arr[index]]){
      result[arr[index]]=1;
    }else{
      target=arr[index];
    }
    index++
  }
  return target;
}

console.log(firstRecurringChar2([2, 1, 11, 9, 5, 6, 1]));

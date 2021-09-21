interface ArrayToMapI {
  [key: string]: boolean;
}
const containsCommonItem = (array1: string[], array2: string[]): boolean => {
  let map: ArrayToMapI = {};
  array1.forEach((item) => {
    if (!map[item]) map[item] = true;
  });
  for (let ele of array2) {
    if (ele in map) return true;
  }
  return false;
};

const containsCommonItem2 = (array1: string[], array2: string[]): boolean => {
  return array1.some((item) => array2.includes(item));
};
const val = containsCommonItem2(["x", "y", "z"], ["a", "x", "c"]);
console.log("🚀 ~ file: Untitled-1 ~ line 16 ~ val", val);

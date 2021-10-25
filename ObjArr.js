const val = {
  Fruits: ["orange", "apple", "jackfruit", "papaya", "Pineapple"],
  Vegetables: ["Tomato", "brinjal", "carrot", "radish"],
  Nuts: ["Cashew", "Badam", "Wallnut"],
};

const arrayOfObj = () => {
  const result = [];
  for (let [key, value] of Object.entries(val)) {
    value.forEach((ele) => result.push({ [key]: ele }));
  }
  return result;
};

const result = arrayOfObj();

console.log(result);

const ObjOfArr = () => {
  const obj = {};
  result.forEach((ele) => {
    let key = Object.keys(ele);
    if (!obj[key]) {
      obj[key] = Array(ele[key]);
    } else {
      let tempArr = obj[key];
      tempArr.push(ele[key]);
      obj[key] = tempArr;
    }
  });
  return obj;
};

console.log(ObjOfArr());

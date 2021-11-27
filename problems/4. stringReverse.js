function stringReverse(str) {
  let revStrArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStrArr.push(str[i]);
  }
  return revStrArr.join("");
}

const reverse2 = (str) => [...str].reverse().join("");

console.log(reverse2("Vishal"));

console.log(stringReverse("Hi My Name is Vishal Grover"));

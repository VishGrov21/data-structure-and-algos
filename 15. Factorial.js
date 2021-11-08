const factIterative = (num) => {
  let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
};

const factRecursive = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factRecursive(num - 1);
};

console.log(factRecursive(6));

console.log(factIterative(5));

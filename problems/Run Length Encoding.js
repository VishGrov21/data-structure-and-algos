function runLengthEncoding(string = "") {
  // Write your code here.
  let charCount = 1;
  let resultArr = [];
  for (let i = 1; i < string.length; i++) {
    const prevChar = string[i - 1];
    const char = string[i];
    if (prevChar !== char || charCount === 9) {
      resultArr.push(`${charCount}${char}`);
      charCount = 0;
    }
    charCount++;
  }
  return resultArr.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));

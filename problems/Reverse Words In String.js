function reverseWordsInString(string) {
  // Write your code here.
  let result = [];
  let reverseResult = [];
  let word = string[0];

  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    const prevChar = string[i - 1];
    if (char.charCodeAt(0) !== 32 && prevChar.charCodeAt(0) !== 32) {
      word = word + char;
    } else if (char.charCodeAt(0) === 32 && prevChar.charCodeAt(0) === 32) {
      word = word + char;
    } else if (
      (char.charCodeAt(0) !== 32 && prevChar.charCodeAt(0) === 32) ||
      (char.charCodeAt(0) === 32 && prevChar.charCodeAt(0) !== 32)
    ) {
      result.push(word);
      word = char;
    }
  }
  result.push(word);
  for (let i = string.length - 1; i >= 0; i--) {
    reverseResult.push(result[i]);
  }
  return reverseResult?.join("");
}

function reverseWordsInString(string) {
  // Write your code here.
  let result = [];
  let word = string[0];

  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    if (char !== " ") {
      word = word + char;
    } else if (char === " ") {
      result.push(word);
      result.push(" ");
      word = "";
    }
  }
  result.push(word);
  let start = 0;
  let end = result.length - 1;
  while (start < end) {
    let temp = result[start];
    result[start] = result[end];
    result[end] = temp;
    start++;
    end--;
  }
  return result?.join("");
}

console.log(reverseWordsInString("Algo Expert is Best"));

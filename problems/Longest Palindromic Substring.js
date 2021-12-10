function longestPalindromicSubstring(string = "") {
  // Write your code here.
  if (string.length === 1) return string;
  let longestStr = "";
  let longestStrLength = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      const subStr = string.substr(i, j);
      if (subStr === subStr.split("").reverse().join("")) {
        if (subStr.length > longestStrLength) {
          longestStr = subStr;
          longestStrLength = subStr.length;
        }
      }
    }
  }
  return longestStr;
}

function longestPalindromicSubstring2(string = "") {
  // Write your code here.
  let longestPalindromeLength = 0;
  let longPalindromeStr = string.charAt(0);
  for (let i = 1; i < string.length; i++) {
    const odd = getPalindrome(string, i - 1, i + 1);
    const even = getPalindrome(string, i - 1, i);
    const longStr = odd.length > even.length ? odd : even;
    if (longStr.length > longPalindromeStr.length) longPalindromeStr = longStr;
  }
  return longPalindromeStr;
}

const getPalindrome = (string = "", leftIdx = 0, rightIdx = 0) => {
  const size = string.length;
  let str = "";
  while (leftIdx >= 0 && rightIdx < size) {
    if (string[leftIdx] === string[rightIdx]) {
      str = string.substring(leftIdx, rightIdx + 1);
      leftIdx--;
      rightIdx++;
    } else {
      break;
    }
  }
  return str;
};

console.log(longestPalindromicSubstring2("abaxyzzyxf"));

console.log(longestPalindromicSubstring("abccba"));

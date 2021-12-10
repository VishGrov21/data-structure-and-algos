function firstNonRepeatingCharacter(string) {
  // Write your code here.
  if (string.length === 0) return -1;
  else if (string.length === 1) return 0;
  else {
    let charObj = { [string[0]]: 1 };
    for (let i = 1; i < string.length; i++) {
      let char = string[i];
      if (!(char in charObj)) charObj[char] = 0;
      charObj[char]++;
    }
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (charObj[char] === 1) return i;
    }
  }
  return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf"));

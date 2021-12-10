function groupAnagrams(words) {
  // Write your code here.
  let wordObj = {};
  let resultArr = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = [...word].sort().join("");
    if (!(word in wordObj)) wordObj[word] = [];
    const wordsArr = wordObj[word];
    wordsArr.push(words[i]);
  }

  return Object.values(wordObj);
}

console.log(groupAnagrams(["yo", "act", "cat", "flop", "tac", "lofp", "oy"]));

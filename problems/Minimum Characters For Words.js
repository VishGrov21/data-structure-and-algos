/**
 * Minimum Characters For Words
 *
 * Write a function that takes in an array of words and returns the smallest
 * array of characters needed to form all of the words. The characters don't
 * need to be in any particular order.
 *
 * For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"].
 *
 * Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.
 *
 * Sample Input words = ["this", "that", "did", "deed", "them!", "a"]
 *
 * Sample Output ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
 * The characters could be ordered differently.
 * @param words
 * @returns
 */

function minimumCharactersForWords(words = []) {
  // Write your code here.
  let charObj = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let tempObj = {};
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (!(char in tempObj)) {
        tempObj[char] = 0;
      }
      tempObj[char]++;
    }
    for (let [key, value] of Object.entries(tempObj)) {
      if (key in charObj) charObj[key] = Math.max(value, charObj[key]);
      else charObj[key] = value;
    }
  }
  for (let [key, value] of Object.entries(charObj)) {
    for (let i = 0; i < value; i++) {
      result.push(key);
    }
  }
  return result;
}

console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]));

function generateDocument(characters = "", document = "") {
  // Write your code here.
  const charObj = {};
  for (let i = 0; i < characters.length; i++) {
    let char = characters[i];
    if (!charObj[char]) charObj[char] = 0;
    charObj[char] = charObj[char] + 1;
  }
  for (let j = 0; j < document.length; j++) {
    let docChar = document[i];
    if (!(docChar in charObj) || charObj[docChar] === 0) return false;
    charObj[docChar] = charObj[docChar] - 1;
  }
  return true;
}

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  if (key > 26) key = key % 26;
  const resultArr = [];
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let newCharCode = charCode + key;
    if (newCharCode > 122) newCharCode = newCharCode - 26;
    resultArr.push(String.fromCharCode(newCharCode));
  }
  return resultArr.join("");
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;

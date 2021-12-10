function validIPAddresses(string = "") {
  // Write your code here.
  if (string.length < 4 || string.length > 12) return [];
  let result = [];

  for (let i = 0; i < 3; i++) {
    const firstPart = string.substring(0, i + 1);
    if (!isValidPart(firstPart)) continue;

    for (let j = i + 1; j < 3 + i; j++) {
      const secondPart = string.substring(i + 1, j + 1);
      if (!isValidPart(secondPart)) continue;

      for (let k = j + 1; k < 4 + j; k++) {
        const thirdPart = string.substring(j + 1, k + 1);
        const fourthPart = string.substring(k + 1);
        if (isValidPart(thirdPart) && isValidPart(fourthPart)) {
          result.push(`${firstPart}.${secondPart}.${thirdPart}.${fourthPart}`);
        }
      }
    }
  }

  return result;
}

const isValidPart = (string = "") => {
  const num = parseInt(string);
  if (num > 255 || string.length !== num.toString().length) return false;
  return true;
};

console.log(validIPAddresses("1921680"));

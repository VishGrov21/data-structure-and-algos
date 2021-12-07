function spiralTraverse(array) {
  // Write your code here.
  let startRow = 0;
  let startCol = 0;
  let endRow = array.length - 1;
  let endCol = array[0].length - 1;
  const result = [];
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    startRow++;
    for (let row = startRow; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    endCol--;
    for (let col = endCol; col >= startCol; col--) {
      if (startRow - 1 === endRow) break;
      result.push(array[endRow][col])
    }
    endRow--;
    for (let row = endRow; row >= startRow; row--) {
      if (startCol - 1 === endCol) break;
      result.push(array[row][startCol]);
    }
    startCol++;
  }
  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;

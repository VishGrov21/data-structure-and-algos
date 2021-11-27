// O(N) Time & O(1) Space
// Solution 1
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIndex = 0;
  let sequenceIndex = 0;
  while (arrIndex < array.length) {
    if (array[arrIndex] === sequence[sequenceIndex] && sequenceIndex < sequence.length) sequenceIndex++;
    arrIndex++;
  }
  return sequenceIndex === sequence.length;
}

// O(N) Time & O(1) Space
// Solution 2
function isValidSubsequence2(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  for (let value of array) {
    if (seqIdx === sequence.length) break;
    if (value === sequence[seqIdx]) seqIdx++;
  }
  return seqIdx === sequence.length;
}

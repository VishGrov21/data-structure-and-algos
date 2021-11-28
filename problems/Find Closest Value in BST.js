let closestNum = 0;
function findClosestValueInBst(tree, target) {
  // Write your code here.
  if (tree === null) return closestNum;
  const result1 = Math.abs(tree.value - target);
  const result2 = Math.abs(closestNum - target);
  closestNum = result1 < result2 ? tree.value : closestNum;
  if (target < tree.value) {
    findClosestValueInBst(tree.left, target);
  } else {
    findClosestValueInBst(tree.right, target);
  }
  return closestNum;
}

let closestNum = Math.max();
function findClosestValueInBst2(tree, target) {
  // Write your code here.
  let currentNode = tree;

  while (currentNode) {
    const result1 = Math.abs(target - currentNode.value);
    const result2 = Math.abs(target - closestNum);
    closestNum = result1 < result2 ? currentNode.value : closestNum;
    if (target < currentNode.value) currentNode = currentNode.left;
    else if (target > currentNode.value) currentNode = currentNode.right;
    else break;
  }
  return closestNum;
}


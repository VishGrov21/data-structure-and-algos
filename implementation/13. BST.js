class BST {
  constructor() {
    this.root = null;
  }
  _getNewNode(value) {
    return {
      left: null,
      right: null,
      value,
    };
  }
  insert(value) {
    const newNode = this._getNewNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode.value !== value) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    currentNode = newNode;
    return this;
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    const result = [];
    let currentNode = this.root;
    const queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  breadthFirstSearchRecursion(queue, result) {
    if (!queue.length) return result;
    let currentNode = queue.shift();
    result.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.breadthFirstSearchRecursion(queue, result);
  }
  // Depth First Search
  dfsInOrder() {
    return traverseInOrder(this.root, []);
  }
  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }
  dfsPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, result) {
  if (node.left) {
    traverseInOrder(node.left, result);
  }
  result.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, result);
  }
  return result;
}

function traversePreOrder(node, result) {
  result.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, result);
  }
  if (node.right) {
    traversePreOrder(node.right, result);
  }
  return result;
}

function traversePostOrder(node, result) {
  if (node.left) {
    traversePostOrder(node.left, result);
  }
  if (node.right) {
    traversePostOrder(node.right, result);
  }
  result.push(node.value);
  return result;
}
const tree = new BST();

tree.insert(25);
tree.insert(20);
tree.insert(45);
tree.insert(17);
tree.insert(48);
// tree.remove(48);
console.log(tree.lookup(48));
const bfs = tree.breadthFirstSearch();
const bfsr = tree.breadthFirstSearchRecursion([tree.root], []);
const dfsi = tree.dfsInOrder();
const dfsPre = tree.dfsPreOrder();
const dfsPost = tree.dfsPostOrder();

console.log(bfsr);
console.log(bfs);
console.log(dfsi);
console.log(dfsPre);
console.log(dfsPost);

class DoublyLL {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.length = 0;
    this.tail = this.head;
  }
  _getNewNode(value) {
    const node = {
      value: value,
      next: null,
      prev: null,
    };
    return node;
  }

  append(value) {
    const newNode = this._getNewNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = this._getNewNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  _nodeAtIndex(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  insert(index, value) {
    const currentNode = this._getNewNode(value);
    const leader = this._nodeAtIndex(index - 1);
    const follower = leader.next;
    leader.next = currentNode;
    currentNode.next = follower;
    currentNode.prev = leader;
    follower.prev = currentNode;
    this.length++;
    return this;
  }
  delete(index) {
    const leader = this._nodeAtIndex(index - 1);
    const removalNode = leader.next;
    leader.next = removalNode.next;
    this.length--;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myDLL = new DoublyLL(5);
myDLL.append(10);
myDLL.append(15);
myDLL.prepend(2);
console.log(myDLL.printList());
myDLL.insert(3, 9);
console.log(myDLL.printList());
myDLL.delete(4);
console.log(myDLL.printList());
console.log(myDLL);

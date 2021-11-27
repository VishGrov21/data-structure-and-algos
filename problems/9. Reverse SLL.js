class LinkedList {
  constructor(headVal) {
    this.head = {
      value: headVal,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  _getNewNode(value) {
    const node = {
      value: value,
      next: null,
    };
    return node;
  }
  append(value) {
    const newNode = this._getNewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = this._getNewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printListValues(node) {
    const array = [];
    let currentNode = node || this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    let currentNode = this.head;
    let newNode = this._getNewNode(value);
    const leader = this.nodeAtIndex(index - 1, currentNode);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    return this;
  }

  /**
   *  A -> B -> C
   * Leader A
   * Leader.next B
   * HoldingPointer B.next
   * @param index
   */
  remove(index) {
    const leader = this.nodeAtIndex(index - 1, this.head);
    const removalNode = leader.next;
    const holdingpointer = removalNode.next;
    leader.next = holdingpointer;
    this.length--;
    return this;
  }
  nodeAtIndex(index, node) {
    let currentIndex = 0;
    let currentNode = node;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  reverse() {
    const resultNode = { ...this.tail };
    let currentNode = this.head;
    let tempNode = {};
    while (currentNode.next !== null) {
      const newNode = this._getNewNode(currentNode.value);
      tempNode = resultNode.next;
      resultNode.next = newNode;
      newNode.next = tempNode;
      currentNode = currentNode.next;
    }
    console.log(this.printListValues(resultNode));
    return resultNode;
  }

  /**
   * For the first node, there are 3 pointers,
   * current -> head, prev -> null  & 3rd Var temp (next) -> to store value of next.
   * As we will be breaking the link for next and assigning it to prev so we need to store the
   * link in a temp variable (next).
   *
   * Finally the head should point to the last node which is prev here.
   * @returns
   */
  reverse2() {
    let currentNode = this.head;
    let prev = null;
    let next = null;
    while (currentNode !== null) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(20);
myLinkedList.insert(3, 99);
myLinkedList.insert(2, 54);
myLinkedList.insert(3, 4);
console.log(myLinkedList.printListValues());
myLinkedList.remove(4);
myLinkedList.remove(1);
console.log(myLinkedList.printListValues());
console.log(myLinkedList.reverse2());

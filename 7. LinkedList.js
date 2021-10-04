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
  printListValues() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(20);
// myLinkedList.printListValues()
console.log(myLinkedList.printListValues());

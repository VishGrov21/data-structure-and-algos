class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  _getNewNode(value) {
    return {
      value: value,
      next: null,
    };
  }
  enqueue(value) {
    const newNode = this._getNewNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
      this.length++;
      return this;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }
    const holdingPointer = this.last.value;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
  peek() {
    return this.first.value;
  }
}

const queue = new Queue();
queue.enqueue("Vishal");
queue.enqueue("ASD");
queue.enqueue("Grover");
queue.dequeue();
console.log(queue);

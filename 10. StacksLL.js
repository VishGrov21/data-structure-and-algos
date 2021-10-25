class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  _getNewNode(value) {
    return {
      value: value,
      next: null,
    };
  }
  push(value) {
    const newNode = this._getNewNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.bottom = null;
    }
    const holdingpointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingpointer;
  }
  peek() {
    return this.top.value;
  }
}

const stack = new Stack(10);
stack.push(100);
stack.push("abc");
stack.pop();
stack.pop();
console.log(stack);

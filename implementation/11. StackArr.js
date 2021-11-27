class StackArr {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
    return this.array;
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

const stack = new StackArr();
stack.push(100);
stack.push(10);
stack.push("abc");
stack.pop();
console.log(stack.peek());

class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    this.data[index];
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new MyArray();

arr.push("A");
arr.push("B");
arr.push("C");
arr.push("D");
arr.push("S");
arr.push("F");
arr.push("G");

arr.pop();

arr.deleteAtIndex(2);

console.log(arr);

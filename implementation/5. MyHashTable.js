class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data[address];
  }
  get(key) {
    const address = this._hash(key);
    const currentBlock = this.data[address];
    if (currentBlock) {
      for (let arrEle of currentBlock) {
        if (arrEle[0] === key) {
          return arrEle[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {
        keysArr.push(this.data[index][0][0]);
      }
    }
    return keysArr;
  }
}

const myHashTable = new HashTable(5);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());

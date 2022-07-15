export default class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objStr = '' + this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      objStr += ', ' + this.items[i];
    }
    return objStr;
  }
}
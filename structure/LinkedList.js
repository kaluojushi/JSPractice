export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  constructor(equalFn = (a, b) => a === b) {
    this.head = undefined;
    this.count = 0;
    this.equalFn = equalFn;
  }

  push(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const pre = this.getElementAt(index - 1);
      node.next = pre.next;
      pre.next = node;
    }
    this.count++;
    return true;
  }

  getElementAt(index) {
    if (index < 0 || index > this.count) {
      return undefined;
    }
    let node = this.head;
    for (let i = 0; i < index && node; i++) {
      node = node.next;
    }
    return node;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  indexOf(element) {
    let cur = this.head;
    for (let i = 0; i < this.count && cur; i++) {
      if (this.equalFn(element, cur.element)) {
        return i;
      }
      cur = cur.next;
    }
    return -1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
    } else {
      const pre = this.getElementAt(index - 1);
      cur = pre.next;
      pre.next = cur.next;
    }
    this.count--;
    return cur.element;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (!this.head) {
      return '';
    }
    let objStr = '' + this.head.element;
    let cur = this.head.next;
    for (let i = 1; i < this.count && cur; i++) {
      objStr += ', ' + cur.element;
      cur = cur.next;
    }
    return objStr;
  }
}
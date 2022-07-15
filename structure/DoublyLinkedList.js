import {LinkedList, Node} from "./LinkedList.js";

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor(equalFn = (a, b) => a === b) {
    super(equalFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new DoublyNode(element);
    if (index === 0) {
      if (this.head) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else {
        this.head = node;
        this.tail = node;
      }
    } else if (index === this.count) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      const pre = this.getElementAt(index - 1);
      node.next = pre.next;
      pre.next.prev = node;
      pre.next = node;
      node.prev = pre;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      cur = this.tail;
      this.tail = cur.prev;
      this.tail.next = undefined;
    } else {
      cur = this.getElementAt(index);
      const pre = cur.prev;
      pre.next = cur.next;
      cur.next.prev = pre;
    }
    this.count--;
    return cur.element;
  }

  getTail() {
    return this.tail;
  }
}
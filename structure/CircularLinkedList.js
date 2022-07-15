import {LinkedList, Node} from "./LinkedList.js";

export default class CircularLinkedList extends LinkedList {
  constructor(equalFn = (a, b) => a === b) {
    super(equalFn);
  }

  push(element) {
    this.insert(element, this.count);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(element);
    if (index === 0) {
      if (this.head) {
        node.next = this.head;
        const tail = this.getElementAt(this.count - 1);
        this.head = node;
        tail.next = this.head;
      } else {
        this.head = node;
        node.next = this.head;
      }
    } else {
      const pre = this.getElementAt(index - 1);
      node.next = pre.next;
      pre.next = node;
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
      if (this.count === 1) {
        this.head = undefined;
      } else {
        const tail = this.getElementAt(this.count - 1);
        this.head = cur.next;
        tail.next = this.head;
      }
    } else {
      const pre = this.getElementAt(index - 1);
      cur = pre.next;
      pre.next = cur.next;
    }
    this.count--;
    return cur.element;
  }
}
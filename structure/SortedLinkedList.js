import {LinkedList} from "./LinkedList.js";

export default class SortedLinkedList extends LinkedList {
  constructor(equalFn = (a, b) => a === b, compareFn = (a, b) => a === b ? 0 : (a < b ? -1 : 1)) {
    super(equalFn);
    this.compareFn = compareFn;
  }

  push(element) {
    this.insert(element);
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let cur = this.head;
    let i = 0;
    while (i < this.count && cur) {
      if (this.compareFn(element, cur.element) < 0) {
        return i;
      }
      cur = cur.next;
      i++;
    }
    return i;
  }
}
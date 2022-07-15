class PriorityQueue {
  constructor(compare = (a, b) => a[0] < b[0]) {
    this.queue = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.queue[0];
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    this._swap(0, --this.size);
    this._shiftDown(0);
    return this.queue.pop();
  }

  offer(val) {
    this.queue.push(val);
    this._shiftUp(this.size++);
  }

  _parent(index) {
    return index - 1 >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shiftDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (child + 1 < this.size && this.compare(this.queue[child + 1], this.queue[child])) {
        child = child + 1;
      }
      if (this.compare(this.queue[index], this.queue[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shiftUp(index) {
    while (this._parent(index) >= 0) {
      let parent = this._parent(index);
      if (this.compare(this.queue[parent], this.queue[index])) {
        break;
      }
      this._swap(index, parent);
      index = parent;
    }
  }

  _swap(a, b) {
    [this.queue[a], this.queue[b]] = [this.queue[b], this.queue[a]];
  }
}
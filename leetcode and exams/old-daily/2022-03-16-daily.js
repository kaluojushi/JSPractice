/**
 * @author MZJ
 * @date 2022-03-16
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  return (s2 + s2).includes(s1);
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  let nodeI = head;
  while (nodeI) {
    let nodeJ = nodeI;
    while (nodeJ.next) {
      const cur = nodeJ.next;
      if (cur.val === nodeI.val) {
        nodeJ.next = cur.next;
      } else {
        nodeJ = cur;
      }
    }
    nodeI = nodeI.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// console.log(removeDuplicateNodes(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(1))))))));
// console.log(removeDuplicateNodes(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2)))))));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  const stack = [];
  let node = head;
  while (node) {
    stack.push(node.val);
    node = node.next;
  }
  return stack[stack.length - k];
};

// console.log(kthToLast(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2));


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // return matrix;
};

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));


var AllOne = function() {
  this.list = new DoublyLinkedList();
  this.map = new Map();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  let keyNode;
  if (!this.map.has(key)) {
    if (!this.list.head) {
      this.list.insertFirst();
    } else if (this.list.head.cnt > 1) {
      this.list.insertPrev(this.list.head, 1);
    }
    keyNode = this.list.head;
    keyNode.keys.add(key);
  } else {
    const cur = this.map.get(key);
    if (!cur.next || cur.next.cnt > cur.cnt + 1) {
      this.list.insertNext(cur, cur.cnt + 1);
    }
    keyNode = cur.next;
    keyNode.keys.add(key);
    cur.keys.delete(key);
    if (cur.keys.size === 0) {
      this.list.remove(cur);
    }
  }
  this.map.set(key, keyNode);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  const cur = this.map.get(key);
  if (cur.cnt === 1) {
    this.map.delete(key);
  } else {
    if (!cur.prev || cur.prev.cnt < cur.cnt - 1) {
      this.list.insertPrev(cur, cur.cnt - 1);
    }
    cur.prev.keys.add(key);
    this.map.set(key, cur.prev);
  }
  cur.keys.delete(key);
  if (cur.keys.size === 0) {
    this.list.remove(cur);
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  if (!this.list.tail) {
    return "";
  }
  return this.list.tail.keys.keys().next().value;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  if (!this.list.head) {
    return "";
  }
  return this.list.head.keys.keys().next().value;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

class DoublyNode {
  constructor(cnt) {
    this.keys = new Set();
    this.cnt = cnt || 0;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst() {
    const node = new DoublyNode(1);
    this.head = node;
    this.tail = node;
  }

  insertNext(node, cnt) {
    const newNode = new DoublyNode(cnt);
    if (node === this.tail) {
      this.tail = newNode;
    } else {
      newNode.next = node.next;
      node.next.prev = newNode;
    }
    node.next = newNode;
    newNode.prev = node;
  }

  insertPrev(node, cnt) {
    const newNode = new DoublyNode(cnt);
    if (node === this.head) {
      this.head = newNode;
    } else {
      newNode.prev = node.prev;
      node.prev.next = newNode;
    }
    node.prev = newNode;
    newNode.next = node;
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
  }
}

let obj1 = new AllOne();
obj1.inc("hello");
obj1.inc("hello");
console.log(obj1.getMaxKey());
console.log(obj1.getMinKey());
obj1.inc("leet");
console.log(obj1.getMaxKey());
console.log(obj1.getMinKey());

let obj2 = new AllOne();
obj2.inc("hello");
obj2.inc("goodbye");
obj2.inc("hello");
obj2.inc("hello");
console.log(obj2.getMaxKey());
obj2.inc("leet");
obj2.inc("code");
obj2.inc("leet");
obj2.dec("hello");
obj2.inc("leet");
obj2.inc("code");
obj2.inc("code");
console.log(obj2.getMaxKey());
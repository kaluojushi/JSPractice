/**
 * @author MZJ
 * @date 2022-03-19
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
  let str = "";
  preOrder(root);
  return str;

  function preOrder(node) {
    if (node) {
      str += node.val;
      if (node.left || !node.left && node.right) {
        str += "(";
        preOrder(node.left);
        str += ")";
      }
      if (node.right) {
        str += "(";
        preOrder(node.right);
        str += ")";
      }
    }
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// console.log(tree2str(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))));
// console.log(tree2str(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))));


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.peek();
  return this.stackOut.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stackOut.length) {
    return this.stackOut[this.stackOut.length - 1];
  }
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  return this.stackOut[this.stackOut.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackIn.length === 0 && this.stackOut.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var AnimalShelf = function() {
  this.head = null;
  this.toString = function() {
    if (!this.head) {
      return '';
    }
    let str = `[${this.head.animal[0]}, ${this.head.animal[1]}]`;
    let node = this.head.next;
    while (node) {
      str += ", " + `[${node.animal[0]}, ${node.animal[1]}]`;
      node = node.next;
    }
    return str;
  }
};

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
  const newNode = new AnimalNode(animal);
  if (!this.head) {
    this.head = newNode;
  } else {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
  if (!this.head) {
    return [-1, -1];
  }
  const animal = this.head.animal;
  this.head = this.head.next ? this.head.next : null;
  return animal;
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
  return this.dequeueOne(1);
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
  return this.dequeueOne(0);
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */

AnimalShelf.prototype.dequeueOne = function(num) {
  if (!this.head) {
    return [-1, -1];
  }
  let node = this.head;
  if (node && node.animal[1] === num) {
    return this.dequeueAny();
  }
  while (node.next && node.next.animal[1] !== num) {
    node = node.next;
  }
  if (node.next) {
    const animal = node.next.animal;
    node.next = node.next.next;
    return animal;
  }
  return [-1, -1];
}

class AnimalNode {
  constructor(animal) {
    this.animal = animal;
    this.next = null;
  }
}

// const obj = new AnimalShelf();
// obj.enqueue([0, 0]);
// obj.enqueue([1, 0]);
// obj.enqueue([2, 1]);
// obj.enqueue([3, 1]);
// console.log(obj.toString())
// console.log(obj.dequeueCat());
// console.log(obj.dequeueDog());
// console.log(obj.dequeueAny());
// console.log(obj.toString())


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const smallHead = new ListNode(0), largeHead = new ListNode(0);
  let small = smallHead, large = largeHead;
  let node = head;
  while (node) {
    if (node.val < x) {
      small.next = node;
      small = small.next;
    } else {
      large.next = node;
      large = large.next;
    }
    node = node.next;
  }
  small.next = largeHead.next;
  large.next = null;
  return smallHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const n = s.length;
  const stack = [], mark = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        mark[i] = 1;
      } else {
        stack.pop();
      }
    }
  }
  while (stack.length) {
    mark[stack.pop()] = 1;
  }
  let ans = 0, len = 0;
  for (let i = 0; i < n; i++) {
    if (mark[i]) {
      len = 0;
    } else {
      len++;
      ans = Math.max(ans, len);
    }
  }
  return ans;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
console.log(longestValidParentheses(")()()(()))(()"))
console.log(longestValidParentheses("()(()"));
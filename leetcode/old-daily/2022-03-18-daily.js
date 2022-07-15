/**
 * @author MZJ
 * @date 2022-03-18
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let A = headA, B = headB;
  while (A !== B) {
    A = A ? A.next : headB;
    B = B ? B.next : headA;
  }
  return A;
};


/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
  this.stackSize = stackSize;
  this.data = new Array(3).fill(0).map(() => []);
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
  if (this.data[stackNum].length < this.stackSize) {
    this.data[stackNum].push(value);
  }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  return this.data[stackNum].pop();
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  return this.data[stackNum][this.data[stackNum].length - 1];
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
  return this.data[stackNum].length === 0;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */


/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.minStack.length) {
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
  } else {
    this.minStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
  this.balance = balance;
  this.cnt = balance.length;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
  if (account1 < 1 || account1 > this.cnt || account2 < 1 || account2 > this.cnt) {
    return false;
  }
  if (this.balance[account1 - 1] < money) {
    return false;
  }
  this.balance[account1 - 1] -= money;
  this.balance[account2 - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
  if (account < 1 || account > this.cnt) {
    return false;
  }
  this.balance[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
  if (account < 1 || account > this.cnt) {
    return false;
  }
  if (this.balance[account - 1] < money) {
    return false;
  }
  this.balance[account - 1] -= money;
  return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const m = nums1.length, n = nums2.length;
//   const nums = new Array(m + n);
//   let i = 0, j = 0, k = 0;
//   while (i < m && j < n) {
//     if (nums1[i] < nums2[j]) {
//       nums[k++] = nums1[i++];
//     } else {
//       nums[k++] = nums2[j++];
//     }
//   }
//   while (i < m) {
//     nums[k++] = nums1[i++];
//   }
//   while (j < n) {
//     nums[k++] = nums2[j++];
//   }
//   return (m + n) % 2 ? nums[(m + n - 1) / 2] : (nums[(m + n) / 2 - 1] + nums[(m + n) / 2]) / 2;
// };
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  return (m + n) % 2 ? nums[(m + n - 1) / 2] : (nums[(m + n) / 2 - 1] + nums[(m + n) / 2]) / 2;
};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))

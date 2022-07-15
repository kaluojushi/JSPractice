/**
 * @author MZJ
 * @date 2022-06-06
 * @description 每日刷题
 * @copyright LeetCode
 */

var MyCalendarThree = function() {
  this.tree = new Map();
  this.lazy = new Map();
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  this.update(start, end - 1, 0, 1e9, 1);
  return this.tree.get(1) || 0;
};

MyCalendarThree.prototype.update = function(start, end, l, r, idx) {
  if (start > r || end < l) {
    return;
  }
  if (start <= l && r <= end) {
    this.tree.set(idx, (this.tree.get(idx) || 0) + 1);
    this.lazy.set(idx, (this.lazy.get(idx) || 0) + 1);
  } else {
    const mid = (l + r) >> 1;
    this.update(start, end, l, mid, 2 * idx);
    this.update(start, end, mid + 1, r, 2 * idx + 1);
    this.tree.set(idx, (this.lazy.get(idx) || 0) + Math.max((this.tree.get(2 * idx) || 0), (this.tree.get(2 * idx + 1) || 0)));
  }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

// let obj = new MyCalendarThree();
// console.log(obj.book(10, 20));
// console.log(obj.book(50, 60));
// console.log(obj.book(10, 40));
// console.log(obj.book(5, 15));
// console.log(obj.book(5, 10));
// console.log(obj.book(25, 55));


/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
  this.r = radius;
  this.xc = x_center;
  this.yc = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  const u = Math.random();
  const r = Math.sqrt(u);
  const theta = Math.random() * 2 * Math.PI;
  const xr = r * Math.cos(theta), yr = r * Math.sin(theta);
  return [this.xc + this.r * xr, this.yc + this.r * yr];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

// let obj = new Solution(1, 0, 0);
// console.log(obj.randPoint());
// console.log(obj.randPoint());
// console.log(obj.randPoint());
// console.log(obj.randPoint());


/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
  let ans = 0;
  for (let k = 1; k * (k + 1) <= 2 * n; k++) {
    ans += isKConsecutive(k);
  }
  return ans;

  function isKConsecutive(k) {
    if (k % 2 === 1) {
      return n % k === 0;
    } else {
      return n % k !== 0 && 2 * n % k === 0;
    }
  }
};

// console.log(consecutiveNumbersSum(5));
// console.log(consecutiveNumbersSum(9));
// console.log(consecutiveNumbersSum(15));


/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  const map = new Map();
  for (const [x, y] of operations.reverse()) {
    map.set(x, map.get(y) || y);
  }
  return nums.map(num => map.get(num) || num);
};

// console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]]));
// console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));


var TextEditor = function() {
  this.left = [];
  this.right = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
  for (const ch of text) {
    this.left.push(ch);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  let i = 0;
  while (i < k && this.left.length) {
    this.left.pop();
    i++;
  }
  return i;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  for (let i = 0; i < k && this.left.length; i++) {
    this.right.push(this.left.pop());
  }
  return this.getText();
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  for (let i = 0; i < k && this.right.length; i++) {
    this.left.push(this.right.pop());
  }
  return this.getText();
};

TextEditor.prototype.getText = function() {
  const s = [];
  for (let i = Math.max(this.left.length - 10, 0); i < this.left.length; i++) {
    s.push(this.left[i]);
  }
  return s.join("");
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

// let obj = new TextEditor();
// obj.addText("leetcode");
// console.log(obj.deleteText(4));
// obj.addText("practice");
// console.log(obj.cursorRight(3));
// console.log(obj.cursorLeft(8));
// console.log(obj.deleteText(10));
// console.log(obj.cursorLeft(2));
// console.log(obj.cursorRight(6));


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let l = 1, r = Math.max(...piles) + 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (getEatingTime(mid) <= h) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;

  function getEatingTime(k) {
    return piles.reduce((ans, p) => ans + Math.ceil(p / k), 0);
  }
};

// console.log(minEatingSpeed([3,6,7,11], 8));
// console.log(minEatingSpeed([30,11,23,4,20], 5));
// console.log(minEatingSpeed([30,11,23,4,20], 6));


/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (x2 - x1) * (y3 - y1) !== (x3 - x1) * (y2 - y1);
};


/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects;
  this.arr = [0];
  for (const [a, b, x, y] of rects) {
    this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1));
  }
  console.log(this.arr)
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  let k = Math.floor(Math.random() * this.arr[this.arr.length - 1]);
  const rectIdx = binarySearch(this.arr, k);
  k -= this.arr[rectIdx];
  const [a, b, x, y] = this.rects[rectIdx];
  const row = Math.floor(k / (x - a + 1));
  const col = k % (x - a + 1);
  return [a + col, b + row];

  function binarySearch(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      const num = arr[mid];
      if (num <= target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l - 1;
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

let obj = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
console.log(obj.pick());
console.log(obj.pick());
console.log(obj.pick());
console.log(obj.pick());
console.log(obj.pick());
console.log(obj.pick());
console.log(obj.pick());
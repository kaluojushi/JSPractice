/**
 * @author MZJ
 * @date 2022-06-05
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  while (nums.length > 1) {
    const newNums = [];
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) {
        newNums.push(Math.min(nums[2 * i], nums[2 * i + 1]));
      } else {
        newNums.push(Math.max(nums[2 * i], nums[2 * i + 1]));
      }
    }
    nums = newNums;
  }
  return nums[0];
};

// console.log(minMaxGame([1,3,5,2,4,8,2,2]));
// console.log(minMaxGame([3]));
// console.log(minMaxGame([70,38,21,22]));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
  const n = nums.length;
  nums.sort((a, b) => b - a);
  let ans = 1, first = nums[0];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num < first - k) {
      ans++;
      first = num;
    }
  }
  return ans;
};

// console.log(partitionArray([3,6,1,2,5], 2));
// console.log(partitionArray([1,2,3], 1));
// console.log(partitionArray([2,2,4,5], 0));


/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], i);
  }
  for (const [x, y] of operations) {
    const idx = map.get(x);
    map.delete(x);
    map.set(y, idx);
  }
  for (const [num, idx] of map) {
    nums[idx] = num;
  }
  return nums;
};

// console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]]));
// console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));
// console.log(arrayChange([1,2,3,4], [[1,5],[2,6],[4,9],[6,7]]));



var TextEditor = function() {
  this.left = [];
  this.right = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
  this.text.splice(this.pos, 0, ...text);
  this.pos += text.length;
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  const cnt = Math.min(this.pos, k);
  const start = this.pos - cnt;
  this.text = [...this.text.slice(0, start), ...this.text.slice(this.pos)];
  this.pos -= cnt;
  return cnt;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  this.pos = Math.max(this.pos - k, 0);
  return this.text.slice(Math.max(this.pos - 10, 0), this.pos).join("");
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  this.pos = Math.min(this.pos + k, this.text.length);
  return this.text.slice(Math.max(this.pos - 10, 0), this.pos).join("");
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

let obj = new TextEditor();
obj.addText("leetcode and exams");
console.log(obj.deleteText(4));
obj.addText("practice");
console.log(obj.cursorRight(3));
console.log(obj.cursorLeft(8));
console.log(obj.deleteText(10));
console.log(obj.cursorLeft(2));
console.log(obj.cursorRight(6));
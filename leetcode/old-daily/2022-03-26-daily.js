/**
 * @author MZJ
 * @date 2022-03-26
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const n = nums.length;
  let i = 0, j = n - 1;
  while (i < j + 1) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else {
      i++;
    }
  }
  console.log(nums)
  return i;
};

// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// console.log(removeElement([1,1,1], 1));


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return new Array(n + 1).fill(1).fill(0, 1);
};

// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([0]))
// console.log(plusOne([9,9,9]))
// console.log(plusOne([9,0,9]))


/**
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
  this.stacks = [];
  this.cap = cap;
};

/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
  if (this.cap > 0) {
    if (this.stacks.length === 0 || this.stacks[this.stacks.length - 1].length === this.cap) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(val);
  }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
  return this.popAt(this.stacks.length - 1);
};

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
  if (index < 0 || index >= this.stacks.length || this.stacks.length === 0) {
    return -1;
  }
  const res = this.stacks[index].pop();
  if (this.stacks[index].length === 0) {
    this.stacks.splice(index, 1);
  }
  return res;
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */

// let obj1 = new StackOfPlates(1);
// obj1.push(1);
// obj1.push(2);
// console.log(obj1.popAt(1));
// console.log(obj1.pop());
// console.log(obj1.pop());
//
// let obj2 = new StackOfPlates(2);
// obj2.push(1);
// obj2.push(2);
// obj2.push(3);
// console.log(obj2.popAt(0));
// console.log(obj2.popAt(0));
// console.log(obj2.popAt(0));


/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  const singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  function toEnglish(num) {
    const ans = [];
    const hundred = Math.floor(num / 100);
    num %= 100;
    if (hundred !== 0) {
      ans.push(singles[hundred] + " Hundred ");
    }
    const ten = Math.floor(num / 10);
    if (ten >= 2) {
      ans.push(tens[ten] + " ");
      num %= 10;
    }
    if (num > 0 && num < 10) {
      ans.push(singles[num] + " ");
    } else if (num >= 10) {
      ans.push(teens[num - 10] + " ");
    }
    return ans.join("");
  }

  if (num === 0) {
    return "Zero";
  }
  const ans = [];
  for (let i = 3, unit = 1e9; i >= 0; i--, unit /= 1e3) {
    const curNum = Math.floor(num / unit);
    if (curNum !== 0) {
      num %= unit;
      ans.push(toEnglish(curNum) + thousands[i] + " ");
    }
  }
  return ans.join("").trim();
};

console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));
console.log(numberToWords(0));
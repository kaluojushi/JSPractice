/**
 * @author MZJ
 * @date 2022-03-22
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  const n = colors.length;
  let cntA = 0, cntB = 0;
  for (let i = 1; i < n - 1; i++) {
    const pre = colors[i - 1], cur = colors[i], next = colors[i + 1];
    if (cur === pre && cur === next) {
      if (cur === 'A') {
        cntA++;
      } else {
        cntB++;
      }
    }
  }
  return cntA > cntB;
};

// console.log(winnerOfGame("AAABABB"));
// console.log(winnerOfGame("AA"));
// console.log(winnerOfGame("ABBBBBBBAAA"))


/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  const MOD = 1e9 + 7;
  const memo = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    const res = ((memo[i - 3] + memo[i - 2]) % MOD + memo[i - 1]) % MOD;
    memo.push(res);
  }
  return memo[n];
};

// console.log(waysToStep(3))
// console.log(waysToStep(63))


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n;) {
    if (nums[i] === i) {
      return i;
    }
    i = Math.max(nums[i], i + 1);
  }
  return -1;
};

// console.log(findMagicIndex([0, 2, 3, 4, 5]));
// console.log(findMagicIndex([1, 1, 1]));


/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
  const n = A.length;
  move(A, B, C, n);
  console.log(A, B, C);

  function move(from, mid, to, n) {
    if (n === 1) {
      to.push(from.pop());
    } else {
      move(from, to, mid, n - 1);
      to.push(from.pop());
      move(mid, from, to, n - 1);
    }
  }
};

// hanota([2,1,0],[],[]);
// hanota([1,0],[],[]);
// hanota([0],[],[]);


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  const leftMax = new Array(n), rightMax = new Array(n);
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
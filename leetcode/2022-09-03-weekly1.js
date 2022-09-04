/**
 * @author MZJ
 * @date 2022-09-03
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  const map = new Map();
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  for (const [sum, cnt] of map) {
    if (cnt > 1) {
      return true;
    }
  }
  return false;
};

// console.log(findSubarrays([4,2,4]));
// console.log(findSubarrays([1,2,3,4,5]));
// console.log(findSubarrays([0,0,0]));


/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {

};

// const n = 20;
// for (let i = 2; i <= n - 2; i++) {
//   console.log(`${i}进制：${n} => ${n.toString(i)}`);
// }


/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
var maximumRows = function(mat, cols) {
  const m = mat.length, n = mat[0].length;
  const getOne = x => x.toString(2).split("0").join("").length;
  const nums = mat.map(row => parseInt(row.join(""), 2));
  let ans = 0;
  for (let i = 0; i < (1 << n); i++) {
    if (getOne(i) === cols) {
      const res = nums.filter(num => (i & num) === num).length;
      ans = Math.max(ans, res);
    }
  }
  return ans;
};

// console.log(maximumRows([[0,0,0],[1,0,1],[0,1,1],[0,0,1]], 2));
// console.log(maximumRows([[1],[0]], 1));


/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
  const n = chargeTimes.length;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  const m = mat.length, n = mat[0].length;
  const sum = arr => arr.reduce((s, v) => s + v);
  const rowSum = mat.map(row => sum(row));
  const colSum = mat[0].map((_, j) => sum(mat.map(row => row[j])));
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
        ans++;
      }
    }
  }
  return ans;
};

// console.log(numSpecial([[1,0,0], [0,0,1], [1,0,0]]));
// console.log(numSpecial([[1,0,0], [0,1,0], [0,0,1]]));
// console.log(numSpecial([[0,0,0,1], [1,0,0,0], [0,1,1,0], [0,0,0,0]]));
// console.log(numSpecial([[0,0,0,0,0], [1,0,0,0,0], [0,1,0,0,0], [0,0,1,0,0], [0,0,0,1,1]]));
console.log(numSpecial([[0,0,1,0],[0,0,0,0],[0,0,0,0],[0,1,0,0]]))
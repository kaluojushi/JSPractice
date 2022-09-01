/**
 * @author MZJ
 * @date 2022-06-26
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

// console.log(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]));
// console.log(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]));


/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
  const MOD = 1e9 + 7;
  // if (n === 1) {
  //   return 4;
  // }
  // const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dp[1][0] = 1;
  // dp[1][1] = 1;
  // for (let i = 2; i <= n; i++) {
  //   dp[i][0] = 1;
  //   dp[i][1] = i;
  //   for (let j = 2; j <= Math.floor((n + 1) / 2); j++) {
  //     dp[i][j] = dp[i - 2][j - 1] + dp[i - 1][j];
  //   }
  // }
  // let ans = 0;
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     ans = (ans + dp[n][i] * dp[n][j] % MOD) % MOD;
  //   }
  // }
  // return ans;
  const memo = new Array(n + 1).fill(0);
  memo[1] = 2;
  memo[2] = 3;
  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] % MOD + memo[i - 2] % MOD) % MOD;
  }
  return Number(BigInt(memo[n]) * BigInt(memo[n]) % BigInt(MOD));
};

// console.log(countHousePlacements(1000));


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
  const n = nums1.length;
  const preSum1 = new Array(n).fill(0), preSum2 = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    preSum1[i] = (preSum1[i - 1] || 0) + nums1[i];
    preSum2[i] = (preSum2[i - 1] || 0) + nums2[i];
  }
  console.log(preSum1, preSum2)
  console.log(preSum1.map((v, i) => v - preSum2[i]))
};

console.log(maximumsSplicedArray([60,60,60], [10,90,10]));
console.log(maximumsSplicedArray([20,40,20,70,30], [50,20,50,40,20]));
console.log(maximumsSplicedArray([7,11,13], [1,1,1]));
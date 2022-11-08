/**
 * @author MZJ
 * @date 2022-11-08
 * @description 美团面试
 * @copyright meituan
 */


function maxSum(arr) {
  // const n = arr.length;
  // const dp = new Array(n).fill(0);
  // dp[0] = arr[0];
  // for (let i = 1; i < n; i++) {
  //   dp[i] = arr[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
  // }
  // return Math.max(...dp);
  let cur = 0, max = 0;
  for (const x of arr) {
    if (cur <= 0) {
      cur = x;
    } else {
      cur += x;
    }
    max = Math.max(max, cur);
  }
  return max;
}

console.log(maxSum([1,-2,3,10,-4,7,2,-5]));
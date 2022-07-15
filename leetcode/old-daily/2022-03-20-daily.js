/**
 * @author MZJ
 * @date 2022-03-20
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
  const temp = ((1 << j - i + 1) - 1) << i;
  N = N & ~temp;
  return N | M << i;
};

// console.log(insertBits(1024, 19, 2, 6));
// console.log(insertBits(0, 31, 0, 4));


/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {
  let x = A ^ B, ans = 0;
  for (let i = 0; i < 32; i++) {
    ans += ((x & 1 << i)) ? 1 : 0;
  }
  return ans;
};

// console.log(convertInteger(29, 15));
// console.log(convertInteger(1, 2));
console.log(convertInteger(826966453,-729934991))
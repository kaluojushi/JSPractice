/**
 * @author MZJ
 * @date 2022-04-17
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  if (s.length <= k) {
    return s;
  }
  let tmp = "";
  for (let i = 0; i < s.length; i += k) {
    tmp += String(s.slice(i, i + k).split("").reduce((a, b) => Number(a) + Number(b)));
  }
  return digitSum(tmp, k);
};

// console.log(digitSum("11111222223", 3))
// console.log(digitSum("00000000", 3))


/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  const map = new Map();
  for (const t of tasks) {
    map.set(t, (map.get(t) || 0) + 1);
  }
  let ans = 0;
  for (const cnt of map.values()) {
    if (cnt === 1) {
      return -1;
    }
    ans += Math.floor((cnt + 2) / 3);
  }
  return ans;
};

console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]))
console.log(minimumRounds([2,3,3]))
console.log(minimumRounds([2,2,2,2]))
console.log(minimumRounds([2,2,2,2,2,2,2,2,2,2]))


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function (grid) {
  const m = grid.length, n = grid[0].length;
  let ans = 0;


  function getFactors(num) {
    let ans = [0, 0];
    while (num % 5 === 0) {
      num /= 5;
      ans[1]++;
    }
    while (num % 2 === 0) {
      num /= 2;
      ans[0]++;
    }
    return ans;
  }
};

// console.log(maxTrailingZeros([[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]))
// console.log(maxTrailingZeros([[4,3,2],[7,6,1],[8,8,8]]))
// console.log(maxTrailingZeros([[1, 5, 2, 4, 25]]))


/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  const n = parent.length;
  const next = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    const p = parent[i];
    if (p !== -1) {
      next[i].push(p);
      next[p].push(i);
    }
  }
  console.log(next);
};

// console.log(longestPath([-1,0,0,1,1,2], "abacbe"))
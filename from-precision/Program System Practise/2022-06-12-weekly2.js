/**
 * @author MZJ
 * @date 2022-06-12
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  // let ans = 0, last = 0;
  // for (const [up, pc] of brackets) {
  //   if (income > up - last) {
  //     income -= up - last;
  //     ans += (up - last) * pc / 100;
  //     last = up;
  //   } else {
  //     return ans + income * pc / 100;
  //   }
  // }
  let ans = 0, i = 0;
  for(; i < brackets.length; i++) {
    if (brackets[i][0] >= income) {
      break;
    }
  }
  i--;
  if (i < 0) {
    ans += income * brackets[0][1] / 100;
    return ans;
  }
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      ans += brackets[0][0] * brackets[0][1] / 100;
    } else {
      ans += (brackets[j][0] - brackets[j - 1][0]) * brackets[j][1] / 100;
    }
  }
  ans += (income - brackets[i][0]) * brackets[i + 1][1] / 100;
  return ans;
};

// console.log(calculateTax([[3,50],[7,10],[12,25]], 12));
// console.log(calculateTax([[1,0],[4,25],[5,50]], 2));


/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
  const m = grid.length, n = grid[0].length;
  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let minCost = Number.MAX_VALUE;
      for (let k = 0; k < n; k++) {
        let cost = grid[i][j] + grid[i + 1][k] + moveCost[grid[i][j]][k];
        minCost = Math.min(minCost, cost);
      }
      grid[i][j] = minCost;
    }
  }
  return Math.min(...grid[0]);
};

// console.log(minPathCost([[5,3],[4,0],[2,1]], [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]));
// console.log(minPathCost([[5,1,2],[4,0,3]], [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]]));


/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const n = cookies.length;
  let ans = Number.MAX_VALUE;
  for (let mask = 0; mask < k ** n; mask++) {
    let str = mask.toString(k);
    if (str.length < n) {
      str = "0".repeat(n - str.length) + str;
    }
    const div = str.split("");
    const piles = new Array(k).fill(0);
    let max = 0;
    for (let i = 0; i < n; i++) {
      piles[div[i]] += cookies[i];
      max = Math.max(max, piles[div[i]]);
    }
    ans = Math.min(ans, max);
  }
  return ans;
};

// console.log(distributeCookies([8,15,10,20,8], 2));
// console.log(distributeCookies([6,1,3,2,2,4,1,2], 3));


/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  return words.filter(word => match(word));

  function match(word) {
    const n = word.length;
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < n; i++) {
      if (!map.has(word[i]) && !set.has(pattern[i])) {
        map.set(word[i], pattern[i]);
        set.add(pattern[i]);
      } else if (map.get(word[i]) !== pattern[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));
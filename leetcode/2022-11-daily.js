/**
 * @author MZJ
 * @date 2022-11
 * @description 每日刷题
 * @copyright LeetCode
 */

/** 在这里定义一些预定义的类，如TreeNode等 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function buildTree(arr) {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }
  const root = new TreeNode(arr.shift());
  const queue = [root];
  while (arr.length) {
    const node = queue.shift();
    if (node) {
      for (const child of ["left", "right"]) {
        if (arr.length && arr[0] !== null) {
          queue.push(node[child] = new TreeNode(arr.shift()));
        } else if (arr[0] === null) {
          node[child] = null;
          arr.shift();
        }
      }
    }
  }
  return root;
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  const xMax = Math.max(...towers.map(([x, y]) => x));
  const yMax = Math.max(...towers.map(([x, y]) => y));
  let max = 0, ans = [0, 0];
  for (let i = 0; i <= xMax + radius; i++) {
    for (let j = 0; j <= yMax + radius; j++) {
      let cur = 0;
      for (const [x, y, q] of towers) {
        const d = distance([i, j], [x, y]);
        if (d <= radius) {
          cur += Math.floor(q / (1 + d));
        }
      }
      if (cur > max) {
        max = cur;
        ans = [i, j];
      }
    }
  }
  return ans;

  function distance(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
  }
};

// console.log(bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2));
// console.log(bestCoordinate([[23,11,21]], 9));
// console.log(bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2));


/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0));
  dp[0][3] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3];
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % MOD;
  }
  return dp[n][3];
};

// console.log(numTilings(3));
// console.log(numTilings(4));
// console.log(numTilings(5));


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  return words.filter(w => check(s, w)).length;

  function check(s, w) {
    const m = s.length, n = w.length;
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (s[i] === w[j]) {
        j++;
      }
      i++;
    }
    return j === n;
  }
};

// console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
// console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]));


/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  let row = [poured];
  for (let i = 1; i < query_row + 1; i++) {
    const nextRow = new Array(i + 1).fill(0);
    for (let j = 0; j < row.length; j++) {
      const v = row[j];
      if (v > 1) {
        nextRow[j] += (v - 1) / 2;
        nextRow[j + 1] += (v - 1) / 2;
      }
    }
    row = nextRow;
  }
  return Math.min(1, row[query_glass]);
};

// console.log(champagneTower(1, 1, 1));
// console.log(champagneTower(2, 1, 1));
// console.log(champagneTower(100000009, 33, 17));


/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  n = Math.floor((n + 24) / 25);
  if (n > 200) {
    return 1;
  }
  const ops = [[4, 0], [3, 1], [2, 2], [1, 3]];
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  return dfs(n, n);

  function dfs(a, b) {
    if (a <= 0 && b <= 0) {
      return 0.5;
    } else if (a <= 0) {
      return 1;
    } else if (b <= 0) {
      return 0;
    }
    if (memo[a][b] === 0) {
      memo[a][b] = 0.25 * ops.reduce((res, [u, v]) => res + dfs(a - u, b - v), 0);
    }
    return memo[a][b];
  }
};

// console.log(soupServings(50));
// console.log(soupServings(100));
// console.log(soupServings(200));


/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  const n = nums.length;
  return countLessThan(right) - countLessThan(left - 1);

  function countLessThan(lower) {
    let ans = 0, cur = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= lower) {
        cur++;
      } else {
        cur = 0;
      }
      ans += cur;
    }
    return ans;
  }
};

// console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3));
// console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8));
// console.log(numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69));


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
  return words.filter(word => check(s, word)).length;

  function check(s, word) {
    const m = s.length, n = word.length;
    let i1 = 0, j1 = 0, i2 = 0, j2 = 0;
    while (i1 < m && i2 < n) {
      while (j1 < m && s[j1] === s[i1]) {
        j1++;
      }
      while (j2 < n && word[j2] === word[i2]) {
        j2++;
      }
      const len1 = j1 - i1, len2 = j2 - i2;
      if (s[i1] !== word[i2] || len1 < len2 || (len1 > len2 && len1 < 3)) {
        return false;
      }
      i1 = j1;
      i2 = j2;
    }
    return i1 === m && i2 === n;
  }
};

// console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
// console.log(expressiveWords("zzzzzyyyyy", ["zzyy", "zy", "zyy"]));
// console.log(expressiveWords("abcd", ["abc"]));
// console.log(expressiveWords("aaa", ["aaaa"]));
// console.log(expressiveWords("aaa", ["aaaa", "a"]));
// console.log(expressiveWords("aaa", ["aaaa", "a", "aa"]));
// console.log(expressiveWords("aaa", ["aaaa", "a", "aa", "aaa"]));


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  return [...nums, ...nums].join(",").includes([...nums].sort((a, b) => a - b).join(","));
};

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));

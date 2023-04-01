/**
 * @author MZJ
 * @date 2023-03
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
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  const n = customers.length;
  let interest = 0, leftPeople = 0, maxRun = -1, maxInterest = -Infinity;
  let i = 0;
  while (i < n || leftPeople !== 0) {
    leftPeople += customers[i] || 0;
    const runPeople = Math.min(leftPeople, 4);
    leftPeople -= runPeople;
    interest += runPeople * boardingCost - runningCost;
    if (interest > 0 && interest > maxInterest) {
      maxRun = i + 1;
      maxInterest = interest;
    }
    i++;
  }
  return maxRun;
};

// console.log(minOperationsMaxProfit([8,3], 5, 6));
// console.log(minOperationsMaxProfit([10,9,6], 6, 4));
// console.log(minOperationsMaxProfit([3,4,0,5,1], 1, 92));
// console.log(minOperationsMaxProfit([10,10,6,4,7], 3, 8));


/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  const n = s.length;
  const leftA = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    leftA[i + 1] = leftA[i] + (s[i] === 'a');
  }
  let ans = Infinity;
  for (let i = 0; i <= n; i++) {
    const left = i - leftA[i];
    const right = leftA[n] - leftA[i];
    ans = Math.min(ans, left + right);
  }
  return ans;
};

// console.log(minimumDeletions("aababbab"));
// console.log(minimumDeletions("bbaaaaabb"));


/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  const n = blocks.length;
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    cnt += blocks[i] === "W";
  }
  let ans = cnt;
  for (let i = 0; i < n - k; i++) {
    cnt += (blocks[i + k] === "W") - (blocks[i] === "W");
    ans = Math.min(ans, cnt);
  }
  return ans;
};

// console.log(minimumRecolors("WBBWWBBWBW", 7));
// console.log(minimumRecolors("WBWBBBW", 2));


/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const m = rowSum.length, n = colSum.length;
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowSum[i] !== 0 && colSum[j] !== 0) {
        matrix[i][j] = Math.min(rowSum[i], colSum[j]);
        rowSum[i] -= matrix[i][j];
        colSum[j] -= matrix[i][j];
      }
    }
  }
  return matrix;
};

// console.log(restoreMatrix([3,8], [4,7]));
// console.log(restoreMatrix([5,7,10], [8,6,8]));
// console.log(restoreMatrix([14,9], [6,9,8]));
// console.log(restoreMatrix([1,0], [1]));
// console.log(restoreMatrix([0], [0]));


/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
  return check(a, b) || check(b, a);

  function check(a, b) {
    const n = a.length;
    let i = 0, j = n - 1;
    while (i < j && a[i] === b[j]) {
      i++;
      j--;
    }
    if (i >= j) {
      return true;
    }
    return isPalindrome(a, i, j) || isPalindrome(b, i, j);
  }

  function isPalindrome(a, i, j) {
    return a.slice(i, j + 1) === a.slice(i, j + 1).split("").reverse().join("");
  }
};

// console.log(checkPalindromeFormation("x", "y"));
// console.log(checkPalindromeFormation("abdef", "fecab"));
// console.log(checkPalindromeFormation("ulacfd", "jizalu"));


/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  nums.sort((a, b) => a - b);
  const n = nums.length, m = queries.length;
  const preSum = new Array(n).fill(0), ans = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i] = (preSum[i - 1] || 0) + nums[i];
  }
  for (let i = 0; i < m; i++) {
    ans[i] = binarySearch(queries[i]);
  }
  return ans;

  function binarySearch(q) {
    let l = 0, r = n;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (preSum[mid] > q) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
};

// console.log(answerQueries([4,5,2,1], [3,10,21]));
// console.log(answerQueries([2,3,4,5], [1]));


/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  const n = nums.length, m = l.length;
  const ans = new Array(m).fill(false);
  for (let i = 0; i < m; i++) {
    ans[i] = check(l[i], r[i]);
  }
  return ans;

  function check(li, ri) {
    const l = ri - li + 1;
    let a = Infinity, b = -Infinity;
    for (let j = li; j <= ri; j++) {
      a = Math.min(a, nums[j]);
      b = Math.max(b, nums[j]);
    }
    if (a === b) return true;
    if ((b - a) % (l - 1) === 0) {
      const d = (b - a) / (l - 1);
      const seen = new Array(l).fill(false);
      for (let j = li; j <= ri; j++) {
        const x = nums[j];
        if ((x - a) % d === 0) {
          const t = (x - a) / d;
          if (t >= 0 && t < l && !seen[t]) {
            seen[t] = true;
          } else {
            return false;
          }
        } else return false;
      }
    } else return false;
    return true;
  }
};

// console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]));
// console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]));
// console.log(checkArithmeticSubarrays([-3,-6,-8,-4,-2,-8,-6,0,0,0,0], [5,4,3,2,4,7,6,1,7], [6,5,6,3,7,10,7,4,10]))


/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
  if (s.indexOf('@') > -1) {
    s = s.toLowerCase();
    const [name, domain] = s.split('@');
    return name[0] + '*'.repeat(5) + name[name.length - 1] + '@' + domain;
  } else {
    s = s.replace(/\D/g, "");
    const code = s.slice(0, -10);
    return (code ? '+' + '*'.repeat(code.length) + '-' : '') + '***-***-' + s.slice(-4);
  }
};

console.log(maskPII("LeetCode@LeetCode.com"));
console.log(maskPII("AB@qq.com"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("86-(10)12345678"));

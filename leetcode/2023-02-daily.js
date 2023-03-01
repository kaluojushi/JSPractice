/**
 * @author MZJ
 * @date 2023-02
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
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const adj = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => []));
  for (const [a, b] of redEdges) {
    adj[0][a].push(b);
  }
  for (const [a, b] of blueEdges) {
    adj[1][a].push(b);
  }
  const dist = new Array(2).fill(0).map(() => new Array(n).fill(Infinity));
  // dist[i][j]表示通过颜色为i的边到达节点j的最短路径长度
  dist[0][0] = 0;
  dist[1][0] = 0;
  const queue = [[0, 0], [1, 0]];
  // queue内的[i, j]表示通过颜色为i的边到达了节点j
  while (queue.length) {  // 广度优先搜索
    const [c, x] = queue.shift();
    for (const y of adj[1 - c][x]) {  // 寻找节点x开始通过另一个颜色边到达的所有下个节点
      if (dist[1 - c][y] === Infinity) {  // 如果节点y没有被遍历过
        dist[1 - c][y] = dist[c][x] + 1;
        // 广度优先搜索第一次遍历到节点时就是最短距离
        queue.push([1 - c, y]);
      }
    }
  }
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = Math.min(dist[0][i], dist[1][i]);
    if (!isFinite(ans[i])) {
      ans[i] = -1;
    }
  }
  return ans;
};

// console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []));
// console.log(shortestAlternatingPaths(3, [[0,1]], [[2,1]]));
// console.log(shortestAlternatingPaths(3, [[1,0]], [[2,1]]));
// console.log(shortestAlternatingPaths(3, [[0,1]], [[1,2]]));
// console.log(shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]));


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  let xNode;
  const queue = [root];
  while(queue.length) {
    const node = queue.shift();
    if (node.val === x) {
      xNode = node;
      break;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  const xLeft = count(xNode.left);
  const xRight = count(xNode.right);
  const other = n - 1 - xLeft - xRight;
  return xLeft >= (n + 1) / 2 || xRight >= (n + 1) / 2 || other >= (n + 1) / 2;

  function count(root) {
    if (!root) {
      return 0;
    }
    return 1 + count(root.left) + count(root.right);
  }
};

// console.log(btreeGameWinningMove(buildTree([1,2,3,4,5,6,7,8,9,10,11]), 11, 3));
// console.log(btreeGameWinningMove(buildTree([1,2,3]), 3, 1));


/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b);
  let x = 1;
  for (const i of coins) {
    if (i > x) {
      break;
    }
    x += i;
  }
  return x;
};

// console.log(getMaximumConsecutive([1,3]));
// console.log(getMaximumConsecutive([1,1,1,4]));
// console.log(getMaximumConsecutive([1,4,10,3,1]));


/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive;
  this.tokens = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.tokens.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  for (const [tk, ex] of this.tokens) {
    if (currentTime >= ex) {
      this.tokens.delete(tk);
    }
  }
  if (this.tokens.has(tokenId)) {
    this.generate(tokenId, currentTime);
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  for (const [tk, ex] of this.tokens) {
    if (currentTime >= ex) {
      this.tokens.delete(tk);
    }
  }
  return this.tokens.size;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

// const am = new AuthenticationManager(5);
// am.renew("aaa", 1);
// am.generate("aaa", 2);
// console.log(am.countUnexpiredTokens(6));
// am.generate("bbb", 7);
// am.renew("aaa", 8);
// am.renew("bbb", 10);
// console.log(am.countUnexpiredTokens(15));


/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  amount.sort((a, b) => a - b);
  const [x, y, z] = amount;
  if (x + y <= z) {
    return z;
  }
  return (x + y + z + 1) >> 1;
};

// console.log(fillCups([1,4,2]));
// console.log(fillCups([5,4,4]));
// console.log(fillCups([5,0,0]));


/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const n = target.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(getPath(target[i - 1] || "a", target[i]));
    ans.push("!");
  }
  return ans.join("");

  function getPos(ch) {
    const c = ch.charCodeAt(0) - "a".charCodeAt(0);
    return [Math.floor(c / 5), c % 5];
  }
  function getPath(ch1, ch2) {
    if (ch1 === ch2) {
      return "";
    }
    const [x1, y1] = getPos(ch1), [x2, y2] = getPos(ch2);
    const pathX = (x1, x2) => x1 < x2 ? "D".repeat(x2 - x1) : "U".repeat(x1 - x2);
    const pathY = (y1, y2) => y1 < y2 ? "R".repeat(y2 - y1) : "L".repeat(y1 - y2);
    return ch2 !== "z" ? pathX(x1, x2) + pathY(y1, y2) : pathY(y1, y2) + pathX(x1, x2);
  }
};

// console.log(alphabetBoardPath("leet"));
// console.log(alphabetBoardPath("code"));
// console.log(alphabetBoardPath("zb"));


/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const n = s.length;
  const cnt = new Map();
  for (const ch of s) {
    cnt.set(ch, (cnt.get(ch) || 0) + 1);
  }
  if (check(cnt)) {
    return 0;
  }
  let ans = n;
  for (let i = 0, j = 0; i < n; i++) {
    while (j < n && !check(cnt)) {
      cnt.set(s[j], cnt.get(s[j]) - 1);
      j++;
    }
    if (!check(cnt)) {
      break;
    }
    ans = Math.min(ans, j - i);
    cnt.set(s[i], cnt.get(s[i]) + 1);
  }
  return ans;

  function check(cnt) {
    return Array.from(cnt).every(([ch, c]) => c <= n / 4);
  }
};

// console.log(balancedString("QWER"));
// console.log(balancedString("QQWE"));
// console.log(balancedString("QQQW"));
// console.log(balancedString("QQQQ"));


/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  const n = hours.length;
  const pre = new Array(n + 1).fill(0);
  const stack = [0]
  for (let i = 1; i <= n; i++) {
    pre[i] = (pre[i - 1] || 0) + (hours[i - 1] > 8 ? 1 : -1);
    if (pre[stack[stack.length - 1]] > pre[i]) {
      stack.push(i);
    }
  }
  let ans = 0;
  for (let r = n; r >= 1; r--) {
    while (stack.length && pre[stack[stack.length - 1]] < pre[r]) {
      ans = Math.max(ans, r - stack.pop());
    }
  }
  return ans;
};

// console.log(longestWPI([9,9,6,0,6,6,9,9,9]));
// console.log(longestWPI([6,6,9]));
// console.log(longestWPI([6,6,6]));


/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  const ans = [];
  for (let x = 1; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      if (customfunction.f(x, y) === z) {
        ans.push([x, y]);
      }
    }
  }
  return ans;
};

function CustomFunction(fn) {
  this.f = fn;
}

const cf1 = new CustomFunction((x, y) => x + y);
const cf2 = new CustomFunction((x, y) => x * y);
const cf3 = new CustomFunction((x, y) => x * x + y * y);

// console.log(findSolution(cf1, 5));
// console.log(findSolution(cf2, 5));
// console.log(findSolution(cf3, 13));


/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const ans = [start];
  for (let i = 1; i <= n; i++) {
    const m = ans.length;
    for (let j = m - 1; j >= 0; j--) {
      ans.push(((ans[j] ^ start) | (1 << i - 1)) ^ start);
    }
  }
  return ans;
};

// console.log(circularPermutation(2, 3));
// console.log(circularPermutation(3, 2));


/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  const n = nums.length;
  return Math.min(findMoves(1), findMoves(0));

  function findMoves(start) {
    let ans = 0;
    for (let i = start; i < n; i += 2) {
      let a = 0;
      if (i > 0) {
        a = Math.max(a, nums[i] - nums[i - 1] + 1);
      }
      if (i < n - 1) {
        a = Math.max(a, nums[i] - nums[i + 1] + 1);
      }
      ans += a;
    }
    return ans;
  }
};

// console.log(movesToMakeZigzag([1,2,3]));
// console.log(movesToMakeZigzag([9,6,1,6,2]));


/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  const n = grid.length;
  const ans = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let k = i; k <= i + 2; k++) {
        for (let l = j; l <= j + 2; l++) {
          ans[i][j] = Math.max(ans[i][j], grid[k][l]);
        }
      }
    }
  }
  return ans;
};

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]));
console.log(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]));

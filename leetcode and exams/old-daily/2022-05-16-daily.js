/**
 * @author MZJ
 * @date 2022-05-16
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let ans = null;
  if (p.right) {
    ans = p.right;
    while (ans.left) {
      ans = ans.left;
    }
    return ans;
  }
  let node = root;
  while (node) {
    if (node.val > p.val) {
      ans = node;
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return ans;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// const [root1, left1, right1] = [2,1,3].map(v => new TreeNode(v));
// [root1.left, root1.right] = [left1, right1];
//
// console.log(inorderSuccessor(root1, left1));
//
// const [root2, left2, right2, left21, right21, left22] = [5,3,6,2,4,1].map(v => new TreeNode(v));
// [root2.left, root2.right] = [left2, right2];
// [left2.left, left2.right] = [left21, right21];
// left21.left = left22;
//
// console.log(inorderSuccessor(root2, right2));


/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const m = target.length;
  const memo = new Array(1 << m).fill(-1);

};

// console.log(minStickers(["with","example","science"], "thehat"));
// console.log(minStickers(["notice","possible"], "basicbasic"));


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const n = words.length, C = order.length;
  const map = new Map();
  for (let i = 0; i < C; i++) {
    map.set(order[i], i);
  }
  words = words.map(word => word.split("").map(ch => String.fromCharCode(map.get(ch) + 'a'.charCodeAt(0))).join(""));
  for (let i = 0; i < n - 1; i++) {
    if (words[i] > words[i + 1]) {
      return false;
    }
  }
  return true;
};

// console.log(isAlienSorted(["hello","leetcode and exams"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  let left = 1, right = m * n;
  while (left < right) {
    const x = left + Math.floor((right - left) / 2);
    if (count(x) >= k) {
      right = x;
    } else {
      left = x + 1;
    }
  }
  return left;

  function count(x) {
    let count = Math.floor(x / n) * n;
    for (let i = Math.floor(x / n) + 1; i <= m; i++) {
      count += Math.floor(x / i);
    }
    return count;
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return nums.reduce((cnt, num) => cnt + Math.abs(num - nums[Math.floor(n / 2)]), 0);
};

// console.log(minMoves2([1,2,3]))


/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const n = intervals.length, ans = new Array(n).fill(-1);
  const starts = intervals.map((interval, idx) => [interval[0], idx]).sort((a, b) => a[0] - b[0]);
  const ends = intervals.map((interval, idx) => [interval[1], idx]).sort((a, b) => a[0] - b[0]);
  for (let i = 0, j = 0; i < n; i++) {
    while (j < n && ends[i][0] > starts[j][0]) {
      j++;
    }
    if (j < n) {
      ans[ends[i][1]] = starts[j][1];
    } else {
      ans[ends[i][1]] = -1;
    }
  }
  return ans;
};

// console.log(findRightInterval([[3,4],[2,3],[1,2]]));
// console.log(findRightInterval([[1,4],[2,3],[3,4]]));


/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) {
    return false;
  }

  const memo = new Map();
  return dfs(0, 0);

  // 判断当前玩家的稳赢/稳输态
  function dfs(usedNums, curTotal) {
    if (!memo.has(usedNums)) {
      // 如果遍历所有数都无法赢，则返回false，因此设为res的初始值
      let res = false;
      for (let i = 0; i < maxChoosableInteger; i++) {
        // 判断某数是否被用过
        if (((usedNums >> i) & 1) === 0) {
          // 如果选择当前数能直接获胜，则当前状态为稳赢
          if (curTotal + i + 1 >= desiredTotal) {
            res = true;
            break;
          }
          // 如果选择当前数后对手的状态为false（稳输），则当前状态为稳赢
          if (!dfs(usedNums | (1 << i), curTotal + i + 1)) {
            res = true;
            break;
          }
        }
      }
      // 记忆化存储
      memo.set(usedNums, res);
    }
    return memo.get(usedNums);
  }
};

// console.log(canIWin(10,11));
// console.log(canIWin(10,10));
// console.log(canIWin(10,1));


/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const n = nums.length;
  while (true) {
    const x = Math.floor(Math.random() * n), y = Math.floor(Math.random() * n);
    if (x !== y && nums[x] === nums[y]) {
      return nums[x];
    }
  }
};

// console.log(repeatedNTimes([1,2,3,3]));
// console.log(repeatedNTimes([2,1,2,5,3,2]));
// console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));


/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  for (let i = 9; i >= 0; i--) {
    const ans = String(i).repeat(3);
    if (num.includes(ans)) {
      return ans;
    }
  }
  return "";
};


/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  const kp = Math.pow(10, k);
  let x = num, ans = 0;
  while (x >= kp / 10) {
    const sub = x % kp;
    if (num % sub === 0) {
      ans++;
    }
    x = Math.floor(x / 10);
  }
  return ans;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const n = nums.length;
  let ans = 0, left = 0, right = nums.reduce((sum, x) => sum + x);
  for (let i = 0; i < n - 1; i++) {
    left += nums[i];
    right -= nums[i];
    ans += (left >= right);
  }
  return ans;
};


/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let cnt = candidates.reduce((cnt, v) => cnt + ((v >> i) & 1), 0);
    ans = Math.max(ans, cnt);
  }
  return ans;
};


/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
  const n = tiles.length;
  tiles.sort((a, b) => a[0] - b[0]);
  let l = 0, r = 0, covered = 0, ans = 0;
  while (l < n && r < n) {
    // 表示毯子左右两侧的坐标
    let leftBound = tiles[l][0], rightBound = leftBound + carpetLen - 1;
    // 如果毯子右侧落在当前右指针之后
    if (tiles[r][1] < rightBound) {
      // 更新毯子覆盖长度，并右移右指针
      covered += tiles[r][1] - tiles[r][0] + 1;
      r++;
      ans = Math.max(ans, covered);
    } else {
      // 如果毯子右侧落在当前右指针之内
      // 判断毯子是在空白区域还是瓷砖区域，在瓷砖区域需要加上多覆盖的部分长度
      if (rightBound >= tiles[r][0]) {
        ans = Math.max(ans, covered + rightBound - tiles[r][0] + 1);
      }
      // 右移左指针，此时左指针这部分毯子不再覆盖
      covered -= tiles[l][1] - tiles[l][0] + 1;
      l++;
    }
  }
  return ans;
};

console.log(maximumWhiteTiles([[1,5],[7,10]],2));
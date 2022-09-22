/**
 * @author MZJ
 * @date 2022-05-24
 * @description 每日刷题
 * @copyright LeetCode
 */

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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  return !root || (!root.left || root.val === root.left.val && isUnivalTree(root.left)) && (!root.right || root.val === root.right.val && isUnivalTree(root.right));
};


/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  const n = p.length;
  const cnt = new Array(26).fill(0);
  for (let i = 0, k = 0; i < n; i++) {
    if (i === 0 || (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1) {
      k++;
    } else {
      k = 1;
    }
    const idx = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
    cnt[idx] = Math.max(cnt[idx], k);
  }
  return cnt.reduce((a, b) => a + b);
};

// console.log(findSubstringInWraproundString("a"));
// console.log(findSubstringInWraproundString("cac"));
// console.log(findSubstringInWraproundString("zab"));
// console.log(findSubstringInWraproundString("zabcdtkyz"));


/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
  const n = positions.length, height = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let left1 = positions[i][0], right1 = positions[i][0] + positions[i][1];
    height[i] = positions[i][1];
    for (let j = 0; j < i; j++) {
      let left2 = positions[j][0], right2 = positions[j][0] + positions[j][1];
      if (right1 > left2 && right2 > left1) {
        height[i] = Math.max(height[i], height[j] + positions[i][1]);
      }
    }
  }
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    ans[i] = Math.max(height[i], ans[i - 1] || 0);
  }
  return ans;
};

// console.log(fallingSquares([[1, 2], [2, 3], [6, 1]]))
// console.log(fallingSquares([[100, 100], [200, 100]]))


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  const len = words.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(words[i])) {
      map.set(words[i], []);
    }
    map.get(words[i]).push(i);
  }

  let list1 = map.get(word1), list2 = map.get(word2);
  if (list1.length > list2.length) {
    [list1, list2] = [list2, list1];
  }
  let ans = len;
  for (const idx1 of list1) {
    let l = 0, r = list2.length;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2), idx2 = list2[mid];
      if (idx2 > idx1) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    if (l < list2.length) {
      ans = Math.min(ans, Math.abs(idx1 - list2[l]));
    }
    if (l > 0) {
      ans = Math.min(ans, Math.abs(idx1 - list2[l - 1]));
    }
  }
  return ans;
};

// console.log(findClosest(["I","am","a","student","from","a","university","in","a","city"], "a", "student"));


var WordDistance = function(words) {
  this.len = words.length;
  this.map = new Map();
  for (let i = 0; i < this.len; i++) {
    if (!this.map.has(words[i])) {
      this.map.set(words[i], []);
    }
    this.map.get(words[i]).push(i);
  }
}

WordDistance.prototype.findClosest = function(word1, word2) {
  let list1 = this.map.get(word1), list2 = this.map.get(word2);
  if (list1.length > list2.length) {
    [list1, list2] = [list2, list1];
  }
  let ans = this.len;
  for (const idx1 of list1) {
    let l = 0, r = list2.length;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2), idx2 = list2[mid];
      if (idx2 > idx1) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    if (l < list2.length) {
      ans = Math.min(ans, Math.abs(idx1 - list2[l]));
    }
    if (l > 0) {
      ans = Math.min(ans, Math.abs(idx1 - list2[l - 1]));
    }
  }
  return ans;
}

// let obj = new WordDistance(["I","am","a","student","from","a","university","in","a","city"]);
// console.log(obj.findClosest("a", "student"));
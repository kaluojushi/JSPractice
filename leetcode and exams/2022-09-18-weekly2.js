/**
 * @author MZJ
 * @date 2022-09-18
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  if (n % 2) {
    return n * 2;
  } else {
    return n;
  }
};


/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  const n = s.length;
  let ans = 1;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      count++;
    } else {
      ans = Math.max(ans, count);
      count = 1;
    }
  }
  ans = Math.max(ans, count);
  return ans;
};

// console.log(longestContinuousSubstring("abacaba"));
// console.log(longestContinuousSubstring("abcde"));
// console.log(longestContinuousSubstring("abcdefghijklmnopqrstuvwxyz"));
// console.log(longestContinuousSubstring("abcacbza"));


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  const queue = [root];
  let depth = 0;
  while (queue.length) {
    const len = queue.length;
    const level = [...queue];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (depth % 2) {
      for (let i = 0; i < len / 2; i++) {
        [level[i].val, level[len - i - 1].val] = [level[len - i - 1].val, level[i].val];
      }
    }
    depth++;
  }
  return root;
};

// console.log(reverseOddLevels(new TreeNode(2, new TreeNode(3, new TreeNode(8), new TreeNode(13)), new TreeNode(5, new TreeNode(21), new TreeNode(34)))));
// console.log(reverseOddLevels(new TreeNode(7, new TreeNode(13), new TreeNode(11))));


/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  const n = words.length;
  const ans = new Array(n).fill(0);
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    for (let j = 0; j < m; j++) {
      const prefix = word.slice(0, j + 1);
      map.set(prefix, (map.get(prefix) || 0) + 1);
    }
  }
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    let score = 0;
    for (let j = 0; j < m; j++) {
      const prefix = word.slice(0, j + 1);
      score += map.get(prefix);
    }
    ans[i] = score;
  }
  return ans;
};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
console.log(sumPrefixScores(["abcd"]));
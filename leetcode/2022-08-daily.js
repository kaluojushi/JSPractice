/**
 * @author MZJ
 * @date 2022-08
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

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const n = arr.length;
  const sortedArr = [...arr].sort((a, b) => a - b);
  const cnt = new Map();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const a = arr[i], b = sortedArr[i];
    cnt.set(a, (cnt.get(a) || 0) + 1);
    if (cnt.get(a) === 0) {
      cnt.delete(a);
    }
    cnt.set(b, (cnt.get(b) || 0) - 1);
    if (cnt.get(b) === 0) {
      cnt.delete(b);
    }
    if (cnt.size === 0) {
      ans++;
    }
  }
  return ans;
};

// console.log(maxChunksToSorted([5,4,3,2,1]));
// console.log(maxChunksToSorted([2,1,3,4,4]));


/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let max = 0;
  let score = [...s].filter(ch => ch === '1').length;
  for (let i = 0; i < s.length - 1; i++) {
    score += s[i] === '0' ? 1 : -1;
    max = Math.max(max, score);
  }
  return max;
};

// console.log(maxScore("011101"));
// console.log(maxScore("00111"));
// console.log(maxScore("1111"));


/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(" ");
  for (const [i, word] of words.entries()) {
    if (word.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

// console.log(isPrefixOfWord("i love eating burger", "burg"));
// console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
// console.log(isPrefixOfWord("i am tired", "you"));


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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  let ans = 0;
  const queue = [[root, 1]];
  const MAX = Number.MAX_SAFE_INTEGER;
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const [node, index] = queue.shift();
      level.push([node, index]);
      if (node.left) {
        queue.push([node.left, index * 2 % MAX]);
      }
      if (node.right) {
        queue.push([node.right, (index * 2 + 1) % MAX]);
      }
    }
    ans = Math.max(ans, level[len - 1][1] - level[0][1] + 1);
  }
  return ans;
};

// console.log(widthOfBinaryTree(buildTree([1,3,2,5,3,null,9])))
// console.log(widthOfBinaryTree(buildTree([1,3,2,5,null,null,9,6,null,7])))
// console.log(widthOfBinaryTree(buildTree([1,3,2,5])))
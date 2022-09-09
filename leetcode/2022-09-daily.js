/**
 * @author MZJ
 * @date 2022-09
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const trees = new Map();
  const ans = new Set();
  let idx = 0;
  function dfs(node) {
    if (!node) {
      return 0;
    }
    const tri = [node.val, dfs(node.left), dfs(node.right)];
    const s = tri.toString();
    if (trees.has(s)) {
      const pair = trees.get(s);
      ans.add(pair[0]);
      return pair[1];
    } else {
      trees.set(s, [node, ++idx]);
      return idx;
    }
  }
  dfs(root);
  return Array.from(ans);
};
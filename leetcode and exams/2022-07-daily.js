/**
 * @author MZJ
 * @date 2022-07
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  const n = distance.length;
  const d = [0, 0];
  let idx = 0;
  for (let i = start, cnt = 0; cnt < n; i = (i + 1) % n, cnt++) {
    if (i === destination) {
      idx = 1;
    }
    d[idx] += distance[i];
  }
  return Math.min(...d);
};

// console.log(distanceBetweenBusStops([1,2,3,4],0,1));
// console.log(distanceBetweenBusStops([1,2,3,4],0,2));
// console.log(distanceBetweenBusStops([1,2,3,4],0,3));


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
var maxLevelSum = function(root) {
  const queue = [root];
  let level = 1, maxSum = -Number.MAX_VALUE, ans = 1;
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (sum > maxSum) {
      ans = level;
      maxSum = sum;
    }
    level++;
  }
  return ans;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

console.log(maxLevelSum(new TreeNode(1, new TreeNode(7, new TreeNode(7), new TreeNode(-8)), new TreeNode(0))));
console.log(maxLevelSum(new TreeNode(989, null, new TreeNode(10250, new TreeNode(98693), new TreeNode(-89388, null, new TreeNode(-32127))))));
console.log(maxLevelSum(new TreeNode(-100, new TreeNode(-200, new TreeNode(-20), new TreeNode(-5)), new TreeNode(-300, new TreeNode(-10)))));
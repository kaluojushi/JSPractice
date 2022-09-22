/**
 * @author MZJ
 * @date 2022-09-14
 * @description TP模拟笔试
 * @copyright tp-link
 */

/**
 * 整型数组中递增最长子序列的长度
 */
function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}


/**
 * 中序遍历（迭代）
 */
function inorderTraversal(root) {
  const ans = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    ans.push(node.val);
    node = node.right;
  }
  return ans;
}
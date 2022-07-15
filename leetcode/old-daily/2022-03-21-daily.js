/**
 * @author MZJ
 * @date 2022-03-21
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set();
  return preOrder(root);

  function preOrder(node) {
    if (node) {
      if (set.has(k - node.val)) {
        return true;
      }
      set.add(node.val);
      return preOrder(node.left) || preOrder(node.right);
    }
    return false;
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// console.log(findTarget(new TreeNode(5,new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6), null, new TreeNode(7)), 28));
// console.log(findTarget(new TreeNode(2,new TreeNode(1), new TreeNode(3)), 4));


/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
  let cur = 0, flip = 0, ans = 0;
  for (let i = 0; i < 32; i++, num >>= 1) {
    if (num & 1) {
      cur++;
      flip++;
    } else {
      flip = cur + 1;
      cur = 0;
    }
    ans = Math.max(ans, flip);
  }
  return ans;
};

// console.log(reverseBits(7))


/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
  const a = 0b01010101010101010101010101010101;
  const b = 0b10101010101010101010101010101010;
  return (num & a) << 1 | (num & b) >> 1;
};

// console.log(exchangeBits(2))
// console.log(exchangeBits(3))


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};

console.log(firstMissingPositive([1,2,0]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))
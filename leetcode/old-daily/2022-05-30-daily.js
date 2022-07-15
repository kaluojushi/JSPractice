/**
 * @author MZJ
 * @date 2022-05-30
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let sum = 0;
  const queue = [[root, root.val]];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [cur, val] = queue.shift();
      if (cur.left) {
        queue.push([cur.left, val * 2 + cur.left.val]);
      }
      if (cur.right) {
        queue.push([cur.right, val * 2 + cur.right.val]);
      }
      if (!cur.left && !cur.right) {
        sum += val;
      }
    }
  }
  return sum;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// console.log(sumRootToLeaf(new TreeNode(1, new TreeNode(0, new TreeNode(0), new TreeNode(1)), new TreeNode(1, new TreeNode(0), new TreeNode(1)))));
// console.log(sumRootToLeaf(new TreeNode(1, new TreeNode(1))));


/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
  const ipv4 = /^((2([0-4][0-9]|5[0-5])|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(2([0-4][0-9]|5[0-5])|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4.test(queryIP) ? "IPv4" : ipv6.test(queryIP) ? "IPv6" : "Neither";
};


/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
  const n = matchsticks.length;
  const sum = matchsticks.reduce((a, b) => a + b);
  if (sum % 4 !== 0) {
    return false;
  }
  const len = sum / 4;
  const dp = new Array(1 << n).fill(-1);
  dp[0] = 0;
  for(let s = 1; s < 1 << n; s++) {
    for (let i = 0; i < n; i++) {
      if (s & (1 << i)) {
        const s1 = s & ~(1 << i);
        if (dp[s1] >= 0 && dp[s1] + matchsticks[i] <= len) {
          dp[s] = (dp[s1] + matchsticks[i]) % len;
          break;
        }
      }
    }
  }
  console.log(dp);
  return dp[(1 << n) - 1] === 0;
};

// console.log(makesquare([1,1,2,2,2]));
// console.log(makesquare([3,3,3,3,4]));


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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.right) {
      root = root.left;
    } else if (!root.left) {
      root = root.right;
    } else {
      let suc = root.right;
      while (suc && suc.left) {
        suc = suc.left;
      }
      root.val = suc.val;
      root.right = deleteNode(root.right, suc.val);
    }
  }
  return root;
};

console.log(deleteNode(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))), 5));
console.log(deleteNode(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))), 0));
console.log(deleteNode(null, 0));
console.log(deleteNode(new TreeNode(0), 0));

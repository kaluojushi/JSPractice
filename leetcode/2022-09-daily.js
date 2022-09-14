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


/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let ans = 0;
  for (const log of logs) {
    if (log === "../") {
      ans -= ans > 0 ? 1 : 0;
    } else if (log !== "./") {
      ans++;
    }
  }
  return ans;
};

// console.log(minOperations(["d1/","d2/","../","d21/","./"]));
// console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
// console.log(minOperations( ["d1/","../","../","../"]));


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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (!root) {
    return null;
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};

// console.log(trimBST(buildTree([1,0,2]), 1, 2));
// console.log(trimBST(buildTree([3,0,4,null,2,null,null,1]), 1, 3));


/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (i === nums.filter(num => num >= i).length) {
      return i;
    }
  }
  return -1;
};

// console.log(specialArray([3,5])); // 2
// console.log(specialArray([0,0])); // -1
// console.log(specialArray([0,4,3,0,4])); // 3
// console.log(specialArray([3,6,7,7,0])); // -1


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = String(num).split("");
  const n = arr.length;
  let ans = num;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ans = Math.max(ans, Number(arr.join("")));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return ans;
};

// console.log(maximumSwap(2736));
// console.log(maximumSwap(9973));


/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let i = n / 20; i < n - n / 20; i++) {
    ans += arr[i] / (n - n / 10);
  }
  return ans;
};

// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));
// console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]));
// console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]));
// console.log(trimMean([9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]));
// console.log(trimMean([4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]));



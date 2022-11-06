/**
 * @author MZJ
 * @date 2022-11
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

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function(towers, radius) {
  const xMax = Math.max(...towers.map(([x, y]) => x));
  const yMax = Math.max(...towers.map(([x, y]) => y));
  let max = 0, ans = [0, 0];
  for (let i = 0; i <= xMax + radius; i++) {
    for (let j = 0; j <= yMax + radius; j++) {
      let cur = 0;
      for (const [x, y, q] of towers) {
        const d = distance([i, j], [x, y]);
        if (d <= radius) {
          cur += Math.floor(q / (1 + d));
        }
      }
      if (cur > max) {
        max = cur;
        ans = [i, j];
      }
    }
  }
  return ans;

  function distance(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
  }
};

console.log(bestCoordinate([[1,2,5],[2,1,7],[3,1,9]], 2));
console.log(bestCoordinate([[23,11,21]], 9));
console.log(bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2));

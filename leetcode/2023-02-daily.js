/**
 * @author MZJ
 * @date 2023-02
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
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const adj = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => []));
  for (const [a, b] of redEdges) {
    adj[0][a].push(b);
  }
  for (const [a, b] of blueEdges) {
    adj[1][a].push(b);
  }
  const dist = new Array(2).fill(0).map(() => new Array(n).fill(Infinity));
  // dist[i][j]表示通过颜色为i的边到达节点j的最短路径长度
  dist[0][0] = 0;
  dist[1][0] = 0;
  const queue = [[0, 0], [1, 0]];
  // queue内的[i, j]表示通过颜色为i的边到达了节点j
  while (queue.length) {  // 广度优先搜索
    const [c, x] = queue.shift();
    for (const y of adj[1 - c][x]) {  // 寻找节点x开始通过另一个颜色边到达的所有下个节点
      if (dist[1 - c][y] === Infinity) {  // 如果节点y没有被遍历过
        dist[1 - c][y] = dist[c][x] + 1;
        // 广度优先搜索第一次遍历到节点时就是最短距离
        queue.push([1 - c, y]);
      }
    }
  }
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = Math.min(dist[0][i], dist[1][i]);
    if (!isFinite(ans[i])) {
      ans[i] = -1;
    }
  }
  return ans;
};

console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []));
console.log(shortestAlternatingPaths(3, [[0,1]], [[2,1]]));
console.log(shortestAlternatingPaths(3, [[1,0]], [[2,1]]));
console.log(shortestAlternatingPaths(3, [[0,1]], [[1,2]]));
console.log(shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]));

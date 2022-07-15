/**
 * @author MZJ
 * @date 2022-04-25
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let ans = -1;
  for (let i = 0, cnt = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      cnt++;
      if (Math.floor(Math.random() * cnt) === 0) {
        ans = i;
      }
    }
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// let solution = new Solution([1,2,3,3,3]);
// console.log(solution.pick(3))
// console.log(solution.pick(1))
// console.log(solution.pick(3))


/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const n = grid.length;
  let xy = 0, xz = 0, yz = 0;
  for (let i = 0; i < n; i++) {
    let xzMax = 0, yzMax = 0;
    for (let j = 0; j < n; j++) {
      xy += grid[i][j] === 0 ? 0 : 1;
      xzMax = Math.max(xzMax, grid[i][j]);
      yzMax = Math.max(yzMax, grid[j][i]);
    }
    xz += xzMax;
    yz += yzMax
  }
  return xy + xz + yz;
};

// console.log(projectionArea([[1,2],[3,4]]));
// console.log(projectionArea([[2]]));
// console.log(projectionArea([[1,0],[0,2]]));


/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const m = heights.length, n = heights[0].length;
  const pacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));

  function bfs(row, col, ocean) {
    if (ocean[row][col]) {
      return;
    }
    ocean[row][col] = true;
    const queue = [];
    queue.push([row, col]);
    while (queue.length) {
      const cell = queue.shift();
      for (const dir of DIRS) {
        const newRow = cell[0] + dir[0], newCol = cell[1] + dir[1];
        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
          if (heights[newRow][newCol] >= heights[cell[0]][cell[1]] && !ocean[newRow][newCol]) {
            ocean[newRow][newCol] = true;
            queue.push([newRow, newCol]);
          }
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    bfs(i, 0, pacific);
  }
  for (let j = 1; j < n; j++) {
    bfs(0, j, pacific);
  }
  for (let i = 0; i < m; i++) {
    bfs(i, n - 1, atlantic);
  }
  for (let j = 0; j < n - 1; j++) {
    bfs(m - 1, j, atlantic);
  }

  const ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};

// console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
// console.log(pacificAtlantic([[2,1],[1,2]]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  return [...nums.filter(v => v % 2 === 0), ...nums.filter(v => v % 2)];
};

// console.log(sortArrayByParity([3,1,2,4]))


/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const n = grid.length;
  const pre = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pre[i][j] = pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1] + grid[i - 1][j - 1];
    }
  }
  return dfs(0, 0, n, n);

  function dfs(r1, c1, r2, c2) {
    if (getSame(r1, c1, r2, c2) !== -1) {
      return new Node(getSame(r1, c1, r2, c2) === 1, true);
    }
    const rMid = (r1 + r2) / 2, cMid = (c1 + c2) / 2;
    return new Node(
        true,
        false,
        dfs(r1, c1, rMid, cMid),
        dfs(r1, cMid, rMid, c2),
        dfs(rMid, c1, r2, cMid),
        dfs(rMid, cMid, r2, c2)
    );
  }

  function getSame(r1, c1, r2, c2) {
    const sum = pre[r2][c2] - pre[r2][c1] - pre[r1][c2] + pre[r1][c1];
    const area = (r2 - r1) * (c2 - c1);
    if (sum === 0) {
      return 0;
    } else if (sum === area) {
      return 1;
    }
    return -1;
  }
};

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};
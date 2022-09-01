/**
 * @author MZJ
 * @date 2022-04-30
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  return words.filter(word => s.startsWith(word)).length;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
  const n = nums.length;
  const preSum = new Array(n).fill(0);
  preSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }
  let min = Number.MAX_VALUE, index = 0;
  for (let i = 0; i < n - 1; i++) {
    const val = Math.abs(Math.floor(preSum[i] / (i + 1)) - Math.floor((preSum[n - 1] - preSum[i]) / (n - i - 1)));
    if (val < min) {
      [min, index] = [val, i];
    }
  }
  const val = Math.floor(preSum[n - 1] / n);
  if (val < min) {
    [min, index] = [val, n - 1];
  }
  return index;
};

// console.log(minimumAverageDifference([2,5,3,9,5,3]));
// console.log(minimumAverageDifference([0]));
// console.log(minimumAverageDifference([4,2,0]))


/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  const grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (const [gx, gy] of guards) {
    grid[gx][gy] = -1;
  }
  for (const [wx, wy] of walls) {
    grid[wx][wy] = -2;
  }
  for (const [gx, gy] of guards) {
    let [x, y] = [gx - 1, gy];
    while (x >= 0 && grid[x][y] !== -1 && grid[x][y] !== -2) {
      grid[x][y] = 1;
      x--;
    }
    [x, y] = [gx + 1, gy];
    while (x < m && grid[x][y] !== -1 && grid[x][y] !== -2) {
      grid[x][y] = 1;
      x++;
    }
    [x, y] = [gx, gy - 1];
    while (y >= 0 && grid[x][y] !== -1 && grid[x][y] !== -2) {
      grid[x][y] = 1;
      y--;
    }
    [x, y] = [gx, gy + 1];
    while (y < n && grid[x][y] !== -1 && grid[x][y] !== -2) {
      grid[x][y] = 1;
      y++;
    }
  }
  return grid.reduce((ans, row) => ans + row.filter(v => v === 0).length, 0);
};

// console.log(countUnguarded(4,6,[[0,0],[1,1],[2,3]],[[0,1],[2,2],[1,4]]))


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function(grid) {

};
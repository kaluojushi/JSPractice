/**
 * @author MZJ
 * @date 2022-05-14
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  const str = String(num), n = str.length;
  let ans = 0;
  for (let i = 0; i <= n - k; i++) {
    const val = Number(str.slice(i, i + k));
    ans += (num % val === 0);
  }
  return ans;
};

// console.log(divisorSubstrings(240, 2));
// console.log(divisorSubstrings(430043, 2));


/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const n = nums.length;
  const preSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i] = (preSum[i - 1] || 0) + nums[i];
  }
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    ans += (preSum[i] >= preSum[n - 1] - preSum[i]);
  }
  return ans;
};

// console.log(waysToSplitArray([10,4,-8,7]))
// console.log(waysToSplitArray([2,3,1,0]))


/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
  const n = tiles.length;
  tiles.sort((a, b) => a[0] - b[0]);
  const colored = [tiles[0][0] - 1, tiles[0][1] - tiles[0][0] + 1];
  for (let i = 1; i < n; i++) {
    const pre = tiles[i - 1], cur = tiles[i];
    if (pre[1] === cur[0] - 1) {
      colored[colored.length - 1] += cur[1] - cur[0] + 1;
    } else {
      colored.push(cur[0] - pre[1] - 1);
      colored.push(cur[1] - cur[0] + 1);
    }
  }
  const m = colored.length;
  let ans = 0;
  for (let i = 1; i < m; i += 2) {
    let covered = 0, len = carpetLen;
    for (let j = i; j < m && len > 0; j++) {
      if (j % 2) {
        covered += Math.min(colored[j], len);
      }
      len -= colored[j];
    }
    ans = Math.max(ans, covered);
  }
  return ans;
};

// console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10));
// console.log(maximumWhiteTiles([[10,11],[1,1]], 2));


/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {

};


/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  const n = points.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        ans = Math.max(ans, getArea(i, j, k));
      }
    }
  }

  function getArea(i, j, k) {
    const [[x1, y1], [x2, y2], [x3, y3]] = [points[i], points[j], points[k]];
    return 0.5 * Math.abs((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1));
  }
};
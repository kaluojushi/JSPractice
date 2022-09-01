/**
 * @author MZJ
 * @date 2022-04-24
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  let set = new Set(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    set = inter([...set], nums[i]);
  }
  return Array.from(set).sort((a, b) => a - b);

  function inter(numsA, numsB) {
    const setB = new Set(numsB);
    return new Set(numsA.filter(x => setB.has(x)));
  }
};

// console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))
// console.log(intersection([[1,2,3],[4,5,6]]))


/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  let top = 0, bottom = 1e3, left = 1e3, right = 0;
  for (const [x, y, r] of circles) {
    top = Math.max(top, y + r);
    bottom = Math.min(bottom, y - r);
    left = Math.min(left, x - r);
    right = Math.max(right, x + r);
  }
  let ans = 0;
  for (let i = left; i <= right; i++) {
    for (let j = bottom; j <= top; j++) {
      for (const circle of circles) {
        if (valid(i, j, circle)) {
          ans++;
          break;
        }
      }
    }
  }
  return ans;

  function valid(x, y, circle) {
    const [x0, y0, r] = circle;
    return (x - x0) * (x - x0) + (y - y0) * (y - y0) <= r * r;
  }
};

// console.log(countLatticePoints([[2,2,1]]))
// console.log(countLatticePoints([[2,2,2],[3,4,1]]))


/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
  const n = points.length, ans = new Array(n).fill(0);
  const m = rectangles.length;
  rectangles.sort((a, b) => b[0] !== a[0] ? b[0] - a[0] : b[1] - a[1]);
  console.log(rectangles)
  for (let i = 0; i < n; i++) {
    const p = points[i];
    let l = 0, r = m - 1;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      const rec = rectangles[mid];
      if (valid(p, rec)) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    if (valid(p, rectangles[l])) {
      l++;
    }
    ans[i] = l;
  }
  return ans;

  function valid(point, rectangle) {
    const [px, py] = point, [rx, ry] = rectangle;
    return px <= rx && py <= ry;
  }
};

// console.log(countRectangles([[1,2],[2,3],[2,5]], [[2,1],[1,4]]));
// console.log(countRectangles([[1,1],[2,2],[3,3]], [[1,3],[1,1]]));
console.log(countRectangles([[7,1],[2,6],[1,4],[5,2],[10,3],[2,4],[5,9]],
    [[10,3],[8,10],[2,3],[5,4],[8,5],[7,10],[6,6],[3,6]]))
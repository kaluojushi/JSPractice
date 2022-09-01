/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  const n = nums.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      for (let j = i - k; j <= i + k; j++) {
        if (j >= 0 && j < n) {
          set.add(j);
        }
      }
    }
  }
  return Array.from(set);
};

// console.log(findKDistantIndices([3,4,9,1,3,9,5], 9, 1));
// console.log(findKDistantIndices([2,2,2,2,2], 2, 2));


/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function(n, artifacts, dig) {
  const m = artifacts.length, dn = dig.length;
  const isDug = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (const d of dig) {
    isDug[d[0]][d[1]] = true;
  }
  let cnt = 0;
  for (const a of artifacts) {
    const r1 = a[0], c1 = a[1], r2 = a[2], c2 = a[3];
    let flag = true;
    out: for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        if (!isDug[i][j]) {
          flag = false;
          break out;
        }
      }
    }
    if (flag) {
      cnt++;
    }
  }
  return cnt;
};

// console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1]]));
// console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1],[1,1]]));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  const n = nums.length;
  if (n === 1) {
    return k % 2 ? -1 : nums[0];
  }
  if (k <= n) {
    if (k === n) {
      k--;
    }
    let maxOfFront = -1, maxI = -1, secondMaxOfFront = -1;
    for (let i = 0; i < k; i++) {
      if (nums[i] > maxOfFront) {
        maxOfFront = nums[i];
        secondMaxOfFront = maxOfFront;
        maxI = i;
      } else if (nums[i] > secondMaxOfFront) {
        secondMaxOfFront = nums[i];
      }
    }
    if (maxOfFront > nums[k]) {
      return maxI < k - 1 ? maxOfFront : secondMaxOfFront;
    } else {
      return nums[k];
    }
  } else if (k > n) {
    return Math.max(...nums);
  }
};

// console.log(maximumTop([5,2,2,4,0,6], 4))
// console.log(maximumTop([5,2,2,4,0,6], 3))
// console.log(maximumTop([5,2,2,4,0,6], 6))
// console.log(maximumTop([5,2,2,4,0,6], 7))
// console.log(maximumTop([5,2,2,4,0,6], 16))
// console.log(maximumTop([5,2,2,4,0,6,7,8,9], 9))
// console.log(maximumTop([2], 1))
// console.log(maximumTop([52,78,54,87,34,7,17,75,89,34,38,99,78,91,28,83,96,89,22,70,88,11,41,54,17,90,26,33,74,40,5,78,5,14,82,34,16,77,36,36,100,71,60,98,73,38,69,59,45,100,25,72,11,31,88,41,33,29,3,92,51,80],34))

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  const n = data.length;
  let i = 0;
  while (i < n) {

  }
};

// console.log(validUtf8([197,130,1]))
// console.log(validUtf8([235,140,4]))


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length, n = grid[0].length, l = m * n;
  const arr = [];
  for (const row of grid) {
    for (const val of row) {
      arr.push(val);
    }
  }
  const newArr = new Array(l);
  for (let i = 0; i < l; i++) {
    newArr[(i + k) % l] = arr[i];
  }
  for (let i = 0; i < m; i++) {
    grid[i] = newArr.slice(i * n, (i + 1) * n);
  }
  return grid;
};

// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1));
// console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9));
// console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 23));


/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const ans = new Array(n).fill(0);
  const stack = [];
  for (const log of logs) {
    const [f, type, t] = log.split(":");
    if (type === "start") {
      if (stack.length) {
        const [f1, t1] = stack[stack.length - 1];
        ans[f1] += +t - +t1;
      }
      stack.push([f, t]);
    } else if (type === "end") {
      const t1 = stack[stack.length - 1][1];
      ans[f] += +t + 1 - +t1;
      stack.pop();
      if (stack.length) {
        stack[stack.length - 1][1] = +t + 1;
      }
    }
  }
  return ans;
};

console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]));
console.log(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]));
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]));
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"]));
console.log(exclusiveTime(1, ["0:start:0","0:end:0"]));
/**
 * @author MZJ
 * @date 2022-03-19
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    const num = nums[i];
    if (num === nums[i - 1]) {
      continue;
    }
    let j = i, k = i;
    while (nums[j] === num && j >= 0) {
      j--;
    }
    while (nums[k] === num && k < n) {
      k++;
    }
    if (j >= 0 && k < n) {
      if (nums[j] < num && nums[k] < num) {
        ans++;
      }
      if (nums[j] > num && nums[k] > num) {
        ans++;
      }
    }
  }
  return ans;
};

// console.log(countHillValley([2,4,1,1,6,5]));
// console.log(countHillValley([6,6,5,5,4,1]));


/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
  const n = directions.length;
  let ans = 0;
  const newStr = directions.replace(/RL/g, "S");
  const newN = newStr.length;
  ans += (n - newN) * 2;
  for (let i = 0; i < newN; i++) {
    if (newStr[i] === 'S') {
      let j = i - 1, k = i + 1;
      while (newStr[j] === 'R' && j >= 0) {
        j--;
      }
      while (newStr[k] === 'L' && k < n) {
        k++;
      }
      j++;
      k--;
      ans += (i - j) + (k - i);
    }
  }
  return ans;
};

// console.log(countCollisions("RLRSLL"));
// console.log(countCollisions("LLRR"));
// console.log(countCollisions("RRLL"));


/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let maxPoint = 0, maxMask = 0, maxArrows = 0;
  const bobStrategy = aliceArrows.map(i => i + 1);
  for (let mask = 0; mask < 1 << 12; mask++) {
    const arrows = getArrows(mask)
    if (arrows <= numArrows) {
      const points = getPoints(mask)
      if (points > maxPoint) {
        maxPoint = points;
        maxMask = mask;
        maxArrows = arrows;
      }
    }
  }
  const bobArrows = bobStrategy.map((b, i) => ((maxMask >> i) & 1) * b);
  bobArrows[0] += numArrows - maxArrows;
  return bobArrows;

  function getArrows(mask) {
    return bobStrategy.reduce((sum, b, i) => sum + ((mask >> i) & 1) * b, 0);
  }

  function getPoints(mask) {
    return bobStrategy.reduce((sum, b, i) => sum + ((mask >> i) & 1) * i, 0);
  }
};

// console.log(maximumBobPoints(9, [1,1,0,1,0,0,2,1,0,1,2,0]));
// console.log(maximumBobPoints(3, [0,0,1,0,0,0,0,0,0,0,0,2]));


/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
  const k = queryIndices.length;
  const arr = s.split("");
  const ans = new Array(k);
  for (let i = 0; i < k; i++) {
    arr[queryIndices[i]] = queryCharacters[i];
    ans[i] = getRepeat(arr);
  }
  return ans;

  function getRepeat(arr) {
    const n = arr.length;
    let maxLength = 0, cnt = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i] === arr[i - 1]) {
        cnt++;
      } else {
        maxLength = Math.max(maxLength, cnt);
        cnt = 1;
      }
    }
    maxLength = Math.max(maxLength, cnt);
    return maxLength;
  }
};

console.log(longestRepeating("babacc", "bcb", [1,3,3]));
console.log(longestRepeating("abyzz", "aa", [2,1]));
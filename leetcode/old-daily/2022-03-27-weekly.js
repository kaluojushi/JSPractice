/**
 * @author MZJ
 * @date 2022-03-27
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1), set2 = new Set(nums2);
  return [[...set1].filter(x => !set2.has(x)), [...set2].filter(x => !set1.has(x))];
};

// console.log(findDifference([1,2,3], [2,4,6]))
// console.log(findDifference([1,2,3,3], [1,1,2,2]))


/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
  const n = nums.length
  if (n === 1) {
    return 1;
  }
  let ans = 0, i = 0, j = 1;
  while (i < n) {
    if (j >= n) {
      ans++;
      break;
    } else if (nums[i] === nums[j]) {
      ans++;
      j++;
    } else {
      i = j + 1;
      j = i + 1;
    }
  }
  return ans;
};

// console.log(minDeletion([1,1,2,3,5]))
// console.log(minDeletion([1,1,2,2,3,3]))
// console.log(minDeletion([1]))
// console.log(minDeletion([1,1,1,1,1]))
// console.log(minDeletion([1,1,2,2,3,3,4,4]))
// console.log(minDeletion([1,1,2,2,3,3,4,5]))


/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
  const min = 10 ** Math.floor((intLength + 1) / 2 - 1)
  const max = 10 ** Math.floor((intLength + 1) / 2) - 1;
  return queries.map(k => getPalindrome(findIndex(k)));

  function findIndex(k) {
    return min + k - 1 <= max ? min + k - 1 : -1;
  }

  function getPalindrome(num) {
    if (num === -1) {
      return -1;
    }
    const a = String(num).split("");
    const b = String(num).split("").reverse();
    if (intLength % 2) {
      b.shift();
    }
    return Number(a.concat(b).join(""));
  }
};

// console.log(kthPalindrome([1,2,3,4,5,90], 3))
// console.log(kthPalindrome([2,4,6], 4))


function test(str) {
  const cnt = new Array(26).fill(0);
  for (const ch of str) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let sum = 0, i = 25;
  while (i >= 0) {
    if (cnt[i] >= 2) {
      cnt[i] -= 2;
      sum += 2 * (i + 1);
    } else if (cnt[i] === 1) {
      if (i - 1 >= 0 && cnt[i - 1] >= 1) {
        cnt[i]--;
        cnt[i - 1]--;
        sum += i + 1 + i;
      } else if (i === 25 && cnt[0] >= 1) {
        cnt[i]--;
        cnt[0]--;
        sum += i + 1 + 1;
      } else {
        i--;
      }
    } else {
      i--;
    }
  }
  return sum;
}

// console.log(test("abdbb"))
// console.log(test("aaz"))


/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  let sum = (m + n) * mean;
  for (const roll of rolls) {
    sum -= roll;
  }
  if (sum < n || sum > 6 * n) {
    return [];
  }
  const ans = new Array(n).fill(Math.floor(sum / n));
  sum %= n;
  for (let i = 0; i < n && sum; i++) {
    ans[i]++;
    sum--;
  }
  return ans;
};


/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const n = piles.length;
  const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= piles[i].length; j++) {

    }
  }
  return dp[n - 1][k];
};

console.log(maxValueOfCoins([[1,100,3],[7,8,9]], 2))
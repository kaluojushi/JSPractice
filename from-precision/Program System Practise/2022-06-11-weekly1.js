/**
 * @author MZJ
 * @date 2022-06-11
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  return password.length > 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()\-+]/.test(password) && password.split("").every((ch, i) => ch !== password[i + 1]);
};

// console.log(strongPasswordCheckerII("a1A!A!A!"))


/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const n = spells.length, m = potions.length;
  const pairs = new Array(n).fill(0);
  potions.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    const s = spells[i];
    let l = 0, r = m;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      const p = potions[mid];
      if (s * p >= success) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    pairs[i] = m - l;
  }
  return pairs;
};

// console.log(successfulPairs([5,1,3],[1,2,3,4,5],7));
// console.log(successfulPairs([3,1,2],[8,5,8],16));


/**
 * @param {string} s
 * @param {string} sub
 * @param {string[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function(s, sub, mappings) {
  const n = s.length, m = sub.length;
  const map = new Map();
  for (const [ch1, ch2] of mappings) {
    if (!map.has(ch1)) {
      map.set(ch1, new Set());
    }
    map.get(ch1).add(ch2);
  }
  for (let i = 0; i + m <= n; i++) {
    if (valid(i)) {
      return true;
    }
  }
  return false;

  function valid(i) {
    for (let j = i; j < i + m; j++) {
      const ch1 = s[j], ch2 = sub[j - i];
      if (ch1 !== ch2 && (!map.has(ch2) || !map.get(ch2).has(ch1))) {
        return false;
      }
    }
    return true;
  }
};

// console.log(matchReplacement("fool3e7bar","leet",[["e","3"],["t","7"],["t","8"]]));
// console.log(matchReplacement("fooleetbar","f00l",[["o","0"]]));
// console.log(matchReplacement("Fool33tbaR","leetd",[["e","3"],["t","7"],["t","8"],["d","b"],["p","b"]]));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const n = nums.length;
  const preSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i] = (preSum[i - 1] || 0) + nums[i];
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let l = 0, r = i;
  }
  return ans;
};

console.log(countSubarrays([2,1,4,3,5],10));
console.log(countSubarrays([1,1,1],5));
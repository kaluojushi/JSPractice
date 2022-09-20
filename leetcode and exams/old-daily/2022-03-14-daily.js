/**
 * @author MZJ
 * @date 2022-03-14
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const m = list1.length, n = list2.length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    map.set(list1[i], i);
  }
  let minIndexSum = Number.MAX_VALUE;
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (map.has(list2[i])) {
      const indexSum = map.get(list2[i]) + i;
      if (indexSum < minIndexSum) {
        ans.length = 0;
        ans.push(list2[i]);
        minIndexSum = indexSum;
      } else if (indexSum === minIndexSum) {
        ans.push(list2[i]);
      }
    }
  }
  return ans;
};

// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))
// console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))


/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let mask = 0;
  for (const a of astr) {
    const idx = a.charCodeAt(0) - 'a'.charCodeAt(0);
    if (mask & 1 << idx) {
      return false;
    }
    mask |= 1 << idx;
  }
  return true;
};

// console.log(isUnique("leetcode and exams"));
// console.log(isUnique("abc"));


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  return s1 === s2;
};

// console.log(CheckPermutation("abc", "bca"))
// console.log(CheckPermutation("abc", "bad"))


/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  const m = first.length, n = second.length;
  if (Math.abs(m - n) > 1) {
    return false;
  }
  let i = 0;
  while (i < m && i < n) {
    if (first[i] !== second[i]) {
      break;
    }
    i++;
  }
  return first.slice(i + 1) === second.slice(i + 1) || first.slice(i) === second.slice(i + 1) || first.slice(i + 1) === second.slice(i);
};

// console.log(oneEditAway("pale", "ple"))
// console.log(oneEditAway("pales", "pal"))
// console.log(oneEditAway("pal", "pale"))


/**
 * @param {string} s
 * @return {number}
 */
var minimumTime = function(s) {
  const n = s.length;
  let dp1 = Number.MAX_VALUE, dp2 = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    dp2 = Math.min(dp1, dp2) + 1;
    dp1 = Math.min(i, dp1) + 2 * Number(s[i]);
  }
  return Math.min(n, dp1, dp2);
};

console.log(minimumTime("1100101"))
console.log(minimumTime("0010"))
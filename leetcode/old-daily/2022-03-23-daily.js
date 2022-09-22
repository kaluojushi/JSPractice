/**
 * @author MZJ
 * @date 2022-03-23
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let maxPoint = 0, ans;
  for (let mask = 0; mask < 1 << 12; mask++) {
    const bobArrows = new Array(12).fill(0);
    let points = 0, arrows = 0;
    for (let i = 0; i < 12; i++) {
      if ((mask >> i) & 1) {
        points += i;
        arrows += aliceArrows[i] + 1;
        bobArrows[i] = aliceArrows[i] + 1;
      }
    }
    if (arrows <= numArrows) {
      if (points > maxPoint) {
        maxPoint = points;
        bobArrows[0] += numArrows - arrows;
        ans = bobArrows;
      }
    }
  }
  return ans;
};

// console.log(maximumBobPoints(9, [1,1,0,1,0,0,2,1,0,1,2,0]));
// console.log(maximumBobPoints(3, [0,0,1,0,0,0,0,0,0,0,0,2]));


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if (x % 10 === 0 && x !== 0) {
    return false;
  }
  let reverseNumber = 0;
  while (x > reverseNumber) {
    reverseNumber = reverseNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === reverseNumber || x === Math.floor(reverseNumber / 10);
};

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  const digits = s.split(""), n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const ch = digits[i], ch1 = digits[i + 1];
    if (ch1 && map[ch] < map[ch1]) {
      ans -= map[ch];
    } else {
      ans += map[ch];
    }
  }
  return ans;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const n = strs.length;
  let ans = strs[0];
  for (let i = 1; i < n; i++) {
    ans = getLongestCommonPrefix(ans, strs[i]);
    if (ans === "") {
      break;
    }
  }
  return ans;

  function getLongestCommonPrefix(str1, str2) {
    const len = Math.min(str1.length, str2.length);
    let i = 0;
    while (i < len && str1[i] === str2[i]) {
      i++;
    }
    return str1.substring(0, i);
  }
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let cur = 1;
  k--;
  while (k > 0) {
    const offsprings = getOffsprings(cur);
    if (offsprings <= k) {
      k -= offsprings;
      cur++;
    } else {
      k--;
      cur *= 10;
    }
  }
  return cur;

  function getOffsprings(cur) {
    let offsprings = 0;
    let first = cur, last = cur;
    while (first <= n) {
      offsprings += Math.min(last, n) - first + 1;
      first = first * 10;
      last = last * 10 + 9;
    }
    return offsprings;
  }
};

console.log(findKthNumber(13, 2));
console.log(findKthNumber(1, 1));

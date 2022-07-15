/**
 * @author MZJ
 * @date 2022-03-28
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const n = piles.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let sum = 0;
      for (let l = 0; l <= piles[i - 1].length && l <= j; l++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - l] + sum);
        sum += piles[i - 1][l];
      }
    }
  }
  return dp[n][k];
};

// console.log(maxValueOfCoins([[1,100,3],[7,8,9]], 2))
// console.log(maxValueOfCoins([[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], 7))


/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  const n = answerKey.length;
  return Math.max(slidingWindow('T'), slidingWindow('F'));

  function slidingWindow(ch) {
    let i = 0, j = 0, sum = 0, ans = 0;
    while (i < n && j < n) {
      sum += answerKey[j] !== ch ? 1 : 0;
      while (sum > k) {
        sum -= answerKey[i++] !== ch ? 1 : 0;
      }
      ans = Math.max(ans, j - i + 1);
      j++;
    }
    return ans;
  }
};

// console.log(maxConsecutiveAnswers("TTFF", 2));
// console.log(maxConsecutiveAnswers("TFFT", 1));
// console.log(maxConsecutiveAnswers("TTFTTFTT", 1));


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE, maxAns = 0;
  for (const price of prices) {
    maxAns = Math.max(maxAns, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }
  return maxAns;
};

// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([2,5,1,3]))


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const ans = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(row);
  }
  return ans;
};

// console.log(generate(5))


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    row[i] = row[i - 1] * (rowIndex - i + 1) / i;
  }
  return row;
};

// console.log(getRow(3))
// console.log(getRow(0))
// console.log(getRow(1))


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ans = [];
  for (let i = left; i <= right; i++) {
    if (isValid(i)) {
      ans.push(i);
    }
  }
  return ans;

  function isValid(num) {
    let x = num;
    while (x > 0) {
      const digit = x % 10;
      if (num % digit !== 0) {
        return false;
      }
      x = Math.floor(x / 10);
    }
    return true;
  }
};

// console.log(selfDividingNumbers(47, 85));


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const s1 = s.toLowerCase().split("").filter(ch => (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')).join("");
  const s2 = s1.split("").reverse().join("");
  return s1 === s2;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("0P"))


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};

// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'};
  const ans = [];
  getRoman(1000);
  getRoman(100);
  getRoman(10);
  getRoman(1);
  return ans.join("");

  function getRoman(mod) {
    while (num >= mod) {
      if (num >= 9 * mod) {
        ans.push(map[9 * mod]);
        num -= 9 * mod;
      } else if (num >= 5 * mod) {
        ans.push(map[5 * mod]);
        num -= 5 * mod;
      } else if (num >= 4 * mod) {
        ans.push(map[4 * mod]);
        num -= 4 * mod;
      } else {
        for (let i = 0; i < Math.floor(num / mod); i++) {
          ans.push(map[mod]);
        }
        num %= mod;
      }
    }
  }
};

// console.log(intToRoman(3))
// console.log(intToRoman(4))
// console.log(intToRoman(9))
// console.log(intToRoman(58))
// console.log(intToRoman(1994))


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  const cnt = new Map();
  for (const x of arr) {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  if ((cnt.get(0) || 0) % 2) {
    return false;
  }
  const nums = [...new Set(arr)];
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (const num of nums) {
    if ((cnt.get(2 * num) || 0) < cnt.get(num)) {
      return false;
    }
    cnt.set(2 * num , (cnt.get(2 * num) || 0) - cnt.get(num));
  }
  return true;
};

console.log(canReorderDoubled([4, -2, 2, -4]))
console.log(canReorderDoubled([2,4,6,12]))
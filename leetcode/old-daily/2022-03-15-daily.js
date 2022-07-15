/**
 * @author MZJ
 * @date 2022-03-15
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const n = nums.length;
  let maxVal = 0, cnt = 0;
  dfs(0, 0);
  return cnt;

  function dfs(pos, orVal) {
    if (pos === n) {
      if (orVal > maxVal) {
        maxVal = orVal;
        cnt = 1;
      } else if (orVal === maxVal) {
        cnt++;
      }
      return;
    }
    dfs(pos + 1, orVal | nums[pos]);  // 选择nums[pos]的情况
    dfs(pos + 1, orVal);  // 不选择nums[pos]的情况
  }
};

// console.log(countMaxOrSubsets([3,1]));
// console.log(countMaxOrSubsets([2,2,2]));
// console.log(countMaxOrSubsets([3,2,1,5]));


/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
  return S.substr(0, length).replace(/ /g, "%20");
};

// console.log(replaceSpaces("Mr John Smith    ", 13));
// console.log(replaceSpaces("               ", 5))


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const set = new Set();
  for (const ch of s) {
    if (set.has(ch)) {
      set.delete(ch);
    } else {
      set.add(ch);
    }
  }
  return set.size <= 1;
};

// console.log(canPermutePalindrome("tactcoa"));
// console.log(canPermutePalindrome("AaBb//a"));


/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  const n = S.length;
  const ans = [];
  let cnt = 1, ch = S[0];
  for (let i = 1; i <= n; i++) {
    if (S[i] && ch === S[i]) {
      cnt++;
    } else {
      ans.push(ch);
      ans.push(cnt);
      ch = S[i];
      cnt = 1;
    }
  }
  const res = ans.join("");
  return res.length >= n ? S : res;
};

// console.log(compressString("aabcccccaaa"));
// console.log(compressString("abbccd"));
// console.log(compressString("aabcccccaa"))


/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function(statements) {
  const n = statements.length;
  let maxGood = 0;
  for (let mask = 0; mask < 1 << n; mask++) {
    const good = (x => {
      let c = 0;
      while (x > 0) {
        c += x & 1;
        x >>= 1;
      }
      return c;
    })(mask);
    let flag = (() => {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i === j || statements[i][j] === 2) {
            continue;
          }
          if (statements[i][j] === 0) {
            if (mask & 1 << i && mask & 1 << j) {
              return  false;
            }
          } else if (statements[i][j] === 1) {
            if (mask & 1 << i && !(mask & 1 << j)) {
              return  false;
            }
          }
        }
      }
      return true;
    })();
    if (flag) {
      maxGood = Math.max(maxGood, good);
    }
  }
  return maxGood;
};

console.log(maximumGood([[2,1,2],[1,2,2],[2,0,2]]));
console.log(maximumGood([[2,0],[0,2]]));
/**
 * @author MZJ
 * @date 2022-08
 * @description 每日刷题
 * @copyright LeetCode
 */

/** 在这里定义一些预定义的类，如TreeNode等 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const n = arr.length;
  const sortedArr = [...arr].sort((a, b) => a - b);
  const cnt = new Map();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const a = arr[i], b = sortedArr[i];
    cnt.set(a, (cnt.get(a) || 0) + 1);
    if (cnt.get(a) === 0) {
      cnt.delete(a);
    }
    cnt.set(b, (cnt.get(b) || 0) - 1);
    if (cnt.get(b) === 0) {
      cnt.delete(b);
    }
    if (cnt.size === 0) {
      ans++;
    }
  }
  return ans;
};

// console.log(maxChunksToSorted([5,4,3,2,1]));
// console.log(maxChunksToSorted([2,1,3,4,4]));


/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let max = 0;
  let score = [...s].filter(ch => ch === '1').length;
  for (let i = 0; i < s.length - 1; i++) {
    score += s[i] === '0' ? 1 : -1;
    max = Math.max(max, score);
  }
  return max;
};

// console.log(maxScore("011101"));
// console.log(maxScore("00111"));
// console.log(maxScore("1111"));


/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(" ");
  for (const [i, word] of words.entries()) {
    if (word.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));
console.log(isPrefixOfWord("this problem is an easy problem", "pro"));
console.log(isPrefixOfWord("i am tired", "you"));
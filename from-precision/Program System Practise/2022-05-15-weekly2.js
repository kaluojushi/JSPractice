/**
 * @author MZJ
 * @date 2022-05-15
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
  const ans = [];
  for (const word of words) {
    const peek = ans[ans.length - 1];
    if (!peek || !isAnagram(peek, word)) {
      ans.push(word);
    }
  }
  return ans;

  function isAnagram(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
  }
};

// console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));
// console.log(removeAnagrams(["a","b","c","d","e"]));


/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
  const n = special.length;
  special.sort((a, b) => a - b);
  let ans = special[0] - bottom;
  for (let i = 1; i < n; i++) {
    const interval = special[i] - special[i - 1] - 1;
    ans = Math.max(ans, interval);
  }
  ans = Math.max(ans, top - special[n - 1]);
  return ans;
};

// console.log(maxConsecutive(2,9,[4,6]));
// console.log(maxConsecutive(6,8,[7,6,8]));


/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  let ans = 0;
  while (candidates.length) {
    const n = candidates.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += candidates[i] & 1;
      candidates[i] >>= 1;
    }
    candidates = candidates.filter(v => v !== 0);
    ans = Math.max(ans, cnt);
  }
  return ans;
};

// console.log(largestCombination([16,17,71,62,12,24,14]));
// console.log(largestCombination([8,8]));



var CountIntervals = function() {

};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {

};

/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {

};

/**
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */

let obj = new CountIntervals();
obj.add(2,3);
obj.add(7,10);
console.log(obj.count());
obj.add(5,8);
console.log(obj.count());
/**
 * @author MZJ
 * @date 2022-05-28
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const cnt = new Array(10).fill(0);
  for (const x of num) {
    cnt[x.charCodeAt(0) - '0'.charCodeAt(0)]++;
  }
  for (let i = 0; i < num.length; i++) {
    if (cnt[i] !== Number(num[i])) {
      return false;
    }
  }
  return true;
};

// console.log(digitCount("1210"));
// console.log(digitCount("030"));


/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  const n = messages.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const m = messages[i], s = senders[i];
    map.set(s, (map.get(s) || 0) + m.split(" ").length);
  }
  let maxS = "", maxCnt = 0;
  for (const [s, cnt] of map) {
    if (cnt > maxCnt || cnt === maxCnt && s > maxS) {
      [maxS, maxCnt] = [s, cnt];
    }
  }
  return maxS;
};

// console.log(largestWordCount(["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], ["Alice","userTwo","userThree","Alice"]));
// console.log(largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"], ["Bob","Charlie"]));


/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  const d = new Array(n).fill(0);
  for (const [a, b] of roads) {
    d[a]++;
    d[b]++;
  }
  d.sort((a, b) => b - a);
  return d.reduce((ans, v, i) => ans + v * (n - i), 0);
};

// console.log(maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]));
// console.log(maximumImportance(5, [[0,3],[2,4],[1,3]]));


/**
 * @param {number} n
 * @param {number} m
 */
var BookMyShow = function(n, m) {
  this.n = n;
  this.m = m;
  this.rows = new Array(n).fill(m);
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function(k, maxRow) {
  for (let i = 0; i <= maxRow; i++) {
    if (this.rows[i] >= k) {
      const ans = [i, this.m - this.rows[i]];
      this.rows[i] -= k;
      return ans;
    }
  }
  return [];
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function(k, maxRow) {
  let sum = 0;
  for (let i = 0; i <= maxRow; i++) {
    sum += this.rows[i];
  }
  if (sum < k) {
    return false;
  }

};

/**
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */

let obj = new BookMyShow(2, 5);
console.log(obj.gather(4, 0));
console.log(obj.gather(2, 0));
console.log(obj.scatter(5, 1));
console.log(obj.scatter(5, 1));
/**
 * @author MZJ
 * @date 2022-04-16
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let ans = 1e6;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    }
    if (Math.abs(num) < Math.abs(ans) || Math.abs(num) === Math.abs(ans) && num > ans) {
      ans = num;
    }
  }
  return ans;
};

// console.log(findClosestNumber([-4,-2,1,4,8]))
// console.log(findClosestNumber([2,-1,1]))


/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
  let ans = 0;
  for (let i = 0; i <= Math.floor(total / cost1); i++) {
    ans += Math.floor((total - i * cost1) / cost2) + 1;
  }
  return ans;
};

// console.log(waysToBuyPensPencils(20, 10, 5))
// console.log(waysToBuyPensPencils(5, 10, 10))
// console.log(waysToBuyPensPencils(30, 7, 4))


var ATM = function() {
  this.money = [20, 50, 100, 200, 500];
  this.notes = [0, 0, 0, 0, 0];
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
  this.notes.forEach((v, i) => this.notes[i] += banknotesCount[i]);
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
  let ans = [0, 0, 0, 0, 0];
  for (let i = 4; i >= 0; i--) {
    ans[i] = Math.min(this.notes[i], Math.floor(amount / this.money[i]));
    amount -= ans[i] * this.money[i];
  }
  if (amount > 0) {
    return [-1];
  }
  this.notes.forEach((v, i) => this.notes[i] -= ans[i]);
  return ans;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */


// let obj = new ATM();
// obj.deposit([0,0,1,2,1]);
// console.log(obj.withdraw(600));
// obj.deposit([0,1,0,1,1]);
// console.log(obj.withdraw(600));
// console.log(obj.withdraw(550));


/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
  const n = scores.length;
  const next = new Array(n).fill(0).map(() => []);
  for (const [a, b] of edges) {
    next[a].push(b);
    next[b].push(a);
  }
  let ans = -1;
  next.forEach(v => v.sort((a, b) => scores[b] - scores[a]))
  for (const [a, b] of edges) {
    for (let i = 0; i < 3 && i < next[a].length; i++) {
      for (let j = 0; j < 3 && j < next[b].length; j++) {
        const ai = next[a][i], bj = next[b][j];
        if (ai !== b && bj !== a && ai !== bj) {
          ans = Math.max(ans, scores[ai] + scores[a] + scores[b] + scores[bj]);
        }
      }
    }
  }
  return ans;
};

// console.log(maximumScore([5,2,9,8,4], [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]))
// console.log(maximumScore([9,20,6,4,11,12], [[0,3],[5,3],[2,4],[1,3]]))


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().split(/[^a-z]+/);
  const map = new Map();
  const set = new Set(banned);
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  let ans = "", cnt = 0;
  for (const [word, c] of map) {
    if (c > cnt && word !== "" && !set.has(word)) {
      ans = word;
      cnt = c;
    }
  }
  return ans;
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
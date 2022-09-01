/**
 * @author MZJ
 * @date 2022-05-22
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  const cnt = new Array(26).fill(0);
  for (const ch of s) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  return Math.floor(cnt[letter.charCodeAt(0) - 'a'.charCodeAt(0)] / s.length * 100);
};

// console.log(percentageLetter("foobar", "o"));
// console.log(percentageLetter("jjjj", "k"));


/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  const n = capacity.length, remain = new Array(n).fill(0);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    remain[i] = capacity[i] - rocks[i];
    if (remain[i] === 0) {
      cnt++;
    }
  }
  remain.sort((a, b) => a - b);
  for (let i = 0; i < n && additionalRocks > 0; i++) {
    if (remain[i] === 0) {
      continue;
    }
    const rocks = Math.min(remain[i], additionalRocks);
    remain[i] -= rocks;
    additionalRocks -= rocks;
    if (remain[i] === 0) {
      cnt++;
    }
  }
  return cnt;
};

// console.log(maximumBags([2,3,4,5],[1,2,4,4],2));
// console.log(maximumBags([10,2,2],[2,2,0],100));


/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  const n = stockPrices.length;
  if (n === 1) {
    return 0;
  }
  stockPrices.sort((a, b) => a[0] - b[0]);
  let lines = 1;
  for (let i = 2; i < n; i++) {
    const [x1, y1] = stockPrices[i - 2], [x2, y2] = stockPrices[i - 1], [x3, y3] = stockPrices[i];
    const [a1, b1] = [x2 - x1, y2 - y1], [a2, b2] = [x3 - x2, y3 - y2];
    if (BigInt(a1) * BigInt(b2) !== BigInt(a2) * BigInt(b1)) {
      lines++;
    }
  }
  return lines;
};

console.log(minimumLines([[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]));
console.log(minimumLines([[3,4],[1,2],[7,8],[2,3]]));
console.log(minimumLines([[1,3],[2,3],[3,3]]));
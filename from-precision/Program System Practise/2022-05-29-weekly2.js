/**
 * @author MZJ
 * @date 2022-05-29
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const cnt = new Array(26).fill(0);
  for (const ch of s) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  const cntTarget = new Array(26).fill(0);
  for (const ch of target) {
    cntTarget[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let ans = 0;
  while (true) {
    for (let i = 0; i < 26; i++) {
      if (cnt[i] < cntTarget[i]) {
        return ans;
      }
      cnt[i] -= cntTarget[i];
    }
    ans++;
  }
};

// console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
// console.log(rearrangeCharacters("abcba", "abc"));
// console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));


/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 1 && words[i][0] === "$" && Number(words[i].slice(1)) >= 0) {
      words[i] = "$" + (Number(words[i].slice(1)) * (1 - discount / 100)).toFixed(2);
    }
  }
  return words.join(" ");
};

// console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
// console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", 100));
// console.log(discountPrices("$76111 ab $6 $", 48));


/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
  const n = nums.length;
  const deque = [], dp = new Array(n).fill(0);
  let max = 0;
  for (let i = n - 1; i >= 0; deque.push(i--)) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      max = Math.max(max, dp[i] = Math.max(dp[i] + 1, dp[deque.pop()]));
    }
  }
  return max;
};

// console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11]));
// console.log(totalSteps([4,5,7,7,13]));


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  const m = grid.length, n = grid[0].length;
  const visited = new Set();
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  visited.add("0,0");
  let ans = 1e6;
  dfs(0, 0, visited, 0);
  return ans;

  function dfs(i, j, visited, nums) {
    if (i === m - 1 && j === n - 1) {
      ans = Math.min(ans, nums);
    }
    for (const dir of DIRS) {
      const newI = i + dir[0], newJ = j + dir[1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n) {
        const point = newI + "," + newJ;
        if (!visited.has(point)) {
          visited.add(point);
          dfs(newI, newJ, visited, nums + grid[newI][newJ]);
          visited.delete(point);
        }
      }
    }
  }
};

// console.log(minimumObstacles([[0,1,1],[1,1,0],[1,1,0]]));
// console.log(minimumObstacles([[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]));


/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
  if (queryIP.split(".").length === 4) {
    return queryIP.split(".").every(v => Number(v) >= 0 && Number(v) <= 255 && v === String(Number(v))) ? "IPv4" : "Neither";
  }
  if (queryIP.split(":").length === 8) {
    return queryIP.split(":").every(v => v.length >= 1 && v.length <= 4 && v.split("").every(ch => /[0-9a-fA-F]/.test(ch))) ? "IPv6" : "Neither";
  }
  return "Neither";
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("192.168.1.0"));
console.log(validIPAddress("192.168.01.1"));
console.log(validIPAddress("192.168.1.00"));
console.log(validIPAddress("192.168@1.1"));
console.log(validIPAddress("256.256.256.256"));
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3::8A2E:037j:7334"));
console.log(validIPAddress("2001:0db8:85a3:0000:8A2E:037j:7334:0000"));
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"));
/**
 * @author MZJ
 * @date 2022-09-20
 * @description 小米笔试
 * @copyright xiaomi
 */

function readline() {
  // return "aaabbbbccc"
  return "0 1 3 5 6 8 12 17";
}
const s = readline();
function xiaomi1(s) {
  const map = new Map();
  for (const ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  let ans = 0, maxOdd = 0;
  for (const [_, cnt] of map) {
    if (cnt % 2) {
      maxOdd = Math.max(maxOdd, cnt);
    } else {
      ans += cnt;
    }
  }
  return ans + maxOdd;
}
// console.log(xiaomi1(s));


const stones = readline().split(" ").map(Number);
function xiaomi2(stones) {
  const n = stones.length;
  const dp = new Array(n).fill(0).map(() => new Set());
  dp[0].add(1);
  for (let i = 0; i < n; i++) {
    for (const k of dp[i]) {
      if (stones.includes(stones[i] + k)) {
        const index = stones.indexOf(stones[i] + k);
        if (k - 1 > 0) {
          dp[index].add(k - 1);
        }
        dp[index].add(k);
        dp[index].add(k + 1);
      }
    }
  }
  return dp[n - 1].size > 0;
}

console.log(xiaomi2(stones))
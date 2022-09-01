/**
 * @author MZJ
 * @date 2022-06-25
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let ans = 0, inVert = false;
  for (const ch of s) {
    if (ch === '*' && !inVert) {
      ans++;
    } else if (ch === '|') {
      inVert = !inVert;
    }
  }
  return ans;
};

// console.log(countAsterisks("l|*e*et|c**o|*de|"));
// console.log(countAsterisks("iamprogrammer"));
// console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  edges = edges.map(([a, b]) => [Math.min(a, b), Math.max(a, b)]).sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  const group = new Array(n).fill(0).map(() => new Set());
  const start = new Array(n).fill(0).map((v, i) => i);
  for (const [a, b] of edges) {
    group[a].add(b);
    const x = Math.min(start[a], start[b]);
    const setA = [...group[a]];
    start[a] = x;
    setA.forEach(v => start[v] = x);
    group[a].clear();
    group[x].add(a);
    for (const t of setA) {
      group[x].add(t);
    }
  }
  let ans = n * (n - 1) / 2;
  for (const set of group) {
    const z = set.size;
    ans -= z * (z - 1) / 2;
  }
  return ans;
};

// console.log(countPairs(3, [[0,1],[0,2],[1,2]]));
// console.log(countPairs(7, [[0,2],[0,5],[2,4],[1,6],[5,4]]));
// console.log(countPairs(16, [[0,15],[1,14],[2,11],[4,3],[5,15],[8,2],[14,12]]));
// console.log(countPairs(11, [[5,0],[1,0],[10,7],[9,8],[7,2],[1,3],[0,2],[8,5],[4,6],[4,2]]))
// console.log(countPairs(85, [[65,0],[1,45],[57,2],[3,0],[46,4],[46,5],[46,6],[7,45],[1,9],[10,8],[50,11],[12,3],[8,13],[14,2],[6,15],[46,16],[17,12],[18,9],[19,8],[20,19],[50,21],[22,0],[3,23],[24,16],[15,25],[3,26],[27,3],[11,28],[29,25],[30,9],[20,31],[32,9],[33,9],[34,25],[11,35],[36,13],[37,4],[10,38],[45,39],[40,14],[26,41],[42,16],[43,24],[4,44],[31,47],[48,14],[49,40],[49,51],[52,31],[36,53],[54,35],[48,55],[56,33],[47,58],[59,54],[60,38],[12,61],[62,9],[57,63],[64,3],[35,66],[50,67],[33,68],[46,69],[70,21],[35,71],[12,72],[26,73],[50,74],[75,27],[26,76],[77,64],[33,78],[51,79],[80,68],[48,81],[82,75],[54,83],[63,84]]))


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
  const cntOne = new Array(32).fill(0);
  for (const num of nums) {
    const str = num.toString(2), len = str.length;
    for (let i = 0; i < len; i++) {
      if (str[len - i - 1] === '1') {
        cntOne[i]++;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if (cntOne[i] > 0) {
      ans += 1 << i;
    }
  }
  return ans;
};

console.log(maximumXOR([3,2,4,6]));
console.log(maximumXOR([1,2,3,9,2]));
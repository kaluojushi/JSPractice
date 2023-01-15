/**
 * @author MZJ
 * @date 2022-12
 * @description 每日刷题
 * @copyright LeetCode
 */

/** 在这里定义一些预定义的类，如TreeNode等 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function buildTree(arr) {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }
  const root = new TreeNode(arr.shift());
  const queue = [root];
  while (arr.length) {
    const node = queue.shift();
    if (node) {
      for (const child of ["left", "right"]) {
        if (arr.length && arr[0] !== null) {
          queue.push(node[child] = new TreeNode(arr.shift()));
        } else if (arr[0] === null) {
          node[child] = null;
          arr.shift();
        }
      }
    }
  }
  return root;
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  return new Set(word.split(/[^0-9]+/).filter(s => s.length).map(numberFormat)).size;

  function numberFormat(s) {
    let i = 0;
    while (s[i] === "0") {
      i++;
    }
    if (i === s.length) {
      return "0";
    }
    return s.slice(i);
  }
};

// console.log(numDifferentIntegers("a123bc34d8ef34"));
// console.log(numDifferentIntegers("leet1234code234"));
// console.log(numDifferentIntegers("a1b01c001"));
// console.log(numDifferentIntegers("2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410"))


/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  return n.toString(3).split("").every(x => x === "0" || x === "1");
};

// console.log(checkPowersOfThree(12));
// console.log(checkPowersOfThree(91));
// console.log(checkPowersOfThree(21));


/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const x = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const y = Number(coordinates[1]);
  return (x + y) % 2 === 1;
};

// console.log(squareIsWhite("a1"));
// console.log(squareIsWhite("h3"));
// console.log(squareIsWhite("c7"));


/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let ans = 0;
  for (let i = 1; i < n; i++) {
    const tmp = Math.max(nums[i], nums[i - 1] + 1);
    ans += tmp - nums[i];
    nums[i] = tmp;
  }
  return ans;
};

// console.log(minOperations([1,1,4,2,3]));
// console.log(minOperations([5,1,3]));
// console.log(minOperations([1,1,1]));


/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const cnt = new Array(26).fill(0);
    let max = 0;
    for (let j = i; j < n; j++) {
      cnt[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
      max = Math.max(max, cnt[s.charCodeAt(j) - 'a'.charCodeAt(0)]);
      const min = Math.min(...cnt.filter(x => x > 0));
      ans += max - min;
    }
  }
  return ans;
};

// console.log(beautySum("aabcb"));
// console.log(beautySum("aabcbaa"));
// console.log(beautySum("aabcb"));


/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
  groups = groups.map(group => group.map(x => `*${x}*`).join(','));
  nums = nums.map(x => `*${x}*`).join(',')
  for (const group of groups) {
    if (nums.indexOf(group) > -1) {
      nums = nums.slice(nums.indexOf(group) + group.length);
    } else {
      return false;
    }
  }
  return true;
};

// console.log(canChoose([[1,-1,-1],[3,-2,0]], [1,-1,0,1,-1,-1,3,-2,0]));
// console.log(canChoose([[10,-2],[1,2,3,4]], [1,2,3,4,10,-2]));
// console.log(canChoose([[1,2,3],[3,4]], [7,7,1,2,3,4,7,7]));
// console.log(canChoose([[2,1]], [12,1]));


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const d = new Array(n).fill(0).map(() => []);
  for (const [a, b] of edges) {
    d[a].push(b);
    d[b].push(a);
  }
  const visited = new Set();
  return dfs(source);

  function dfs(start) {
    if (start === destination) {
      return true;
    }
    visited.add(start);
    for (const next of d[start]) {
      if (!visited.has(next) && dfs(next)) {
        return true;
      }
    }
    return false;
  }
};

// console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));


/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let l = 1, r = Math.max(...nums) + 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    const cnt = nums.reduce((res, num) => res + Math.floor((num - 1) / mid), 0);
    if (cnt > maxOperations) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};

// console.log(minimumSize([9], 2));
// console.log(minimumSize([2,4,8,2], 4));
// console.log(minimumSize([7,17], 2));


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  return Math.min(sum - max, Math.floor(sum / 2));
};

// console.log(maximumScore(2,4,6));
// console.log(maximumScore(4,4,6));
// console.log(maximumScore(1,8,8));
// console.log(maximumScore(8,6,7));


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
  const m = word1.length, n = word2.length
  const ans = [];
  let i = 0, j = 0;
  while (i < m || j < n) {
    if (word1.slice(i) > word2.slice(j)) {
      ans.push(word1[i++]);
    } else {
      ans.push(word2[j++]);
    }
  }
  return ans.join("");
};

// console.log(largestMerge("cabaa", "bcaaa"));
// console.log(largestMerge("abcabc", "abdcaba"));


/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
  const n = s.length, MOD = 1e9 + 7;
  let prev = s[0];
  let x = 0;
  let ans = 0;
  for (const ch of s) {
    if (ch === prev) {
      x++;
    } else {
      ans = (ans + x * (x + 1) / 2) % MOD;
      x = 1;
      prev = ch;
    }
  }
  ans = (ans + x * (x + 1) / 2) % MOD;
  return ans;
};

console.log(countHomogenous("abbcccaa"));
console.log(countHomogenous("xy"));
console.log(countHomogenous("zzzzz"));

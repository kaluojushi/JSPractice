/**
 * @author MZJ
 * @date 2023-01
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
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  let l = 1, r = maxSum;
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2);
    const sum = getSum(n, index, mid)
    if (sum <= maxSum) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;

  function getSum(n, index, val) {
    return val + getSubSum(val - 1 || 1, index) + getSubSum(val - 1 || 1, n - index - 1);
  }

  function getSubSum(val, cnt) {
    if (cnt === 0 || cnt === 1) {
      return [0, val][cnt];
    }
    if (cnt > val) {
      return val * (val + 1) / 2 + cnt - val;
    } else {
      return cnt * (2 * val - cnt + 1) / 2;
    }
  }
};

// console.log(maxValue(4, 2, 6));
// console.log(maxValue(6, 1, 10));


/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map(knowledge);
  return s.replace(/\((.*?)\)/g, (_, key) => map.get(key) ?? "?");
};

// console.log(evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]]));
// console.log(evaluate("hi(name)", [["a","b"]]));
// console.log(evaluate("(a)(a)(a)aaa", [["a","yes"]]));
// console.log(evaluate("(a)(b)", [["a","b"],["b","a"]]));


/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  const arr1 = sentence1.split(" ");
  const arr2 = sentence2.split(" ");
  const m = arr1.length, n = arr2.length;
  if (m < n) {
    return areSentencesSimilar(sentence2, sentence1);
  }
  if (m === n) {
    return sentence1 === sentence2;
  }
  for (let i = 0; i <= n; i++) {
    const start = arr2.slice(0, i), end = arr2.slice(i);
    if (arr1.slice(0, i).join(" ") === start.join(" ") && arr1.slice(-end.length || m).join(" ") === end.join(" ")) {
      return true;
    }
  }
  return false;
};

// console.log(areSentencesSimilar("My name is Haley", "My Haley"));
// console.log(areSentencesSimilar("of", "A lot of words"));
// console.log(areSentencesSimilar("Eating right now", "Eating"));
// console.log(areSentencesSimilar("Luky", "Lucccky"));


/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
  const n = obstacles.length - 1;
  const dp = new Array(3).fill(Infinity);
  [dp[0], dp[1], dp[2]] = [1, 0, 1];
  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] === j + 1) {
        dp[j] = Infinity;
      } else {
        min = Math.min(min, dp[j]);
      }
    }
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] !== j + 1) {
        dp[j] = Math.min(dp[j], min + 1);
      }
    }
  }
  return Math.min(...dp);
};

// console.log(minSideJumps([0,1,2,3,0]));
// console.log(minSideJumps([0,1,1,3,3,0]));
// console.log(minSideJumps([0,2,1,0,3,0]));


/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  const n = nums.length;
  const oddSum = new Array(n).fill(0), evenSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      oddSum[i] = (oddSum[i - 1] || 0) + nums[i];
      evenSum[i] = evenSum[i - 1] || 0;
    } else {
      evenSum[i] = (evenSum[i - 1] || 0) + nums[i];
      oddSum[i] = oddSum[i - 1] || 0;
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const os = (oddSum[i - 1] || 0) + evenSum[n - 1] - evenSum[i];
    const es = (evenSum[i - 1] || 0) + oddSum[n - 1] - oddSum[i];
    if (os === es) {
      ans++;
    }
  }
  return ans;
};

// console.log(waysToMakeFair([2,1,6,4]));
// console.log(waysToMakeFair([1,1,1]));
// console.log(waysToMakeFair([1,2,3]));
// console.log(waysToMakeFair([1,2,2,2,1,2,1]));

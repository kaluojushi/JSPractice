/**
 * @author MZJ
 * @date 2022-09
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const trees = new Map();
  const ans = new Set();
  let idx = 0;
  function dfs(node) {
    if (!node) {
      return 0;
    }
    const tri = [node.val, dfs(node.left), dfs(node.right)];
    const s = tri.toString();
    if (trees.has(s)) {
      const pair = trees.get(s);
      ans.add(pair[0]);
      return pair[1];
    } else {
      trees.set(s, [node, ++idx]);
      return idx;
    }
  }
  dfs(root);
  return Array.from(ans);
};


/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let ans = 0;
  for (const log of logs) {
    if (log === "../") {
      ans -= ans > 0 ? 1 : 0;
    } else if (log !== "./") {
      ans++;
    }
  }
  return ans;
};

// console.log(minOperations(["d1/","d2/","../","d21/","./"]));
// console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
// console.log(minOperations( ["d1/","../","../","../"]));


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (!root) {
    return null;
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};

// console.log(trimBST(buildTree([1,0,2]), 1, 2));
// console.log(trimBST(buildTree([3,0,4,null,2,null,null,1]), 1, 3));


/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (i === nums.filter(num => num >= i).length) {
      return i;
    }
  }
  return -1;
};

// console.log(specialArray([3,5])); // 2
// console.log(specialArray([0,0])); // -1
// console.log(specialArray([0,4,3,0,4])); // 3
// console.log(specialArray([3,6,7,7,0])); // -1


/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = String(num).split("");
  const n = arr.length;
  let ans = num;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ans = Math.max(ans, Number(arr.join("")));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return ans;
};

// console.log(maximumSwap(2736));
// console.log(maximumSwap(9973));


/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let i = n / 20; i < n - n / 20; i++) {
    ans += arr[i] / (n - n / 10);
  }
  return ans;
};

// console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));
// console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]));
// console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]));
// console.log(trimMean([9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]));
// console.log(trimMean([4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]));


/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
if (presses === 0) {
    return 1;
  }
  if (n === 1) {
    return 2;
  }
  if (n === 2) {
    return presses === 1 ? 3 : 4;
  }
  return presses === 1 ? 4 : presses === 2 ? 7 : 8;
};


/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const n = s.length;
  const firstPos = new Array(26).fill(-1);
  let ans = -1;
  for (let i = 0; i < n; i++) {
    const c = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (firstPos[c] === -1) {
      firstPos[c] = i;
    } else {
      ans = Math.max(ans, i - firstPos[c] - 1);
    }
  }
  return ans;
};

// console.log(maxLengthBetweenEqualCharacters("aa"));
// console.log(maxLengthBetweenEqualCharacters("abca"));
// console.log(maxLengthBetweenEqualCharacters("cbzxy"));
// console.log(maxLengthBetweenEqualCharacters("cabbac"));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const cnt = new Map();
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1);
  }
  nums.sort((a, b) => cnt.get(a) - cnt.get(b) || b - a);
  return nums;
};

// console.log(frequencySort([1,1,2,2,2,3]));
// console.log(frequencySort([2,3,1,3,2]));
// console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  if (sum % k !== 0) {
    return false;
  }
  const avg = sum / k;
  const dp = new Array(1 << n).fill(-1);
  dp[0] = 0;
  for (let s = 0; s < (1 << n); s++) {
    for (let i = 0; i < n; i++) {
      if (s & (1 << i)) {
        const s1 = s & ~(1 << i);
        if (dp[s1] >= 0 && dp[s1] + nums[i] <= avg) {
          dp[s] = (dp[s1] + nums[i]) % avg;
          break;
        }
      }
    }
  }
  return dp[(1 << n) - 1] === 0;
};

// console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4));
// console.log(canPartitionKSubsets([1,2,3,4], 3));
// console.log(canPartitionKSubsets([2,2,2,2,3,4,5], 4));
// console.log(canPartitionKSubsets([1,2,3,4,5,6,7], 4));


var MyLinkedList = function() {
  this.size = 0;
  this.head = new ListNode();
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let cur = this.head;
  for (let i = 0; i < index + 1; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return;
  }
  if (index < 0) {
    index = 0;
  }
  this.size++;
  let prev = this.head;
  for (let i = 0; i < index; i++) {
    prev = prev.next;
  }
  const toAdd = new ListNode(val);
  toAdd.next = prev.next;
  prev.next = toAdd;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  this.size--;
  let prev = this.head;
  for (let i = 0; i < index; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}


/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const n = arr.length, m = pieces.length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    map.set(pieces[i][0], i);
  }
  let i = 0;
  while (i < n) {
    if (!map.has(arr[i])) {
      return false;
    }
    const idx = map.get(arr[i]);
    for (let j = 0; j < pieces[idx].length; i++, j++) {
      if (arr[i] !== pieces[idx][j]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(canFormArray([15,88], [[15],[88]]));
// console.log(canFormArray([49,18,16], [[16,18,49]]));
// console.log(canFormArray([91,4,64,78], [[78],[4,64],[91]]));


/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (isGood(i)) {
      ans++;
    }
  }
  return ans;

  function isGood(x) {
    let ans = false;
    while (x) {
      const d = x % 10;
      if (d === 3 || d === 4 || d === 7) {
        return false;
      }
      if (d === 2 || d === 5 || d === 6 || d === 9) {
        ans = true;
      }
      x = Math.floor(x / 10);
    }
    return ans;
  }
};

// console.log(rotatedDigits(10));
// console.log(rotatedDigits(857));
// console.log(rotatedDigits(10000));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
  const n = nums.length + 2;
  const sum = n * (n + 1) / 2;
  const sum2 = n * (n + 1) * (2 * n + 1) / 6;
  let s1 = 0, s2 = 0;
  for (let i = 0; i < n - 2; i++) {
    s1 += nums[i];
    s2 += nums[i] * nums[i];
  }
  const A = sum - s1, B = sum2 - s2;
  const tmp = Math.sqrt(2 * B - A * A);
  return [(A + tmp) / 2, (A - tmp) / 2];
};

// console.log(missingTwo([1,2,4]));
// console.log(missingTwo([2,3]));
// console.log(missingTwo([1,3]));


/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
  const dp = new Array(k);
  dp[0] = 1;
  let p3 = 0, p5 = 0, p7 = 0;
  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7);
    if (dp[i] === dp[p3] * 3) {
      p3++;
    }
    if (dp[i] === dp[p5] * 5) {
      p5++;
    }
    if (dp[i] === dp[p7] * 7) {
      p7++;
    }
  }
  return dp[k - 1];
};

console.log(getKthMagicNumber(5));
console.log(getKthMagicNumber(3));
console.log(getKthMagicNumber(1));
console.log(getKthMagicNumber(7));
console.log(getKthMagicNumber(10));
console.log(getKthMagicNumber(100));
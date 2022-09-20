/**
 * @author MZJ
 * @date 2022-04-18
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const ans = [];
  let cur = 1;
  for (let i = 0; i < n; i++) {
    ans.push(cur);
    if (cur * 10 <= n) {
      cur *= 10;
    } else {
      while (cur % 10 === 9 || cur + 1 > n) {
        cur = Math.floor(cur / 10);
      }
      cur++;
    }
  }
  return ans;
};

// console.log(lexicalOrder(13))


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let cur = 1;
  k--;
  while (k > 0) {
    const steps = getSteps(cur);
    if (steps <= k) {
      k -= steps;
      cur++;
    } else {
      k--;
      cur *= 10;
    }
  }
  return cur;

  function getSteps(cur) {
    let first = cur * 10, last = cur * 10 + 9, sum = 0;
    while (first <= n) {
      sum += Math.min(n, last) - first + 1;
      first = first * 10;
      last = last * 10 + 9;
    }
    return sum + 1;
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))


/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return (n + n ** 2) >> 1;
};

// console.log(sumNums(9));

var quickMulti = function(A, B) {
  let ans = 0;
  for (; B; B >>= 1) {
    if (B & 1) {
      ans += A;
    }
    A <<= 1;
  }
  return ans;
}

// console.log(quickMulti(7, 8));
// console.log(quickMulti(21, 5));


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let head = null, tail = null;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    tail.next = new ListNode(carry);
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function List(arr) {
  const list = new ListNode(0);
  let node = list;
  for (const a of arr) {
    node.next = new ListNode(a);
    node = node.next;
  }
  return list.next;
}

// console.log(addTwoNumbers(List([2,4]), List([5,6])));


/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  const words = title.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
};

// console.log(capitalizeTitle("capiTalIze tHe titLe"))
// console.log(capitalizeTitle("First leTTeR of EACH Word"))
// console.log(capitalizeTitle("i lOve leetcode and exams"))


/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const n = s.length;
  const ans = new Array(n).fill(1e5);
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      ans[i] = 0;
    } else if (i > 0) {
      ans[i] = ans[i - 1] + 1;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== c && i < n - 1) {
      ans[i] = Math.min(ans[i], ans[i + 1] + 1);
    }
  }
  return ans;
};

// console.log(shortestToChar("loveleetcode", "e"))
// console.log(shortestToChar("aaab", "b"))


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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    if (!root.left && !root.right) {
      root = null;
      return root;
    }
    if (!root.left) {
      root = root.right;
      return root;
    } else if (!root.right) {
      root = root.left;
      return root;
    }
    const aux = minNode(root.right);
    root.val = aux.val;
    root.right = deleteNode(root.right, aux.val);
    return root;
  }

  function minNode(root) {
    let cur = root;
    while (cur && cur.left) {
      cur = cur.left;
    }
    return cur;
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const dirs = input.split("\n"), n = dirs.length;
  const level = new Array(n + 1).fill(0);
  let ans = 0;
  for (const dir of dirs) {
    const depth = getDepth(dir), length = getLength(dir) + (depth > 1 ? level[depth - 1] + 1 : 0);
    if (isFile(dir)) {
      ans = Math.max(ans, length);
    } else {
      level[depth] = length;
    }
  }
  return ans;

  function isFile(str) {
    return str.includes(".");
  }

  function getDepth(str) {
    return str.split("").reduce((sum, ch) => sum + (ch === "\t"), 1);
  }

  function getLength(str) {
    return str.length - getDepth(str) + 1;
  }
};

// console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"))
// console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"))
// console.log(lengthLongestPath("a"))
// console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"))


/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (!vowel.has(words[i][0])) {
      words[i] = words[i].slice(1) + words[i][0];
    }
    words[i] += "ma" + "a".repeat(i + 1);
  }
  return words.join(" ");
};

// console.log(toGoatLatin("I speak Goat Latin"))
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
  const n = nums.length;
  const sum = nums.reduce((sum, num) => sum + num, 0);
  let F = nums.reduce((F, num, i) => F + i * num, 0);
  let ans = F;
  for (let i = 1; i < n; i++) {
    F += sum - n * nums[n - i];
    ans = Math.max(ans, F);
  }
  return ans;
};

// console.log(maxRotateFunction([4,3,2,6]))
// console.log(maxRotateFunction([100]))


/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  for (const word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }
  return "";
};


/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
  const n = plants.length;
  let A = capacityA, B = capacityB;
  let ans = 0;
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    const pi = plants[i], pj = plants[j];
    if (A < pi) {
      A = capacityA;
      ans++;
    }
    A -= pi;
    if (B < pj) {
      B = capacityB;
      ans++;
    }
    B -= pj;
  }
  if (n % 2 && Math.max(A, B) < plants[Math.floor(n / 2)]) {
    ans++;
  }
  return ans;
};

// console.log(minimumRefill([2,2,3,3],5,5))
// console.log(minimumRefill([2,2,3,3],3,4))
// console.log(minimumRefill([5],10,8))


/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  const ans = [];
  let i = 0;
  for (const j of spaces) {
    ans.push(s.slice(i, j));
    ans.push(" ");
    i = j;
  }
  ans.push(s.slice(i));
  return ans.join("");
};

// console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]))
// console.log(addSpaces("icodeinpython", [1,5,7,9]))
// console.log(addSpaces("spacing", [0,1,2,3,4,5,6]))


/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
  const n = prices.length;
  let dp = 1, ans = 1;
  for (let i = 1; i < n; i++) {
    if (prices[i - 1] - prices[i] === 1) {
      dp++;
    } else {
      dp = 1;
    }
    ans += dp;
  }
  return ans;
};

// console.log(getDescentPeriods([3,2,1,4]))
// console.log(getDescentPeriods([8,6,7,7]))
// console.log(getDescentPeriods([1]))


var Twitter = function() {
  this.userFollow = new Map();
  this.tweets = [];
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets.push([userId, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const news = [];
  let cnt = 0;
  for (let i = this.tweets.length - 1; i >= 0 && cnt < 10; i--) {
    const [user, tweet] = this.tweets[i];
    if (user === userId || (this.userFollow.has(userId) && this.userFollow.get(userId).has(user))) {
      news.push(tweet);
      cnt++;
    }
  }
  return news;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (!this.userFollow.has(followerId)) {
    this.userFollow.set(followerId, new Set());
  }
  this.userFollow.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.userFollow.has(followerId)) {
    this.userFollow.get(followerId).delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// let twitter = new Twitter();
// twitter.postTweet(1, 5);
// console.log(twitter.getNewsFeed(1));
// twitter.follow(1, 2);
// twitter.postTweet(2, 6);
// console.log(twitter.getNewsFeed(1));
// twitter.unfollow(1, 2);
// console.log(twitter.getNewsFeed(1));


/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
  this.DIR = ["East", "North", "West", "South"];
  this.idx = 0;
  this.moved = false;
  this.positions = [];
  this.directions = [];
  for (let i = 0; i < width; i++) {
    this.positions.push([i, 0]);
    this.directions.push(0);
  }
  for (let i = 1; i < height; i++) {
    this.positions.push([width - 1, i]);
    this.directions.push(1);
  }
  for (let i = width - 2; i >= 0; i--) {
    this.positions.push([i, height - 1]);
    this.directions.push(2);
  }
  for (let i = height - 2; i > 0; i--) {
    this.positions.push([0, i]);
    this.directions.push(3);
  }
  this.directions[0] = 3;
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
  this.idx = (this.idx + num) % this.positions.length;
  this.moved = true;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
  return this.positions[this.idx];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
  if (!this.moved) {
    return "East";
  }
  return this.DIR[this.directions[this.idx]];
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */

// let robot = new Robot(6, 3);
// robot.step(2);
// robot.step(2);
// console.log(robot.getPos());
// console.log(robot.getDir());
// robot.step(2);
// robot.step(1);
// robot.step(4);
// console.log(robot.getPos());
// console.log(robot.getDir());


/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
  const n = trees.length;

  // 小于4棵树的情况下，所有的树都组成凸包
  if (n < 4) {
    return trees;
  }

  // 对树排序：按x坐标从小到大、y坐标从小到大排序
  trees.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

  const stack = [0, 1];
  // 求解下凸包
  for (let i = 2; i < n; i++) {
    // 如果栈顶两个点和待加入的点形成顺时针，栈顶的点弹出
    while (stack.length >= 2 && cross(trees[stack[stack.length - 2]], trees[stack[stack.length - 1]], trees[i]) < 0) {
      stack.pop();
    }
    stack.push(i);
  }
  // 求解上凸包
  for (let i = n - 2; i >= 0; i--) {
    // 如果栈顶两个点和待加入的点形成顺时针，栈顶的点弹出
    while (stack.length >= 2 && cross(trees[stack[stack.length - 2]], trees[stack[stack.length - 1]], trees[i]) < 0) {
      stack.pop();
    }
    stack.push(i);
  }

  // 处理stack，得到答案
  const indices = Array.from(new Set(stack));
  const ans = [];
  for (const index of indices) {
    ans.push(trees[index]);
  }
  return ans;

  // 计算叉积的z坐标
  function cross(p, q, r) {
    return (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]);
  }
};

// console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))
// console.log(outerTrees([[1,2],[2,2],[4,2],[5,2]]))
// console.log(outerTrees([[0,0],[0,100],[100,100],[100,0]]))


/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  return Math.max(...n.toString(2).split("").map((v, i) => v === '1' ? i : -1).filter(i => i !== -1).map((v, i, arr) => (arr[i + 1] ? arr[i + 1] : v) - v));
};

// console.log(binaryGap(22))
// console.log(binaryGap(8))
// console.log(binaryGap(5))



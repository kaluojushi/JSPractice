/**
 * @author MZJ
 * @date 2022-06-13
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const m = Math.max(...heights);
  const cnt = new Array(m + 1).fill(0);
  for (const h of heights) {
    cnt[h]++;
  }
  let idx = 0, ans = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= cnt[i]; j++) {
      if (heights[idx] !== i) {
        ans++;
      }
      idx++;
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let dp0 = 0, dp1 = 0;
  for (const ch of s) {
    dp1 = Math.min(dp0, dp1);
    dp0 += ch === '1';
    dp1 += ch === '0';
  }
  return Math.min(dp0, dp1);
};

// console.log(minFlipsMonoIncr("00110"));
// console.log(minFlipsMonoIncr("010110"));
// console.log(minFlipsMonoIncr("00011000"));


/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length, n = mat[0].length;
  const ans = [];
  for (let k = 0; k < m + n - 1; k++) {
    if (k % 2 === 0) {
      let i = k < m ? k : m - 1;
      let j = k < m ? 0 : k - m + 1;
      while (i >= 0 && j < n) {
        ans.push(mat[i--][j++]);
      }
    } else {
      let i = k < n ? 0 : k - n + 1;
      let j = k < n ? k : n - 1;
      while (i < m && j >= 0) {
        ans.push(mat[i++][j--]);
      }
    }
  }
  return ans;
};

// console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(findDiagonalOrder([[1,2],[3,4]]));
// console.log(findDiagonalOrder([[2,3]]));
// console.log(findDiagonalOrder([[1]]));


/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  const n = password.length;
  if (n < 8) {
    return false;
  }
  let mask = 0;
  for (let i = 0; i < n; i++) {
    if (password[i] === password[i + 1]) {
      return false;
    }
    switch (true) {
      case password[i] >= 'a' && password[i] <= 'z': mask |= 1; break;
      case password[i] >= 'A' && password[i] <= 'Z': mask |= 2; break;
      case password[i] >= '0' && password[i] <= '9': mask |= 4; break;
      default: mask |= 8;
    }
  }
  return mask === 15;
};

// console.log(strongPasswordCheckerII("ecuwcfoyajkolntovfniplayrxhzpmhrkhzonopcwxgupzhoupw"));


/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let ans = 0, pre = 0;
  for (const [up, pc] of brackets) {
    ans += (Math.min(income, up) - pre) * pc;
    if (income <= up) {
      break;
    }
    pre = up;
  }
  return ans / 100;
};


/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
  const m = grid.length, n = grid[0].length;
  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let minCost = Number.MAX_VALUE;
      for (let k = 0; k < n; k++) {
        let cost = grid[i][j] + moveCost[grid[i][j]][k] + grid[i + 1][k];
        minCost = Math.min(minCost, cost);
      }
      grid[i][j] = minCost;
    }
  }
  return Math.min(...grid[0]);
};

// console.log(minPathCost([[5,3],[4,0],[2,1]], [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]));
// console.log(minPathCost([[5,1,2],[4,0,3]], [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]]));


/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const n = cookies.length;
  return dfs(0, new Array(k).fill(0), 0);

  function dfs(idx, piles, max) {
    if (idx === n) {
      return max;
    }
    let min = Number.MAX_VALUE;
    for (let i = 0; i < k; i++) {
      piles[i] += cookies[idx];
      min = Math.min(min, dfs(idx + 1, piles, Math.max(max, piles[i])));
      piles[i] -= cookies[idx];
    }
    return min;
  }
};

// console.log(distributeCookies([8,15,10,20,8], 2));
// console.log(distributeCookies([6,1,3,2,2,4,1,2], 3));3


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let left = 0, right = nums[n - 1] - nums[0] + 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let cnt = 0;
    for (let i = 0, j = 0; j < n; j++) {
      while (nums[j] - nums[i] > mid) {
        i++;
      }
      cnt += j - i;
    }
    if (cnt >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};


/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }
  if (head === head.next) {
    head.next = node;
    node.next = head;
    return head;
  }
  let cur = head, next = head.next;
  while (next !== head) {
    if (insertVal >= cur.val && insertVal <= next.val) {
      break;
    }
    if (cur.val > next.val) {
      if (insertVal > cur.val || insertVal < next.val) {
        break;
      }
    }
    cur = cur.next;
    next = next.next;
  }
  cur.next = node;
  node.next = next;
  return head;
};

function Node(val, next) {
  this.val = val;
  this.next = next;
};

// let tail1, tail2, tail3;
// const head1 = new Node(3, new Node(4, tail1 = new Node(1)));
// tail1.next = head1;
// const head2 = tail2 = new Node(1);
// tail2.next = head2;
// const head3 = new Node(3, new Node(3, new Node(3, tail3 = new Node(3))));
// tail3.next = head3;
// console.log(insert(head1, 2));
// console.log(insert(null, 1));
// console.log(insert(head2, 0));
// console.log(insert(head3, 5));


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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const cnt = new Map();
  dfs(root);
  let max = 0, ans = [];
  for (const [sum, c] of cnt) {
    if (c >= max) {
      if (c > max) {
        max = c;
        ans.length = 0;
      }
      ans.push(sum);
    }
  }
  return ans;

  function dfs(node) {
    if (!node) {
      return 0;
    }
    const sum = node.val + dfs(node.left) + dfs(node.right);
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
    return sum;
  }
};


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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const left = [];
  dfs(root, 0);
  return left[left.length - 1];

  function dfs(node, depth) {
    if (node) {
      if (left[depth] === undefined) {
        left.push(node.val);
      }
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    }
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// console.log(findBottomLeftValue(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
// console.log(findBottomLeftValue(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5, new TreeNode(7)), new TreeNode(6)))));


/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  const n = strs.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (strs[i].length < ans) {
      continue;
    }
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      ans = strs[i].length;
    }
  }
  return ans;

  function isSubsequence(str1, str2) {
    const m = str1.length, n = str2.length;
    if (m >= n) {
      return str1 === str2;
    }
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (str1[i] === str2[j]) {
        i++;
      }
      j++;
    }
    return i === m;
  }
};

// console.log(findLUSlength(["aba","cdc","eae"]));
// console.log(findLUSlength(["aaa","aaa","aa"]));
// console.log(findLUSlength(["abcde","ade",""]));
// console.log(findLUSlength(["aabbcc", "aabbcc","cb"]));

const map = new Map();
let id = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  map.set(++id, longUrl);
  return "http://tinyurl.com/" + id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return map.get(Number(shortUrl.slice(shortUrl.lastIndexOf("/") + 1)));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

let x, y;
console.log(x = encode("https://www.leetcode.com"));
console.log(y = encode("https://www.baidu.com"));
console.log(decode(x));
console.log(decode(y));
/**
 * @author MZJ
 * @date 2022-05-01
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  const n = number.length;
  const arr = number.split("");
  let ans = "0";
  for (let i = 0; i < n; i++) {
    if (arr[i] === digit) {
      const val = [...arr.slice(0, i), ...arr.slice(i + 1)].join("");
      if (compare(ans, val) === -1) {
        ans = val;
      }
    }
  }
  return ans;

  function compare(a, b) {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  }
};

// console.log(removeDigit("123", "3"));
// console.log(removeDigit("1231", "1"));
// console.log(removeDigit("551", "5"));


/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const n = cards.length;
  const arr = cards.map((v, i) => [v, i]);
  arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  let ans = -1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1][0] === arr[i][0]) {
      const dist = arr[i + 1][1] - arr[i][1] + 1;
      if (ans !== -1) {
        ans = Math.min(ans, dist);
      } else {
        ans = dist;
      }
    }
  }
  return ans;
};

// console.log(minimumCardPickup([3,4,2,3,4,7]))
// console.log(minimumCardPickup([1,0,5,3]))


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
  const n = nums.length;
  const pre = new Array(n).fill(0);
  pre[0] = Number(nums[0] % p === 0);
  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + (nums[i] % p === 0);
  }
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const subArr = nums.slice(i, j), kp = pre[j - 1] - (pre[i - 1] || 0);
      if (kp <= k) {
        set.add(subArr.join("-"));
      }
    }
  }
  return set.size;
};

// console.log(countDistinct([2,3,3,2,2], 2, 2));
// console.log(countDistinct([1,2,3,4], 4, 1));


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const values1 = [], values2 = [];
  inOrder(root1, values1);
  inOrder(root2, values2);
  return merge(values1, values2);

  function inOrder(node, values) {
    if (node) {
      inOrder(node.left, values);
      values.push(node.val);
      inOrder(node.right, values);
    }
  }

  function merge(a, b) {
    const m = a.length, n = b.length;
    const c = new Array(m + n);
    let i = 0, j = 0, k = 0;
    while (i < m && j < n) {
      if (a[i] <= b[j]) {
        c[k++] = a[i++];
      } else {
        c[k++] = b[j++];
      }
    }
    while (i < m) {
      c[k++] = a[i++];
    }
    while (j < n) {
      c[k++] = b[j++];
    }
    return c;
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const str = "dvndpluspo";
for (let i = 0; i < 26; i++) {
  const str2 = str.split("").map(ch => {
    let code = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    code = (code + i) % 26;
    return String.fromCharCode(code + 'a'.charCodeAt(0));
  }).join("");
  console.log(str2);
}
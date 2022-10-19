/**
 * @author MZJ
 * @date 2022-10
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
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  let str = number.replace(/ /g, '').replace(/-/g, '');
  let res = '';
  while (str.length > 4) {
    res += str.slice(0, 3) + '-';
    str = str.slice(3);
  }
  if (str.length === 4) {
    res += str.slice(0, 2) + '-' + str.slice(2);
  } else {
    res += str;
  }
  return res;
};

// console.log(reformatNumber("1-23-45 6"));
// console.log(reformatNumber("123 4-567"));
// console.log(reformatNumber("123 4-5678"));
// console.log(reformatNumber("12"));
// console.log(reformatNumber("--17-5 229 35-39475 "));
// console.log(reformatNumber("1-23-45 6"));


/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  const n = start.length;
  let i = 0, j = 0;
  while (i < n && j < n) {
    while (i < n && start[i] === "X") {
      i++;
    }
    while (j < n && end[j] === "X") {
      j++;
    }
    if (i < n && j < n) {
      if (start[i] !== end[j]) {
        return false;
      } else if (start[i] === "L" && i < j || start[i] === "R" && i > j) {
        return false;
      }
      i++;
      j++;
    }
  }
  while (i < n) {
    if (start[i++] !== "X") {
      return false;
    }
  }
  while (j < n) {
    if (end[j++] !== "X") {
      return false;
    }
  }
  return true;
};

// console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));
// console.log(canTransform("RXR", "XXR"));


/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  while (s.includes("()")) {
    s.replace("()", "");
  }
  return s.length;
};


/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const map = new Map();
  for (const cpdomain of cpdomains) {
    const [count, domain] = cpdomain.split(" ");
    const subdomains = domain.split(".");
    for (let i = 0; i < subdomains.length; i++) {
      const subdomain = subdomains.slice(i).join(".");
      map.set(subdomain, (map.get(subdomain) || 0) + parseInt(count));
    }
  }
  const res = [];
  for (const [key, value] of map.entries()) {
    res.push(`${value} ${key}`);
  }
  return res;
};

// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
// console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  const n = arr.length;
  const ones = arr.reduce((pre, cur) => pre + cur, 0);
  if (ones % 3 !== 0) {
    return [-1, -1];
  }
  if (ones === 0) {
    return [0, 2];
  }
  const k = ones / 3;
  let first = -1, second = -1, third = -1, c = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      c++;
      if (c === 1) {
        first = i;
      } else if (c === k + 1) {
        second = i;
      } else if (c === 2 * k + 1) {
        third = i;
      }
    }
  }
  const len = n - third;
  if (first + len > second || second + len > third) {
    return [-1, -1];
  }
  for (let i = 0; i < len; i++) {
    if (arr[first + i] !== arr[second + i] || arr[second + i] !== arr[third + i]) {
      return [-1, -1];
    }
  }
  return [first + len - 1, second + len];
};

// console.log(threeEqualParts([1,0,1,0,1]));
// console.log(threeEqualParts([1,1,0,1,1]));
// console.log(threeEqualParts([1,1,0,0,1]));


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  return nums.reduce((pre, cur, index) => {
    if (index === 0 || nums[index - 1] >= cur) {
      pre.push(cur);
    } else {
      pre[pre.length - 1] += cur;
    }
    return pre;
  }, []).reduce((pre, cur) => Math.max(pre, cur), 0);
};

// console.log(maxAscendingSum([10,20,30,5,10,50]));
// console.log(maxAscendingSum([10,20,30,40,50]));
// console.log(maxAscendingSum([12,17,15,13,10,11,12]));
// console.log(maxAscendingSum([100,10,1]));


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const n = nums1.length;
  const idx1 = new Array(n).fill(0);
  const idx2 = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    idx1[i] = i;
    idx2[i] = i;
  }
  idx1.sort((i, j) => nums1[i] - nums1[j]);
  idx2.sort((i, j) => nums2[i] - nums2[j]);

  const ans = new Array(n).fill(0);
  let left = 0, right = n - 1;
  for (let i = 0; i < n; ++i) {
    if (nums1[idx1[i]] > nums2[idx2[left]]) {
      ans[idx2[left]] = nums1[idx1[i]];
      ++left;
    } else {
      ans[idx2[right]] = nums1[idx1[i]];
      --right;
    }
  }
  return ans;
};

// console.log(advantageCount([2,7,11,15], [1,10,4,11]));
// console.log(advantageCount([12,24,8,32], [13,25,32,11]));
// console.log(advantageCount([2,0,4,1,2], [1,3,0,0,2]));
// console.log(advantageCount([2,7,11,15], [1,10,4,11]));


/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const stack = [0];
  for (const ch of s) {
    if (ch === "(") {
      stack.push(0);
    } else {
      const v = stack.pop();
      const top = stack.pop() + Math.max(2 * v, 1);
      stack.push(top);
    }
  }
  return stack.pop();
};

// console.log(scoreOfParentheses("()"));
// console.log(scoreOfParentheses("(())"));
// console.log(scoreOfParentheses("()()"));
// console.log(scoreOfParentheses("(()(()))"));


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  const set = new Set(nums);
  let node = head;
  let cur = false, cnt = 0;
  while (node) {
    if (set.has(node.val)) {
      if (!cur) {
        cur = true;
        cnt++;
      }
    } else {
      cur = false;
    }
    node = node.next;
  }
  return cnt;
};


/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  const graph = new Array(n + 1).fill(0).map(() => []);
  for (const [u, v] of dislikes) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const colors = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0) {
      const queue = [i];
      colors[i] = 1;
      while (queue.length) {
        const u = queue.shift();
        for (const v of graph[u]) {
          if (colors[v] === 0) {
            colors[v] = -colors[u];
            queue.push(v);
          } else if (colors[v] === colors[u]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

// console.log(possibleBipartition(4, [[1,2],[1,3],[2,4]]));
// console.log(possibleBipartition(3, [[1,2],[1,3],[2,3]]));
// console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]]));


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const n = fruits.length;
  const cnt = new Map();
  let ans = 0;
  for (let i = 0, j = 0; i < n && j < n; j++) {
    cnt.set(fruits[j], (cnt.get(fruits[j]) || 0) + 1);
    while (cnt.size > 2) {
      cnt.set(fruits[i], cnt.get(fruits[i]) - 1);
      if (cnt.get(fruits[i]) === 0) {
        cnt.delete(fruits[i]);
      }
      i++;
    }
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};

// console.log(totalFruit([1,2,1]));
// console.log(totalFruit([0,1,2,2]));
// console.log(totalFruit([1,2,3,2,2]));
// console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));


/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const len = digits.length;
  const s = n.toString(), m = s.length;
  let ans = 0;
  for (let i = 1; i < m; i++) {
    ans += Math.pow(len, i);
  }
  for (let i = 0; i < m; i++) {
    let flag = false;
    for (const digit of digits) {
      if (digit < s[i]) {
        ans += Math.pow(len, m - i - 1);
      } else if (digit === s[i]) {
        flag = true;
      }
    }
    if (!flag) {
      return ans;
    }
  }

};

// console.log(atMostNGivenDigitSet(["1","3","5","7"], 100));
// console.log(atMostNGivenDigitSet(["1","4","9"], 1000000000));
// console.log(atMostNGivenDigitSet(["7"], 8));
// console.log(atMostNGivenDigitSet(["1","4","9"], 1));
// console.log(atMostNGivenDigitSet(["3","4","8"], 4));


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let s0 = students.filter(x => x === 0).length;
  let s1 = students.length - s0;
  for (const x of sandwiches) {
    if (x === 0 && s0 > 0) {
      s0--;
    } else if (x === 1 && s1 > 0) {
      s1--;
    } else {
      break;
    }
  }
  return s0 + s1;
};

console.log(countStudents([1,1,0,0], [0,1,0,1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));

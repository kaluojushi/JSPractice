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


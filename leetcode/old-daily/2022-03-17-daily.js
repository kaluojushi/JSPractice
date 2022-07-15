/**
 * @author MZJ
 * @date 2022-03-17
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  let ans = "";
  for (const word of words) {
    if (trie.searchEveryPrefix(word)) {
      if (word.length > ans.length || word.length === ans.length && word.localeCompare(ans) < 0) {
        ans = word;
      }
    }
  }
  return ans;
};

class Trie {
  constructor() {
    this.trie = {};
  }

  insert(word) {
    let node = this.trie;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.isEnd = true;
  }

  searchEveryPrefix(word) {
    let node = this.trie;
    for (const ch of word) {
      if (!node[ch] || !node[ch].isEnd) {
        return false;
      }
      node = node[ch];
    }
    return node && node.isEnd;
  }
}

// console.log(longestWord(["w","wo","wor","worl", "world"]));
// console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  const firstHalfEnd = findFirstHalfEnd(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);
  let p1 = head, p2 = secondHalfStart;
  let flag = true;
  while (flag && p2) {
    if (p1.val !== p2.val) {
      flag = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return flag;
};

function findFirstHalfEnd(head) {
  let fast = head, slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// console.log(isPalindrome(new ListNode(1, new ListNode(2))));
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))));


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let col0Flag = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      col0Flag = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (col0Flag) {
      matrix[i][0] = 0;
    }
  }
  // return matrix;
};

// console.log(setZeroes([[1,1,1], [1,0,1], [1,1,1]]));
// console.log(setZeroes([[0,1,2,0], [3,4,5,2], [1,3,1,5]]));


/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
// var maxRunTime = function(n, batteries) {
//   let l = 0, r = Math.floor(batteries.reduce((sum, b) => sum + b, 0) / n);
//   while (l <= r) {
//     let mid = l + Math.floor((r - l) / 2);
//     let sum = batteries.reduce((sum, b) => sum + Math.min(b, mid), 0);
//     if (n * mid <= sum) {
//       l = mid + 1;
//     } else {
//       r = mid - 1;
//     }
//   }
//   return l - 1;
// };
var maxRunTime = function(n, batteries) {
  batteries.sort((a, b) => b - a);
  let sum = batteries.reduce((sum, b) => sum + b, 0);
  for (const b of batteries) {
    const x = Math.floor(sum / n);
    if (b <= x) {
      return x;
    }
    sum -= b;
    n--;
  }
};

console.log(maxRunTime(2, [3,3,3]));
console.log(maxRunTime(2,[1,1,1,1]));
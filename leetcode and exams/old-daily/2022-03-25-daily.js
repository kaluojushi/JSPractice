/**
 * @author MZJ
 * @date 2022-03-25
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return Math.floor(n / 5) + Math.floor(n / 25) + Math.floor(n / 125) + Math.floor(n / 625) + Math.floor(n / 3125);
};

// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(10));
// console.log(trailingZeroes(30));


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while (true) {
    const n = s.length;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
    if (s.length === n) {
      return n === 0;
    }
  }
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));
// console.log(isValid("(("));


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))));
// console.log(mergeTwoLists(null, null));
// console.log(mergeTwoLists(null, new ListNode(0)));


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let k = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

// console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// console.log(removeDuplicates([1]))


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  let left = 0, right = n - 1, leftMax = 0, rightMax = 0;
  let ans = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax <= rightMax) {
      ans += leftMax - height[left++];
    } else {
      ans += rightMax - height[right--];
    }
  }
  return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
console.log(trap([3,2,1,2,3]));
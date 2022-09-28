/**
 * @author MZJ
 * @date 2022-09-28
 * @description 蔚来笔试
 * @copyright weilai
 */

function ListNode(x, next) {
  this.val = x;
  this.next = next || null;
}

function minValue(head, s) {
  let ans = 0, sum = head.val, max = head.val;
  let cur = head.next, cnt = 1, i = 1;
  while (cur && i < s.length) {
    if (s[i] === s[i - 1]) {
      sum += cur.val;
      max = Math.max(max, cur.val);
      cnt++;
    } else {
      if (cnt > 1) {
        ans += sum - max;
      }
      sum = cur.val;
      max = cur.val;
      cnt = 1;
    }
    cur = cur.next;
    i++;
  }
  if (cnt > 1) {
    ans += sum - max;
  }
  return ans;
}

console.log(minValue(new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(5))))), "RWRRW"));


function TreeNode(x, left, right) {
  this.val = x;
  this.left = left || null;
  this.right = right || null;
}

function TreeDepth(pRoot) {
  if (!pRoot) {
    return 0;
  }
  return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
}
/**
 * @author MZJ
 * @date 2022-11-17
 * @description 美团面试
 * @copyright meituan
 */


/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd( head ,  n ) {
  if (n === 0) {
    return head;
  }
  if (!head) {
    return null;
  }
  let cnt = 0, fast = head, slow = head, pre = null;
  while (fast) {
    fast = fast.next;
    if (cnt <= n) {
      cnt++;
    } else {
      pre = slow;
      slow = slow.next;
    }
  }
  if (cnt !== n + 1) {

  }
  if (slow === head) {
    return slow.next;
  } else {
    pre.next = slow.next;
    return head;
  }
}
module.exports = {
  removeNthFromEnd : removeNthFromEnd
};



while (true) {
  const [m, n] = readline().split(" ").map(Number);
  if (m === 0 && n === 0) {
    break;
  }
  const a = readline().split(" ").map(Number);
  console.log(fun(m, n, a));
}

function fun(m, n, a) {
  const ans = new Array(n).fill(0);
  const lcmv = a.reduce((res, i) => lcm(res, i), 1);
  for (let i = 0; i < n; i++) {
    ans[i] = lcmv / a[i];
  }
  const sum = ans.reduce((i, j) => i + j);
  if (sum <= lcmv && m % sum === 0) {
    return ans.map(i => m / sum * i).join(" ");
  }
  return "Can't Solve";
}

function gcd(x, y) {
  if (y > 0) {
    return gcd(y, x % y);
  } else {
    return x;
  }
}

function lcm(x, y) {
  return Math.floor(x * y / gcd(x, y));
}
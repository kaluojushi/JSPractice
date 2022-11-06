/**
 * @author MZJ
 * @date 2022-10-28
 * @description 得物笔试
 * @copyright dewu
 */


// const n = parseInt(readline());
// const preorder = readline().split(' ').map(Number);
// const inorder = readline().split(' ').map(Number);
// console.log(fun1(n, preorder, inorder).join(' '));

function fun1(n, preorder, inorder) {
  if (n === 0) {
    return [];
  }
  const root = preorder[0];
  const i = inorder.indexOf(root);
  return [...fun1(i, preorder.slice(1, i + 1), inorder.slice(0, i)), ...fun1(n - i - 1, preorder.slice(i + 1), inorder.slice(i + 1)), root];
}

// console.log(fun1(3, [1,2,3], [2,1,3]));
// console.log(fun1(8, [8,7,5,4,3,2,1,6], [5,7,3,4,1,2,8,6]));


/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
function ListNode(x, next){
  this.val = x;
  this.next = next || null;
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd( head ,  n ) {
  if (!head) {
    return head;
  }
  let i = head, j = head, jp = null, cnt = 0;
  while (i) {
    i = i.next;
    cnt++;
    if (cnt > n) {
      jp = j;
      j = j.next;
    }
  }
  if (j === head) {
    return head.next;
  }
  jp.next = j.next;
  return head;
}

// console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2));
// console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2));


// import java.util.*;
//
// public class Coins {
//   public int countWays(int n) {
//   int MOD = 1000000007;
//   int[] arr = new int[]{25, 10, 5, 1};
// int[] dp = new int[n + 1];
// dp[0] = 1;
// for (int c : arr) {
//   for (int i = c; i <= n; i++) {
//     dp[i] = (dp[i] + dp[i - c]) % MOD;
//   }
// }
// return dp[n];
// }
//
// public static void main(String[] args) {
//   Coins coins = new Coins();
//   System.out.println(coins.countWays(11));
// }
// }

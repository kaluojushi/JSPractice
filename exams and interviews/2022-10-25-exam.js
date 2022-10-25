/**
 * @author MZJ
 * @date 2022-10-25
 * @description 松应科技笔试
 * @copyright openverse
 */


/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

function TreeNode(x, left, right) {
  this.val = x;
  this.left = left || null;
  this.right = right || null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param t1 TreeNode类
 * @param t2 TreeNode类
 * @return TreeNode类
 */
function mergeTrees( t1 ,  t2 ) {
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
}


function formatString( A ,  n ,  arg ,  m ) {
  const subs = A.split("%s"), len = subs.length;
  return subs.reduce((ans, sub, i) => ans + sub + (i < len - 1 ? arg[i] : ""), "") + arg.slice(len - 1).join("");
}

// console.log(formatString("A%sC%sE",7,['B','D','F'],3));


function MLS( arr ) {
  arr = Array.from(new Set(arr)).sort((a, b) => a - b);
  const n = arr.length;
  let ans = 1, cur = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      cur++;
    } else {
      cur = 1;
    }
    ans = Math.max(ans, cur);
  }
  return ans;
}

console.log(MLS([100, 4, 200, 1, 3, 2]));
console.log(MLS([1,1,1]));
console.log(MLS([3,3,4,4,5,5,6,6]));
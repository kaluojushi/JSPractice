/**
 * @author MZJ
 * @date 2022-10-27
 * @description 58面试
 * @copyright 58
 */


function sum(n) {
  let x = 0, y = 1, i = 1, ans = 1;
  while (i < n) {
    ans += x + y;
    [x, y] = [y, x + y];
    i++;
  }
  return ans;
}

console.log(sum(6));
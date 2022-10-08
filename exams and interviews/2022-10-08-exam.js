/**
 * @author MZJ
 * @date 2022-10-08
 * @description 美团笔试
 * @copyright meituan
 */


// const T = parseInt(readline());
// for (let i = 0; i < T; i++) {
//   const w = readline().split(' ').map(Number);
//   const str = readline();
//   console.log(fun1(w, str));
// }

function fun1(w, str) {
  let ans = 0;
  let flag = true;  // 全部为0
  for (const ch of str) {
    if (w[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
      ans++;
      flag = false;
    }
  }
  return flag ? str.length : ans;
}

console.log(fun1([2,2,2,2,2], "abcde"));


// const [n, k] = readline().split(' ').map(Number);
// const attacks = readline().split(' ').map(Number);

function fun2(n, k, attacks) {
  const sorted = attacks.map((v, i) => [v, i]).sort(([v1, i1], [v2, i2]) => v1 !== v2 ? v2 - v1 : i1 - i2);
  for (let i = 0; i < k; i++) {
    attacks[sorted[i][1]] = 0;
  }
  let cur = 0, ans = 0;
  for (let i = 0; i < n; i++) {
    if (attacks[i] === 0) {
      cur++;
    } else {
      ans += attacks[i] - cur;
    }
  }
  return ans;
}

// console.log(fun2(n, k, attacks));
// console.log(fun2(5, 2, [7,3,2,6,4]));
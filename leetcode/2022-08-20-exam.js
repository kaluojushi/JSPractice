/**
 * @author MZJ
 * @date 2022-08-20
 * @description 美团模拟笔试
 * @copyright meituan
 */

function fun1(n, s1, s2) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(s1[i]);
    ans.push(s2[i]);
  }
  return ans.join("");
}

function fun3(n, m, ps, as) {
  let ans = 0;
  let dif = new Array(n); // 差分数组
  for (let i = 0; i < n; i++) {
    const score = as[i] * ps[i] / 100;
    ans += score;
    dif[i] = as[i] - score;
  }
  dif.sort((a, b) => b - a);  // 降序排序
  for (let i = 0; i < m; i++) {
    ans += dif[i];
  }
  return ans.toFixed(2);  // 保留2位
}

// console.log(fun3(2, 1, [89, 38], [445, 754]))


function fun2(n, x1, y1, x2, y2, x3, y3, d1, d2, d3) {
  for (let a = 1; a <= n; a++) {
    let b1 = y1 - (d1 - Math.abs(x1 - a));
    let b2 = y1 + (d1 - Math.abs(x1 - a));
    for (const b of [b1, b2]) {
      if (b >= 1 && b <= n && Math.abs(x2 - a) + Math.abs(y2 - b) === d2 && Math.abs(x3 - a) + Math.abs(y3 - b) === d3) {
        return [a, b];
      }
    }
  }
}

// console.log(fun2(3, 2, 1, 2, 2, 2, 3, 2, 1, 2));


function fun4(n, m, a, b) {
  if (n < m) {
    while (a.length < m) {
      a.push(0);
    }
  } else if (m < n) {
    while (b.length < n) {
      b.push(0);
    }
  }
  a.sort((a, b) => Math.abs(a) === Math.abs(b) ? a - b : Math.abs(a) - Math.abs(b));
  b.sort((a, b) => Math.abs(a) === Math.abs(b) ? a - b : Math.abs(a) - Math.abs(b));
  let ans = 0;
  for (let i = 0; i < Math.max(n, m); i++) {
    ans += Math.abs(a[i] - b[i]);
  }
  return ans;
}

console.log(fun4(1, 1, [-9821], [7742]));
console.log(fun4(5, 5, [1,2,3,4,5], [2,3,4,5,6]));
console.log(fun4(2, 5, [1, 2], [6,8,10, 12, 100]))
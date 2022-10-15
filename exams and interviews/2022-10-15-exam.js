/**
 * @author MZJ
 * @date 2022-10-15
 * @description 滴滴笔试
 * @copyright didi
 */


// const [n, x, y, u, v] = readline().split(' ').map(Number);
// const a = readline().split(' ').map(Number);
// const b = readline().split(' ').map(Number);
// console.log(fun1(n, x, y, u, v, a, b));

function fun1(n, x, y, u, v, a, b) {
  const cntA = Math.ceil(a.reduce((a, b) => a + b) / x), cntB = Math.ceil(b .reduce((a, b) => a + b) / y);
  const cnt = cntA + cntB;
  if (2 * u > v) {
    return Math.floor(cnt / 2) * v + (cnt % 2 ? Math.min(u, v) : 0);
  } else {
    return cnt * u;
  }
}

console.log(fun1(3,5,5,9,5,[4,1,3],[3,4,4]));


// const [n, k] = readline().split(' ').map(Number);
// const w = readline().split(' ').map(Number);
// console.log(fun2(n, k ,w));

function fun2(n, k, w) {
  w.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const left = w[i], right = left + k;
    const j = getRightIdx(i, right);
    console.log(left, j - i + 1);
    ans = Math.max(ans, j - i + 1);
  }
  return ans;

  function getRightIdx(i, right) {
    let l = i, r = n;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (w[mid] <= right) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return w[l] <= right ? l : l - 1;
  }
}

// console.log(fun2(6,3,[1,3,1,5,3,1]));
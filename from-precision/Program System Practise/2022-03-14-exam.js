/**
 * @author MZJ
 * @date 2022-03-14
 * @description 阿里模拟笔试
 * @copyright alibaba
 */

function fun1(num) {
  const n = num.length;
  const map = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];
  let ans = 0;
  for (let i = 2; i < n; i++) {
    let d = num[i];
    if (d >= 'a' && d <= 'f') {
      d = String(d.charCodeAt(0) - 'a'.charCodeAt(0) + 10);
    }
    ans += map[d];
  }
  return ans;
}

console.log(fun1("0x3f")) //6
console.log(fun1("0xeeeeedddddccccc11111")) // 45


function fun2(n, m, ...nums) {
  const arr = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = 0; i < nums.length; i += m) {
    arr[Math.floor(i / m)].splice(0, m, ...nums.slice(i, i + m))
  }
  const row = new Array(n).fill(0), col = new Array(m).fill(0); // 每行、每列的人数
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        row[i]++;
        col[j]++;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    let pre = 0;  // 左边的人数
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        res += (pre > 0 ? 1 : 0) + (row[i] - pre > 0 ? 1 : 0);  // 左边的人+右边的人
      } else {
        pre++;
      }
    }
  }
  for (let j = 0; j < m; j++) {
    let pre = 0;  // 上面的人数
    for (let i = 0; i < n; i++) {
      if (arr[i][j] === 0) {
        res += (pre > 0 ? 1 : 0) + (col[j] - pre > 0 ? 1 : 0);  // 上面的人+下面的人
      } else {
        pre++;
      }
    }
  }
  return res;
}

// console.log(fun2(2,4,0,1,0,0,1,0,1,0)); // 9